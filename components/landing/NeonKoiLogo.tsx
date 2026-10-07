/**
 * Logo of "Neon Koi", the fictional collection in the demo video and swap card.
 * Pixel art in the style of the collection's NFTs: a crowned kohaku koi seen from above
 * on a warm gold tile, the same motif as the collection icon in the video.
 */

// Left half of each pixel row; the right half is its mirror, so the fish stays symmetric.
// Keys: K outline, W body, F fins/tail, E eye, Y crown, P jewel, '.' transparent.
const LEFT_HALF = [
  '........YP',
  '.......YYY',
  '.......KKK',
  '......KWWW',
  '.....KWWWW',
  '.....KEWWW',
  '....KWWWWW',
  '....KWWWWW',
  '....KWWWWW',
  '...KKWWWWW',
  '..KFKWWWWW',
  '.KFFKWWWWW',
  '.KKK.KWWWW',
  '.....KWWWW',
  '......KWWW',
  '......KWWW',
  '.......KWW',
  '........KW',
  '........KF',
  '.......KFF',
  '......KFFF',
  '.....KFFFK',
  '.....KFKK.',
  '.....KK...',
]

// Kohaku patches are deliberately asymmetric, like the NFTs. [x, y] in the 20-wide grid.
const PATCHES: ReadonlyArray<readonly [number, number]> = [
  [8, 3], [9, 3], [10, 3], [9, 4], [10, 4], [11, 4], [12, 4],
  [12, 7], [13, 7], [14, 7], [12, 8], [13, 8], [6, 9], [7, 9],
  [5, 10], [6, 10], [7, 10], [8, 10], [6, 11], [7, 11], [7, 12],
  [10, 13], [11, 13], [10, 14], [11, 14], [11, 15],
]

const PALETTE: Record<string, string> = {
  K: '#3A2620',
  W: '#FFF8F0',
  O: '#F0602E',
  E: '#1E1416',
  F: '#F7DCC6',
  Y: '#F5B82E',
  P: '#D9467F',
}

const PIXELS: string[][] = LEFT_HALF.map((half) => [...half, ...[...half].reverse()])
for (const [x, y] of PATCHES) PIXELS[y][x] = 'O'

const GRID_W = PIXELS[0].length
const GRID_H = PIXELS.length

export function NeonKoiLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`relative block overflow-hidden bg-[linear-gradient(160deg,#FFEDB3,#FFD27A_55%,#FFB86B)] ${className}`}>
      <svg
        viewBox={`-1.5 -1.5 ${GRID_W + 3} ${GRID_H + 3}`}
        className="absolute inset-0 h-full w-full"
        shapeRendering="crispEdges"
        role="img"
        aria-label="Neon Koi"
      >
        {PIXELS.flatMap((row, y) =>
          row.map((key, x) =>
            key === '.' ? null : <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={PALETTE[key]} />,
          ),
        )}
      </svg>
    </span>
  )
}
