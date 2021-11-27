const getLeastPossibleDistance = (cordinates) => {
    let leastDistance = cordinates[1] - cordinates[0];
    for (let i = 1; i < cordinates.length - 1; i++) {
        leastDistance = Math.min(leastDistance, cordinates[i + 1] - cordinates[i])
    }
    return leastDistance
}

const solve = (cordinates, cows) => {
    let l = getLeastPossibleDistance(cordinates)
    let r = cordinates[cordinates.length - 1] - cordinates[0]
    let mid
    let result
    while (l <= r) {
        mid = parseInt((l + r) / 2)
        let isAnsPossible = isPossibleAnswer(cordinates, cows, mid)
        if (!isAnsPossible) {
            r = mid - 1
        } else {
            result = mid
            l = mid + 1
        }
    }
    return result
}

const isPossibleAnswer = (cordinates, cows, answer) => {
    let count = 1
    let lastCowPosition = cordinates[0]
    for (let i = 1; i < cordinates.length; i++) {
        if (cordinates[i] - lastCowPosition >= answer) {
            count++
            lastCowPosition = cordinates[i]
        }
    }
    return count >= cows
}


let cordinates = [ 5, 17, 100, 11 ]
let cows = 2
let result = solve(cordinates, cows)
console.log(`Maximum possible least distance is: ${result}`)

