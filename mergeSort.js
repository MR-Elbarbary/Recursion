let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }
    let half = Math.floor(arr.length / 2);
    let left = arr.slice(0, half);
    let right = arr.slice(half, arr.length);
    left = mergeSort(left);
    right = mergeSort(right);
    let mergedArr = merge(left, right);
    return mergedArr
}

function merge(left, right) {
    let mergedArr = [];
    let l = 0;
    let r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            mergedArr.push(left[l]);
            l++;
        } else {
            mergedArr.push(right[r]);
            r++;
        }
    }
    while (l < left.length) {
        mergedArr.push(left[l]);
        l++;
    }
    while (r < right.length) {
        mergedArr.push(right[r]);
        r++;
    }
    return mergedArr
}

console.log(mergeSort(arr2));