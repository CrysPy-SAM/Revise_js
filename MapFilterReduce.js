const arr = [5,1,3,7];

function double(x) {
    return x * 2;
}

function triple(x) {
    return x *3;
}
function binary(x) {
    return x.toString(2);
}

const output = arr.map(binary);
console.log(output);