/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // 法一：利用hashmap存储，并检索
    // const valMap = {};
    // const res = new Array(2);
    // for (let i = 0; i < nums.length; i++) {
    //     if (Object.keys(valMap).indexOf((target - nums[i]) + "") != -1) {
    //         res[0] = i;
    //         res[1] = valMap[target - nums[i]];
    //         break;
    //     }
    //     valMap[nums[i]] = i;
    // }
    // return res;

    // 法二：hashmap存储，但是利用的是js的数组自己的特性方法
    let len = nums.length;
    while (len > 0) {
        const last = nums.pop();
        if (nums.indexOf(target - last) > -1) {
            return [nums.indexOf(target - last), nums.length];
        }
        len--;
    }

};

// @lc code=end

