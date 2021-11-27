const getThatOneNonRepeatingElement = (A) => {
    let l = 0
    let r = A.length - 1
    let extremeLeft = 0
    let extremeRight = A.length - 1
    while (l <= r) {
        let mid = parseInt((l + r) / 2)
        if (mid != extremeLeft && mid != extremeRight && A[mid] != A[mid + 1] && A[mid] != A[mid - 1]) {
            return A[mid]
        }

        if (mid == extremeLeft && A[mid] != A[mid + 1]) {
            return A[mid]
        }

        if (mid == extremeRight && A[mid] != A[mid - 1]) {
            return A[mid]
        }

        if (A[mid] == A[mid + 1]) {
            let len = A.length - mid
            if ((len % 2)) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        } else {
            let len = mid - 0 + 1
            if (!(len % 2)) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

    }
}


let A = [8, 8, 9, 9, 3, 3, 2, 2, 4]
console.log(`The element is: ${getThatOneNonRepeatingElement(A)}`)
