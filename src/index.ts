export interface Point {
  readonly x: number;
  readonly y: number;
}
export function isPointOnSegment(p: Point, a: Point, b: Point, tolerance = 1e-9): boolean {
  if ([p, a, b].some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    throw new TypeError('Expected finite points');
  if (!Number.isFinite(tolerance) || tolerance < 0)
    throw new RangeError('Tolerance must be nonnegative');
  const dx = b.x - a.x,
    dy = b.y - a.y,
    length = Math.hypot(dx, dy);
  if (length === 0) return Math.hypot(p.x - a.x, p.y - a.y) <= tolerance;
  const cross = Math.abs((p.x - a.x) * dy - (p.y - a.y) * dx) / length,
    dot = (p.x - a.x) * dx + (p.y - a.y) * dy;
  return cross <= tolerance && dot >= -tolerance && dot <= length * length + tolerance;
}
