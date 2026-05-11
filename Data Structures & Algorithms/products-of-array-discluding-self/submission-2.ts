class Solution {
    productExceptSelf(nums: number[]): number[] {

        const res = [];

        let prefix = 1;

        for (const num of nums ) {
            res.push(prefix);
            prefix *= num;
        }

        let suffix = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= suffix;
            suffix *= nums[i];
        }

        return res;
    }
}