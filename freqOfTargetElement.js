const firstOccurance = (A, B) => {
    let l = 0
    let r = A.length - 1
    let first = -1
    while (r >= l) {
        let mid = parseInt((l + r) / 2)
        //console.log(`l: ${l},r: ${r}, mid: ${mid}`)
        if (A[mid] == B && (mid == 0 || A[mid - 1] != B)) {
            first = mid
            break
        } else if (A[mid] == B && A[mid - 1] == B) {
            r = mid - 1
        } else if (A[mid] > B) {
            r = mid - 1
        } else if (A[mid] < B) {
            l = mid + 1
        }
    }
    return first
}

const lastOccurance = (A, B) => {
    let l = 0
    let r = A.length - 1
    let last = -1
    while (r >= l) {
        let mid = parseInt((l + r) / 2)
        if (A[mid] == B && (mid == A.length + 1 || A[mid + 1] != B)) {
            last = mid
            break
        } else if (A[mid] == B && A[mid + 1] == B) {
            l = mid + 1
        } else if (A[mid] > B) {
            r = mid - 1
        } else if (A[mid] < B) {
            l = mid + 1
        }
    }
    return last
}

const countFrequency = (A, B) => {
    const first = firstOccurance(A, B)
    //console.log(`first:  ${first}`)
    const last = lastOccurance(A, B)
    //console.log(`last:  ${last}`)
    return (last - first) + 1
}

let A = [1, 1, 2, 2, 8, 8, 8, 8, 8, 9]
let B = 1
let frequency = countFrequency(A, B)
console.log(`frequency of ${B} in [${A}] is :  ${frequency}`)