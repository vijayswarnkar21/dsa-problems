const binarySearchWithLoop = (A, B) => {
    let l = 0
    let r = A.length - 1
    let result = -1
    while (r >= l) {
        let mid = parseInt((l + r) / 2)

        if (A[mid] == B) {
            result = mid
            break
        }
        if (A[mid] > B) {
            r = mid - 1
        } else if (A[mid] < B) {
            l = mid + 1
        }
    }

    return result
}


const binarySearchWithRecursion = (A, B, l = 0, r = A.length - 1) => {
    let mid = parseInt((l + r) / 2)
    if (r < l) {
        return -1
    }
    if (A[mid] == B) {
        return mid
    }

    if (A[mid] > B) {
        r = mid - 1
    } else if (A[mid] < B) {
        l = mid + 1
    }
    return binarySearchWithRecursion(A, B, l, r)

}

let A = [1, 4, 12, 12, 13];
let B = 14
let index = binarySearchWithRecursion(A, B);
let index2 = binarySearchWithLoop(A, B);
console.log("binarySearchWithRecursion : ", index)
console.log("binarySearchWithLoop : ", index2)