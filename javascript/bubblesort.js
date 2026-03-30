function bubblesort() {
  let interChange;
  do {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        interChange = true;
      }
    }
  } while (interChange);

  return arr;
}
let arr = [-3, 30, 1, 10, -2];
let sortedArray = bubblesort(arr);
console.log(`sorted array is ${sortedArray}`);
