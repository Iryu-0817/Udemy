const array = [10, 20, 30, 40];
const newArray = [];

for (let i = 0; i < array.length; i++) {
    const val = array[i] * 2;
    if (val > 50) {
        newArray.push(array[i] * 2);
    }
}

console.log(newArray); // [60, 80]



const newArray2 = array.map(val => val* 2).filter((val) => val > 50);

console.log(newArray2); 