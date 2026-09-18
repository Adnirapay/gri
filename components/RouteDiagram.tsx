const STOPS = [
  { x: 40, y: 210, label: "Gudang" },
  { x: 190, y: 90, label: "Armada" },
  { x: 350, y: 170, label: "Alat Berat" },
  { x: 500, y: 60, label: "Tujuan" },
];

const PATH = `M${STOPS[0].x} ${STOPS[0].y} L${STOPS[1].x} ${STOPS[1].y} L${STOPS[2].x} ${STOPS[2].y} L${STOPS[3].x} ${STOPS[3].y}`;

export default function RouteDiagram() {
  return (
    <svg
      viewBox="0 0 560 260"
      className="h-auto w-full"
      role="img"
      aria-label="Alur layanan: gudang, armada, alat berat, tujuan"
    >
      <path d={PATH} fill="none" stroke="#E2E5EA" strokeWidth="2" />
      <path d={PATH} fill="none" stroke="#F4791D" strokeWidth="2.5" className="route-line" />

      {STOPS.map((s, i) => (
        <g key={s.label} className="route-dot" style={{ animationDelay: `${1.4 + i * 0.22}s` }}>
          <circle cx={s.x} cy={s.y} r={7} fill="#123FA6" />
          <circle cx={s.x} cy={s.y} r={12} fill="none" stroke="#123FA6" strokeWidth="1.5" opacity={0.35} />
          <text
            x={s.x}
            y={s.y - 20}
            textAnchor="middle"
            fontSize="13"
            fontFamily="var(--font-sans)"
            fill="#0F172A"
            opacity={0.75}
          >
            {s.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
