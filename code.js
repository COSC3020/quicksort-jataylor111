function quicksort(array) {
    // Check that the array isn't empty or one
    if (array.length == 0 || array.length == 1) {
        return array;
    }
    // Initialize variables to represent the left and right part of the array
    let left = 0;
    let right = array.length;
    // Create an array that holds the left and right part of the array
    // A stack is what I wanted to use but javascript doesn't have a dedicated stack data structure so I'm using an array
    let holder = [left, right];
    // console.log("Preloop Holder: " + holder);

    // Base the loop on whether the holder array has any values or not
    while (holder.length > 0) {  // Since the holder holds the smallest and largest indeces of the array in worst case this 
                                // would run until the entire array has be checked, complexity of "n"

        // Put the top and bottom of the holder in their own variables for comparing, can still treat it like a stack though
        let top = holder.pop();
        let bot = holder.pop();
        let lesser = bot + 1;
        let tmp = 0;

        // Needed this if statement because otherwise it was adding an "undefined" at the end of the sorted array
        if (top != bot) {

            for (let i = lesser; i <= top; i++) { // In it's worst case top would be the end of the array and the for loop 
                                                 // would run through the whole array, complexity "n"
                if (array[i] < array[bot]) {
                    tmp = array[lesser];
                    array[lesser] = array[i];
                    array[i] = tmp;
                    // Increment lesser
                    if (lesser != top) {
                        lesser++;
                    }

                }
            }

            tmp = array[lesser - 1];
            array[lesser - 1] = array[bot];
            array[bot] = tmp;

            // Had to make this if statement to stop it from iterating infnitely.
            if(bot != top) {
                holder.push(bot);
                holder.push(lesser - 1);
                holder.push(lesser);
                holder.push(top);
            }
            // console.log(holder);
        }
    }

    return array;
}

// let arr = [1,0];
// let arr = [0,4,7,4,2,8,9,7,6,4,3,4,1,2];
// console.log(quicksort(arr));
