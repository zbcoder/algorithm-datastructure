/**
 * Given a collection of intervals, merge all overlapping intervals.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

/**
 * Given a collection of intervals, merge all overlapping intervals.
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
  if (intervals.length == 0) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  res.push(intervals.reduce((acc, cur) => {
    if (acc[1] >= cur[0]) {
      if (acc[1] < cur[1]) {
        acc[1] = cur[1];
      }
      return acc;
    } else {
      res.push(acc);
      return cur;
    }
  }));
  return res;
};