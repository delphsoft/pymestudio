// Icon set — single-stroke, 1.5px, 24x24 viewBox
const Icon = ({ children, size = 24, strokeWidth = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const IconFactura = (p) => (
  <Icon {...p}>
    <path d="M6 3h9l3 3v15l-2-1.2-2 1.2-2-1.2-2 1.2-2-1.2L6 21V3Z"/>
    <path d="M9 9h6M9 13h6M9 17h3"/>
  </Icon>
);
const IconBook = (p) => (
  <Icon {...p}>
    <path d="M4 4h9a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"/>
    <path d="M16 4h4v13a3 3 0 0 1-3 3"/>
    <path d="M8 9h5M8 13h5"/>
  </Icon>
);
const IconBox = (p) => (
  <Icon {...p}>
    <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"/>
    <path d="m3 7.5 9 4.5 9-4.5M12 12v9"/>
  </Icon>
);
const IconUsers = (p) => (
  <Icon {...p}>
    <circle cx="9" cy="8" r="3.5"/>
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
    <path d="M16 4.5a3.5 3.5 0 0 1 0 7M21 20c0-2.6-1.7-4.9-4-5.7"/>
  </Icon>
);
const IconChart = (p) => (
  <Icon {...p}>
    <path d="M4 4v16h16"/>
    <path d="M8 14v3M12 10v7M16 6v11"/>
  </Icon>
);
const IconCard = (p) => (
  <Icon {...p}>
    <rect x="3" y="6" width="18" height="13" rx="2"/>
    <path d="M3 10h18M7 15h4"/>
  </Icon>
);
const IconBolt = (p) => (
  <Icon {...p}>
    <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z"/>
  </Icon>
);
const IconShield = (p) => (
  <Icon {...p}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/>
    <path d="m9 12 2 2 4-4"/>
  </Icon>
);
const IconPlug = (p) => (
  <Icon {...p}>
    <path d="M9 2v4M15 2v4"/>
    <path d="M7 6h10v6a5 5 0 0 1-10 0V6Z"/>
    <path d="M12 17v5"/>
  </Icon>
);
const IconClock = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 2"/>
  </Icon>
);
const IconChat = (p) => (
  <Icon {...p}>
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-4 4v-4H6a2 2 0 0 1-2-2V6Z"/>
  </Icon>
);
const IconSearch = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="6"/>
    <path d="m20 20-4.3-4.3"/>
  </Icon>
);
const IconCheck = (p) => (
  <Icon {...p} strokeWidth={2}>
    <path d="m5 12 4 4 10-10"/>
  </Icon>
);
const IconArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </Icon>
);
const IconArrowUpRight = (p) => (
  <Icon {...p}>
    <path d="M7 17 17 7M9 7h8v8"/>
  </Icon>
);
const IconStar = (p) => (
  <Icon {...p} strokeWidth={0}>
    <path d="m12 3 2.6 6 6.4.6-4.8 4.4 1.4 6.4-5.6-3.4-5.6 3.4 1.4-6.4L3 9.6 9.4 9 12 3Z" fill="currentColor"/>
  </Icon>
);
const IconPlus = (p) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14"/>
  </Icon>
);
const IconMenu = (p) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16"/>
  </Icon>
);
const IconClose = (p) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18"/>
  </Icon>
);
const IconPlay = (p) => (
  <Icon {...p} strokeWidth={0}>
    <path d="M8 5v14l11-7L8 5Z" fill="currentColor"/>
  </Icon>
);
const IconSparkle = (p) => (
  <Icon {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>
  </Icon>
);
const IconGlobe = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9"/>
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>
  </Icon>
);

const IconX = (p) => (
  <Icon {...p} strokeWidth={1.8}>
    <path d="M4 4l16 16M20 4 4 20"/>
  </Icon>
);
const IconInstagram = (p) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </Icon>
);
const IconLinkedin = (p) => (
  <Icon {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3"/>
    <path d="M8 10v7M8 7.5v.5M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>
  </Icon>
);
const IconYoutube = (p) => (
  <Icon {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.5"/>
    <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none"/>
  </Icon>
);

// === Brand logo — PymeStudio =============================================
// 4-piece "S" inscribed in a horizontal hexagon. Recreated from brand ref.
const SumaLogo = ({ size = 32, color = "#1E4538" }) => (
  <svg width={size} height={size * (200/220)} viewBox="0 0 220 200" fill="none"
       aria-label="PymeStudio" role="img">
    <g fill={color}>
      {/* TOP-LEFT chunky pentagon — slanted top, vertical right, curved bottom */}
      <path d="
        M 50 64
        L 104 40
        C 107 39, 110 41, 110 44
        L 110 110
        C 110 116, 102 117, 92 115
        C 74 112, 56 117, 48 113
        C 45 112, 44 109, 45 106
        L 50 64 Z
      "/>
      {/* TOP-RIGHT leaf — peak upper-right, tail at center */}
      <path d="
        M 115 110
        C 115 92, 128 68, 150 50
        C 165 40, 180 36, 184 46
        C 186 56, 174 70, 158 82
        C 144 96, 130 106, 122 110
        C 117 111, 114 112, 115 110 Z
      "/>
      {/* Bottom half = 180° rotation around (110, 100) */}
      <g transform="rotate(180 110 100)">
        <path d="
          M 50 64
          L 104 40
          C 107 39, 110 41, 110 44
          L 110 110
          C 110 116, 102 117, 92 115
          C 74 112, 56 117, 48 113
          C 45 112, 44 109, 45 106
          L 50 64 Z
        "/>
        <path d="
          M 115 110
          C 115 92, 128 68, 150 50
          C 165 40, 180 36, 184 46
          C 186 56, 174 70, 158 82
          C 144 96, 130 106, 122 110
          C 117 111, 114 112, 115 110 Z
        "/>
      </g>
    </g>
  </svg>
);

// Brand wordmark — logo + "PymeStudio" type
const SumaWordmark = ({ size = 28, color, gap = 10 }) => (
  <span style={{display:'inline-flex', alignItems:'center', gap:`${gap}px`, lineHeight:1}}>
    <SumaLogo size={size} color={color}/>
    <span style={{
      fontWeight:600, letterSpacing:'-0.02em', fontSize:`${Math.round(size * 0.72)}px`,
      fontFeatureSettings:'"ss01"',
    }}>PymeStudio</span>
  </span>
);

Object.assign(window, {
  IconFactura, IconBook, IconBox, IconUsers, IconChart, IconCard,
  IconBolt, IconShield, IconPlug, IconClock, IconChat, IconSearch,
  IconCheck, IconArrowRight, IconArrowUpRight, IconStar, IconPlus,
  IconMenu, IconClose, IconPlay, IconSparkle, IconGlobe,
  IconX, IconInstagram, IconLinkedin, IconYoutube,
  SumaLogo, SumaWordmark,
});
