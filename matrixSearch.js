/**
 * To find last occurance of smaller number than given number in
 * the array
 */
const findLastOccurence = (A, B) => {
    let l = 0
    let r = A.length - 1
    let result = -1
    while (l <= r) {
        let mid = parseInt((l + r) / 2)
        if (A[mid][0] <= B) {
            result = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return result
}

const findExactPosition = (A, B, possibleRow) => {
    let l = 0
    let r = A[possibleRow].length - 1
    let result = -1
    while (l <= r) {
        let mid = parseInt((l + r) / 2)
        if (A[possibleRow][mid] == B) {
            result = mid
            break
        } else if (A[possibleRow][mid] < B) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return result
}

const solve = (A, B) => {
    let possibleRow = findLastOccurence(A, B)
    let position = -1
    if (possibleRow != -1) {
        position = findExactPosition(A, B, possibleRow)
    }
    if (position == -1) {
        return 0
    } else {
        return 1
    }
}
let A = [[3],[29],[36],[63],[67],[72],[74],[78],[85]]
let B = 41
console.log("Result------------------------------>", solve(A, B))
