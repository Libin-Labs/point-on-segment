import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('detects point on segment', () => {
  assert.equal(api.isPointOnSegment({ x: 1, y: 1 }, { x: 0, y: 0 }, { x: 2, y: 2 }), true);
});
test('includes endpoints', () => {
  assert.equal(api.isPointOnSegment({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 0 }), true);
});
test('rejects point beyond endpoint', () => {
  assert.equal(api.isPointOnSegment({ x: 3, y: 0 }, { x: 0, y: 0 }, { x: 2, y: 0 }), false);
});
test('uses tolerance', () => {
  assert.equal(
    api.isPointOnSegment({ x: 1, y: 1.001 }, { x: 0, y: 0 }, { x: 2, y: 2 }, 0.002),
    true,
  );
});
test('handles degenerate segment', () => {
  assert.equal(api.isPointOnSegment({ x: 1, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 1 }), true);
});
test('rejects negative tolerance', () => {
  assert.throws(
    () => api.isPointOnSegment({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 1 }, -1),
    RangeError,
  );
});
