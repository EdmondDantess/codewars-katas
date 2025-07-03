function separateLiquids(glass) {
    if (glass.length === 0) return [];

    const result = [];
    let glassLength = glass.length - 1;
    let elementLength = glass[0].length;

    const chart = {
        O: 0.8,
        A: 0.87,
        W: 1,
        H: 1.36,
    };

    glass.forEach(() => result.push([]));

    let temp = glass
        .flat()
        .map((e) => chart[e])
        .sort();

    temp = temp.map((e) => {
        for (const key in chart) {
            if (chart[key] === e) {
                return key;
            }
        }
    });

    for (let i = 0; i <= glassLength; i++) {
        result[i] = temp.splice(0, elementLength);
    }

    return result;
}

console.log(
    separateLiquids([
        ["A", "A", "O", "H"],
        ["A", "H", "W", "O"],
        ["W", "W", "A", "W"],
        ["H", "H", "O", "O"],
    ])
);

// Don't Drink the Water

// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// {                             {
//   { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
//   { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
//   { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
// }                             }

// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.
