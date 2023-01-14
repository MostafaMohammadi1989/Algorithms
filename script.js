// // ***** Fibonacci ***** //

// function fib(n) {
//     const numbers = [1, 1]; //1
//     //  let counts = 0;

//     for ( let i = 2; i < n + 1; i ++) { //1
//         console.log("Runing") // n - 1
//         // counts++;
//         numbers.push( numbers[i - 2] + numbers[i - 1]); // n -1 
//     }
//         // console.log(counts)
//         return numbers[n]  // 1
// }

// // T = 1 + 1 + 1 + 2 * (n -1) = 3 + 2n -2 = 1 + 2n = 2n = n 
// // =>  O(n) => Linner Time Complexity

// // console.log(fib(4))
// // console.log(fib(5))
// // console.log(fib(6))



// // ***** Prime ***** //

//  // x = 2   y = 3    2**3 2*2*2 
//  function power(x, y) {

//  }
//-------------------------------------------------------------------

//ZTM

const nemo  = ['nemo'];

function findNemo (arr){
    for ( let i = 0; i <= arr.length; i++) {
        if(arr[i] === 'nemo') {
            console.log('We Find a nemo')
        }
    }
}

findNemo(nemo)