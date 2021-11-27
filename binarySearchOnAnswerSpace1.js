/**
 * Q.) Given an array of size N and sum S. Find the maximum K such that every subarray of size K has a sum <= S.
 */

const solve = (A, S) => {
    let l = 0
    let r = A.length
    let mid = 0
    let result
    while (l <= r) {
        mid = parseInt((l + r) / 2)
        let isAnsPossible = isPossibleAnswer(A, S, mid)
        if (!isAnsPossible) {
            r = mid - 1
        } else {
            result = mid
            l = mid + 1
        }
    }
    return result
}

//Sliding window technique
const isPossibleAnswer = (A, S, len) => {
    if(len === 0) {
        return true
    }

    let sum = 0
    let isPossible = true
    for (let i = 0; i < len; i++) {
        sum = sum + A[i]
    }
    if (sum > S) {
        isPossible = false
        return isPossible
    }
    for (let i = 1; i <= A.length - len; i++) {
        sum = sum - A[i - 1]
        sum = sum + A[len + i - 1]
        if (sum > S) {
            isPossible = false
            break
        }
    }

    return isPossible
}
let A = [8, 9, 10, 11]
let S = 10
let result = solve(A, S)
console.log(result)