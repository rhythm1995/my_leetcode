/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (44.13%)
 * Total Accepted:    50.3K
 * Total Submissions: 113.8K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // 滑动窗口，i窗口长度，j起始点
  let retArr = [];
  let max = nums[0];
  for (let i = 1; i <= nums.length; i += 1) {
    for (let j = 0; j <= nums.length; j += 1) {
      retArr = nums.slice(j, i + j);
      let add = 0;
      if (i>1 && i<nums.length) {
        add = retArr.reduce((pre, pro) => { return pre + pro; })
      } else if(i == 1) {
        add = retArr[0];
      } else {
        add = nums.reduce((pre, pro) => {return pre + pro; })
      }
      if (add > max) {
        max = add;
      }
    }
  }
  return max;
};

