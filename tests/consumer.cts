import * as api from '@lp-labs/point-on-segment';
import { isPointOnSegment } from '@lp-labs/point-on-segment';
console.log(isPointOnSegment({ x: 1, y: 1 }, { x: 0, y: 0 }, { x: 2, y: 2 }));
// @ts-expect-error invalid argument must be rejected by declarations
api.isPointOnSegment({ x: '0', y: 0 }, { x: 0, y: 0 }, { x: 1, y: 1 });
