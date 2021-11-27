const getMaximumPossibleTime = (lengths) => {
    let maxTime = 0;
    for (let i = 0; i < lengths.length; i++) {
        maxTime = maxTime + lengths[i]
    }
    return maxTime
}

const solve = (lengths, painters) => {
    let l = Math.max(...lengths)
    let r = getMaximumPossibleTime(lengths)
    let mid
    let result
    //console.log(`l: ${l},r: ${r}`)

    while (l <= r) {
        mid = parseInt((l + r) / 2)
        //console.log(`l: ${l},r: ${r}`)
        let isAnsPossible = isPossibleAnswer(lengths, painters, mid)
        //console.log(`isAnsPossible for ${mid}: ${isAnsPossible}`)
        if (isAnsPossible) {
            result = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return result
}

const isPossibleAnswer = (lengths, painters, ans) => {

    let count = 1
    let sum = lengths[0]

    for (let i = 1; i < lengths.length; i++) {
        sum = sum + lengths[i]

        if (sum > ans) {
            count++;
            sum = lengths[i]
        }
    }

    //console.log(`count : ${count}`)
    return painters >= count
}

let lengths = [ 1000000, 1000000 ]
let painters = 1
console.log(solve(lengths, painters))