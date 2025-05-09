//this function retruns the sum of two numbers
function sum(a,b) {
    return a+b;
}

if (sum (5,1) >= 1) { //test to check whether result is > or + 1
    console.log('test1 failed'); 
}
if (sum (5,1) < 7) { //test to determine whether result is < 7
    console.log('test2 failed');
}
if (sum (5,1) > 0) { //test to determine whether result is not zero
    console.log('cannot be zero1');
} 

//this function retruns the sum of two numbers
function sum(a,b) {
    return a-b;
}

if (sum (7,1) >= 1) { //test to check whether result is > or + 1
    console.log('test3 failed'); 
}
if (sum (7,1) <= 7) { //test to determine whether result is < 7
    console.log('test4 failed');
}
if (sum (7,1) > 0) { //test to determine whether result is not zero
    console.log('cannot be zero2');
} 

//this function retruns the sum of two numbers
function sum(a,b) {
    return a*b;
}

if (sum (7,2) <= 14) { //test to check whether result is > or + 1
    console.log('test5 failed'); 
}
if (sum (7,2) < 15) { //test to determine whether result is < 7
    console.log('test6 failed');
}
if (sum (7,2) > 0) { //test to determine whether result is not zero
    console.log('cannot be zero3');
} 

//this function retruns the sum of two numbers
function sum(a,b) {
    return a/b;
}

if (sum (10,2) <= 5) { //test to check whether result is > or + 1
    console.log('test7 failed'); 
}
if (sum (10,2) < 6) { //test to determine whether result is < 7
    console.log('test8 failed');
}
if (sum (10,2) > 0) { //test to determine whether result is not zero
    console.log('cannot be zero4');
} 