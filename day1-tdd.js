exports.computeRightFloor = instructions => {
    let currentFloor = 0

    for (const instruction of instructions) {
        if (instruction === '(') currentFloor++
        else if (instruction === ')') currentFloor--
    }

    return currentFloor
}