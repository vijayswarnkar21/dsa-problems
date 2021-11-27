/**
Problem: Given an integer A representing the number of square blocks. The height of each square block is 1. The task is to create a staircase of max height using these blocks.

The first stair would require only one block, the second stair would require two blocks and so on.

Find and return the maximum height of the staircase.
*/


const calculation = (n) => {
    return (n * n) + n
}
const solve = (A) => {
    A = 2 * A
    if (A == 0) {
        return 0
    }

    let l = 1
    let r = A/2
    let result
    while (l <= r) {
        let mid = parseInt((l + r) / 2)
        let num = calculation(mid)
        if (num <= A && calculation(mid + 1) > A) {
            result = mid
            break
        } else if (num > A) {
            r = mid - 1
        } else {
            result = mid
            l = mid + 1
        }
    }

    return result
}

module.exports = {
    //param A : integer
    //return an integer
    solve: solve
};
