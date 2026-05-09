class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        const arr = new Set<number>();

        for (let i = 0; i < nums.length; i++) {
            if (arr.has(nums[i])) {
                return true;
            } else {
                arr.add(nums[i])
            }
        }

        return false;

    }
}
