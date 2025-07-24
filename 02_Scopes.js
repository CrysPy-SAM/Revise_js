let a = 300;

if (true) {
  let a = 30;
  const b = 40;
  console.log("INNER:", a);
}

let array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
  const element = -array[i];
  console.log("Element:", element);
}

console.log(a);
