const findMeetingPoint = (A) => {
    let last = A[A.length - 1];
    let l = 0
    let r = A.length - 1
    let meetingPoint = -1
    while (l <= r) {
        let mid = parseInt((l + r) / 2);
        if (A[mid] < last && (mid == 0 || A[mid - 1] > last)) {
            meetingPoint = mid
            break
        } else if (A[mid] > last) {
            l = mid + 1
        } else if (A[mid] < last) {
            r = mid - 1
        }
    }

    return meetingPoint
}

const findByBinarySearch = (A, B, l, r) => {
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

const findInSortedRotatedArray = (A, B) => {
    let meetingPoint = findMeetingPoint(A)
    //console.log(`meetingPoint : ${meetingPoint}`)
    let index1 = findByBinarySearch(A, B, 0, meetingPoint - 1)
    let index2 = findByBinarySearch(A, B, meetingPoint, A.length - 1)
    if (index1 == -1 && index2 == -1) {
        return -1
    } else if (index1 == -1) {
        return index2
    } else {
        return index1
    }

}

let A = [5, 8, 10, 14, 18, 23, -15, -9, -6, 0, 2]
let B = -15
console.log(`Location is: ${findInSortedRotatedArray(A, B)}`)