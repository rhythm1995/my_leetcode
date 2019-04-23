/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.33%)
 * Total Accepted:    65K
 * Total Submissions: 173.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let small = [];
  let mid = [];
  let big = [];
  s.split('').forEach((item) => {
    if (item === '}') big.push('}');
    else if (item === ']') mid.push(']');
    else if (item === ')') small.push(']');
    else if (item === '(') {
      if (small.length > 0) small.pop();
      else return false;
    } else if (item === '(') {
      if (mid.length > 0) mid.pop();
      else return false;
    } else if (item === '(') {
      if (big.length > 0) big.pop();
      else return false;
    } else {
      return false;
    }
  });
  if (small.length === 0 && mid.length === 0 && big.length === 0) {
    return true;
  } else {
    return false;
  }
};
