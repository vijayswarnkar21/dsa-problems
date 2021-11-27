const solve = (A) => {
    if (A == 0) {
        return 0
    }

    let l = 1
    let r = A
    let result
    while (l <= r) {
        let mid = parseInt((l + r) / 2)
        //console.log(`l: ${l},r: ${r}, mid: ${mid}`)
        if ((mid * mid) <= A && ((mid + 1) * (mid + 1)) > A) {
            result = mid
            break
        } else if ((mid * mid) > A) {
            r = mid - 1
        } else {
            result = mid
            l = mid + 1
        }
    }

    return result
}

let A = 2147483647
console.log(solve(A))
