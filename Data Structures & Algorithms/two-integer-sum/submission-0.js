class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */


    twoSum(nums, target) {


        const arr = new Map();

        for( let i = 0; i < nums.length; i++ ) {

            const num = nums[i];

            const rem = target - num;

            if(arr.has(rem)) {
                return [ arr.get(rem), i ];
            }

            arr.set( num, i );

        }

        return [];

    }
}
