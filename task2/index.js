function sumOfTopTwo(arr){
    if(!Array.isArray(arr) || arr.length < 2){
       throw new Error("Input must be an array with at least two elements");
    }

    let strLength = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < strLength - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        strLength--;
    } while (swapped);
    
    return arr[arr.length - 1] + arr[arr.length - 2];

}

//test case
const input = [5, 3, 8, 1, 2];
console.log("Input:", input);
console.log("=======================================");
console.log("Output:", sumOfTopTwo(input));