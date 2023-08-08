function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Please insert a valid number";
    }
    const result = Math.pow(number, 3);
    return result;
}

function matchFinder(string1, string2) {
    if ((typeof string1 !== 'string') || (typeof string2 !== 'string')) {
        return "Please insert valid string";
    }
    const result = string1.includes(string2);
    return result;
}

function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return 'Please insert an array';
    } else if ((arr.length !== 2) ) {
        return 'The array must be contain 2 elements.';
    } else if ((typeof arr[0] !== 'number') || (typeof arr[1] !== 'number')) {
        return 'Each array element must be a number';
    }

    for (let item of arr) {
        if (item < 0) {
            return 'Invalid Input';
        }
    }

    const newArray = [];

    if (arr[0] === arr[1]) {
        return 'equal';
    } else if (arr[0] < arr[1]) {
        newArray.push(arr[1]);
        newArray.push(arr[0]);
    } else {
        return arr;
    }

    return newArray;
}

function findAddress(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return 'Please Insert an Object';
    }

    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
    
    const values = street + "," + house + "," + society;
    return values;
}

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray)) {
        return "Please insert an array as first parameter";
    } else if (changeArray.length === 0) {
        return 'The array should not empty';
    } else if (typeof totalDue !== 'number') {
        return 'Please insert a number as second parameter';
    }
    
    let total = 0;
    for (let item of changeArray) {
        total += item;
    }

    if (total >= totalDue) {
        return true
    } else {
        return false;
    }
}