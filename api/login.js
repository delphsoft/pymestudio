const { createClient } = require('@supabase/supabase-js')
const { SignJWT }      = require('jose')

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'facturafacil-secret-2026')

const ALLOWED_REDIRECTS = ['pymestudio.xyz', 'vercel.app', 'localhost']

function getSupabase() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ error: 'Email y contraseña requeridos' })

  const supabase = getSupabase()
  if (!supabase) return res.status(500).json({ error: 'Servicio de auth no configurado' })

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error || !data?.user) return res.status(401).json({ error: 'Credenciales incorrectas' })

  const user  = data.user
  const token = await new SignJWT({
    sub:   user.id,
    email: user.email,
    cuit:  user.user_metadata?.cuit || null,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(SECRET)

  res.status(200).json({ token })
}
