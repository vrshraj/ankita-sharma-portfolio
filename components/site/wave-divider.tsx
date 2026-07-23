type WaveDividerProps = {
  /** color of the wave fill (the section that comes next / the shape) */
  fill: string
  /** color of the stroke outline (optional) */
  stroke?: string
  /** width of the stroke (optional) */
  strokeWidth?: number
  /** flip vertically */
  flip?: boolean
  className?: string
}

/**
 * A soft curved section divider that mimics the reference site's wavy separators.
 * Render it at the top or bottom edge of a section. The `fill` should match the
 * color of the section the wave is "pouring" into.
 */
export function WaveDivider({ fill, stroke, strokeWidth, flip = false, className }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{ transform: flip ? 'scaleY(-1)' : undefined, lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        className="block h-[60px] w-full sm:h-[90px] md:h-[110px]"
      >
        {/* Fill path */}
        <path
          d="M0,64 C240,120 480,10 720,48 C960,86 1200,120 1440,56 L1440,130 L0,130 Z"
          fill={fill}
        />
        {/* Stroke path (only the curve) */}
        {stroke && (
          <path
            d="M0,64 C240,120 480,10 720,48 C960,86 1200,120 1440,56"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        )}
      </svg>
    </div>
  )
}
