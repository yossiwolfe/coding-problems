
/**
  Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
  https://leetcode.com/problems/max-points-on-a-line/
**/

/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length < 2) return points.length;
    const slopeMap = {}; 
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let y, x, m, bi, bj;
            y = points[j].y - points[i].y;
            x = points[j].x - points[i].x;
            
            // if it is on the x axis
            if (x === 0) {
                slopeMap[points[i].x] = slopeMap[points[i].x] || {};
                slopeMap[points[i].x][i] = null;
                slopeMap[points[i].x][j] = null;
            }
            // if it is on the y axis
            else if (y === 0) {
                slopeMap[points[i].y] = slopeMap[points[i].y] || {};
                slopeMap[points[i].y][i] = null;
                slopeMap[points[i].y][j] = null;
            }
            // if it is on a sloped line
            else {
                m = (y)/(x);
                if (Number.isFinite(m)) {
                    
                    m = getNearest(m);
                    bi = getNearest(points[i].y - (m*points[i].x)).toPrecision(5);
                    bj = getNearest(points[j].y - (m*points[j].x)).toPrecision(5);
                    m = m.toPrecision(5);
                    
                    slopeMap[bi + '-' + m] = slopeMap[bi + '-' + m] || {};
                    slopeMap[bj + '-' + m] = slopeMap[bj + '-' + m] || {};
                    slopeMap[bi + '-' + m][i] = null;
                    slopeMap[bj + '-' + m][j] = null;                

                }
            }
        }
    }
    return Math.max(...Object.values(slopeMap).map(s => Object.keys(s).length));
};

function getNearest (n) {
    const sign = n < 0 ? -1 : 1;
    if (sign < 0) n = Math.abs(n);
    const remainder = n%1;
    if (remainder === 0) return parseInt(n * sign);
    if (remainder > 0.998) n = (n - remainder) + 1;
    if (remainder < 0.002) n = n - remainder;
    return n * sign;
}; 
