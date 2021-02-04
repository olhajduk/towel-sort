// You should implement your task here.

module.exports = function towelSort(matrix) {

    const empty = !Array.isArray(matrix) || (matrix.length === 0)

    if (empty) {

        return []

    } else {

        matrix.forEach((value, i) => {
            if (i % 2 !== 0) {
                matrix[i].reverse(value)
            }
        });

        const matrixSorted = matrix.reduce((accuracy, value) => accuracy.concat(value), [])

        return matrixSorted
    }
}
