exports.computePosition = instructions => {
    let currentFloor = 0

    for (let index = 0; index < instructions.length; index++) {
        if (instructions[index] === '(') currentFloor++
        else if (instructions[index] === ')') currentFloor--
        if (currentFloor === -1) {
            const position = index + 1
            return position
        }
    }
}