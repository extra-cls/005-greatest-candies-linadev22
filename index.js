const greatesCandies = (candies, extraCandies) => {
    const maxCandies = Math.max(...candies); // Find the maximum candies any kid currently has
    const result = candies.map(candy => candy + extraCandies >= maxCandies); // Check if each kid can have the greatest number of candies after adding extraCandies
    return result;
}

// Example usage1
// const candies = [2, 3, 5, 1, 3];
// const extraCandies = 3;
// Example 2
const candies = [1, 2, 6, 2, 4];
const extraCandies = 1;
console.log(greatesCandies(candies, extraCandies)); // Output: [true, true, true, false, true]




// DO NOT DELETE/MODIFY THIS
export {greatesCandies};