import type { RefreshId } from '@/content/visualization-refresh.schema';
export type Point = readonly [number, number];
type Frame = { offset: number; point: Point; opacity: number };
export type Flight = { frames: Frame[]; exception?: boolean };
const frame = (offset: number, point: Point, opacity = 1): Frame => ({
  offset,
  point,
  opacity,
});
const horizontal: Point[] = [
  [60, 105],
  [200, 105],
  [340, 105],
];
export function storyLayout(id: RefreshId): {
  points: Point[];
  guide: string;
  flights: Flight[];
} {
  if (id === 'organisation')
    return {
      points: horizontal,
      guide: 'M60 40H340M60 165v35h280v-35M200 165v35',
      flights: horizontal.map(([x]) => ({
        frames: [
          frame(0, [x, 35], 0),
          frame(0.08, [x, 35]),
          frame(0.35, [x, 105]),
          frame(0.6, [x, 105]),
          frame(0.66, [x + 40, 105]),
          frame(0.86, [x + 40, 205]),
          frame(0.94, [x, 205]),
          frame(1, [x, 205], 0),
        ],
      })),
    };
  if (id === 'research')
    return {
      points: [
        [60, 65],
        [200, 175],
        [340, 65],
      ],
      guide: 'M60 65h280M200 175h180V65h-40',
      flights: [
        {
          frames: [
            frame(0, [60, 65], 0),
            frame(0.06, [60, 65]),
            frame(0.45, [340, 65]),
            frame(0.9, [340, 65]),
            frame(1, [340, 65], 0),
          ],
        },
        {
          frames: [
            frame(0, [200, 175], 0),
            frame(0.3, [200, 175], 0),
            frame(0.35, [200, 175]),
            frame(0.55, [380, 175]),
            frame(0.72, [380, 65]),
            frame(0.82, [340, 65]),
            frame(0.9, [340, 65]),
            frame(1, [340, 65], 0),
          ],
        },
      ],
    };
  if (id === 'handover')
    return {
      points: [
        [200, 45],
        [90, 175],
        [310, 175],
      ],
      guide: 'M200 45v55M200 100H90v75M200 100h110v75',
      flights: [
        {
          frames: [
            frame(0, [200, 45], 0),
            frame(0.08, [200, 45]),
            frame(0.25, [200, 100]),
            frame(0.4, [90, 100]),
            frame(0.55, [90, 175]),
            frame(0.9, [90, 175]),
            frame(1, [90, 175], 0),
          ],
        },
        {
          exception: true,
          frames: [
            frame(0, [200, 45], 0),
            frame(0.4, [200, 45], 0),
            frame(0.45, [200, 45]),
            frame(0.6, [200, 100]),
            frame(0.75, [310, 100]),
            frame(0.85, [310, 145]),
            frame(0.95, [310, 145]),
            frame(1, [310, 145], 0),
          ],
        },
      ],
    };
  if (id === 'method') {
    const points: Point[] = [
      [60, 60],
      [200, 60],
      [340, 60],
      [340, 175],
      [200, 175],
      [60, 175],
    ];
    return {
      points,
      guide: 'M60 60h320v115H60',
      flights: [
        {
          frames: [
            frame(0, points[0]!, 0),
            frame(0.06, points[0]!),
            frame(0.23, points[1]!),
            frame(0.4, points[2]!),
            frame(0.45, [380, 60]),
            frame(0.53, [380, 175]),
            frame(0.57, points[3]!),
            frame(0.74, points[4]!),
            frame(0.91, points[5]!),
            frame(1, points[5]!, 0),
          ],
        },
      ],
    };
  }
  const [start, review, end] = horizontal as [Point, Point, Point];
  return {
    points: horizontal,
    guide: id === 'team' ? 'M60 105h280M240 105v85H100v-85' : 'M60 105h280',
    flights: [
      {
        frames:
          id === 'team'
            ? [
                frame(0, start, 0),
                frame(0.06, start),
                frame(0.25, review),
                frame(0.32, [240, 105]),
                frame(0.4, [240, 190]),
                frame(0.48, [100, 190]),
                frame(0.54, [100, 105]),
                frame(0.6, start),
                frame(0.74, review),
                frame(0.9, end),
                frame(1, end, 0),
              ]
            : [
                frame(0, start, 0),
                frame(0.06, start),
                frame(0.36, review),
                frame(0.6, review),
                frame(0.88, end),
                frame(1, end, 0),
              ],
      },
    ],
  };
}
