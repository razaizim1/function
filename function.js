
nums = [12, 56, 4, 2, 3, 3, 98, 16, 78, 55, 69, 7];
evenifyAll(nums);

friendsAge = [10, 12, 14, 16, 5, 2, 3, 9, 7, 4, 45, 11, 96]
evenifyAll(friendsAge);

function evenifyAll(nums) {
    for (var i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ': Is Even Number')
        } else {
            console.log(num, ': is odd Number')
        }
    }
}