'use strict'

import listIPv4 from './ipv4.js'

function unique(arr) {
    return new Set(arr).size;
}

console.log(unique(listIPv4));