let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }
    let half = Math.floor(arr.length / 2);
    let left = arr.slice(0, half);
    let right = arr.slice(half, arr.length);
    mergeSort(left);
    mergeSort(right);
    return merge(left, right)

}

function merge(left, right) {
    let mergedArr = [];
    l = r = 0;
    do {
        if (left[l] < right[r]) {
            mergedArr.push(left[l]);
            l++;
        } else{
            mergedArr.push(right[r]);
            r++;
        }    
    } while ((r < right.length) || (l < left.length));
    return mergedArr
}

console.log(mergeSort(arr2));