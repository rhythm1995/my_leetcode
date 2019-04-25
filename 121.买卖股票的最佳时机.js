/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var len = prices.length;
  var max = 0;
  for (var i=1; i<len; i++) {
    for (var j=0; j<i; j++) {
      if (prices[i] - prices[j] > max) {
        max = prices[i] - prices[j]
      }
    }
  }
  return max;
};

