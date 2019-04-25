/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a,b) => {return b-a;});
  s.sort((a,b) => {return b-a;});
  
  let ret = 0;
  while (s.length !== 0 && g.length !== 0) {
    if (s[0] >= g[0]) {
      ret ++
      s.shift()
    }
    g.shift();
  }

  return ret;
};

