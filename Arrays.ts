let heros: Array<string | number> = [];

heros.push("Thor");
heros.push("Iron Man");
heros.push("Captain America");
heros.push(1);
heros.push(2);
heros.push(3);

console.log(...heros);

// 2D arrays
let matrix: Array<Array<number>> = [];
for(let i = 1; i <= 5; i++) {
    let row: Array<number> = [];
    for(let j = i; j <= i+5; j++) {
        row.push(j);
    }
    matrix.push(row);
}

matrix.forEach((row: Array<number>) => {
    console.log(...row);
});

export {};