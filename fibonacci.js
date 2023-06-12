function fibs (number) {
    let fibonacciSequenceStart = [0, 1]

    for(let i = 0; i < number - 2; i++) {
        fibonacciSequenceStart.push(fibonacciSequenceStart[i] + fibonacciSequenceStart[i+1])
    }

    console.log("result", fibonacciSequenceStart)
}

fibs(3)

function fibsRec (number, array = [0, 1]) {
    if(number < 1) return array
    array.push(array[array.length - 1] + array[array.length - 2]) 
    return fibsRec(number - 1, array)

}

//

const fibsRec2 = (number, array = [0,1]) => number < 1 ? array 
: (array.push(array[array.length - 1] + array[array.length - 2]), fibsRec(number - 1, array));

console.log(fibsRec2(5))