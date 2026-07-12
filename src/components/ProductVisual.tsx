const palette: Record<string, [string, string, string]> = {
  luz: ['#D89A69', '#F1D3B9', '#1C3739'],
  pulso: ['#7B3945', '#D89A69', '#F7F3EE'],
  pausa: ['#80978D', '#E5C9A9', '#1C3739'],
  orbita: ['#111111', '#D89A69', '#EDEBEB'],
  ritmo: ['#2F4F51', '#D89A69', '#F7F3EE'],
  vaso: ['#45595A', '#B8C0BB', '#1C3739'],
  gift: ['#D89A69', '#F7F3EE', '#1C3739'],
}

export function ProductVisual({ token, name, className = '' }: { token: string; name: string; className?: string }) {
  const key = token.replace('-detail', '')
  const [background, accent, ink] = palette[key] ?? palette.luz
  const detail = token.includes('detail')
  return (
    <svg className={`product-visual ${className}`} role="img" aria-label={`Representación editorial de ${name}`} viewBox="0 0 640 760" style={{ background }}>
      <rect width="640" height="760" fill={background} />
      <circle cx={detail ? 110 : 530} cy={detail ? 640 : 120} r="220" fill="none" stroke={accent} strokeWidth="2" opacity=".7" />
      <path d="M0 590 C150 490 260 720 640 500 L640 760 L0 760Z" fill={ink} opacity=".18" />
      {key === 'vaso' ? (
        <g transform="translate(190 185)"><path d="M35 45h190l-22 355H58L35 45Z" fill={ink} /><path d="M20 0h220v55H20Z" rx="10" fill={accent} /><circle cx="130" cy="215" r="55" fill="none" stroke={accent} strokeWidth="3" /><text x="130" y="226" textAnchor="middle" fill={accent} fontSize="36" fontFamily="Montserrat">MØC</text></g>
      ) : key === 'gift' ? (
        <g transform="translate(85 220)"><rect width="470" height="285" rx="18" fill={ink} /><circle cx="235" cy="110" r="62" fill="none" stroke={accent} strokeWidth="3" /><text x="235" y="123" textAnchor="middle" fill={accent} fontSize="43" fontWeight="700" fontFamily="Montserrat">MØC</text><text x="235" y="205" textAnchor="middle" fill={accent} fontSize="16" letterSpacing="5" fontFamily="Montserrat">UN MOMENTO</text></g>
      ) : (
        <g transform="translate(150 120)"><path d="M45 65 70 0h200l25 65 12 485H33L45 65Z" fill={ink} /><path d="M45 65h250" stroke={accent} strokeWidth="5" /><circle cx="170" cy="255" r="88" fill="none" stroke={accent} strokeWidth="3" /><text x="170" y="268" textAnchor="middle" fill={accent} fontSize="50" fontWeight="700" fontFamily="Montserrat">MØC</text><text x="170" y="385" textAnchor="middle" fill={accent} fontSize="15" letterSpacing="4" fontFamily="Montserrat">COFFEE · MOOD · MUSIC</text></g>
      )}
    </svg>
  )
}
