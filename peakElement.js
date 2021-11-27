const solve = (A) => {
    if (A.length == 1) {
        return A[0]
    }
    let l = 0;
    let r = A.length - 1;
    while (r >= l) {
        let mid = parseInt((l + r) / 2)
        console.log(`l: ${l},r: ${r}, mid: ${mid}, = ${A[mid]}`)
        if (mid == A.length - 1 && A[mid] >= A[mid - 1]) {
            return A[mid];
        }
        if (mid == 0 && A[mid] >= A[mid + 1]) {
            return A[mid];
        }
        if (A[mid] >= A[mid + 1] && A[mid] >= A[mid - 1]) {
            return A[mid];
        }
        if (A[mid] < A[mid + 1]) {
            l = mid + 1;
        } else if (A[mid - 1] > A[mid]) {
            r = mid - 1;
        }
    }
    return mid
}

let A = [1, 3, 3];
console.log(`Result is: ${solve(A)}`)
