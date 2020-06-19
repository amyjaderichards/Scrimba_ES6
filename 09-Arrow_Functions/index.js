function add(...nums) {
    let total = nums.reduce(function (x, y) {
        return x + y;
    });
    console.log(total);
}

function add(...nums) {
    let total = nums.reduce((x, y) => x + y);
}

add(4, 5, 6, 7, 9);