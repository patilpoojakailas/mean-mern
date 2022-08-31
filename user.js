
function showPrompt() {
    let name = prompt('plz enter your name')
    console.log('hello' + name)

}

function evenodd() {

    let no = prompt('enter your number')
    if (no % 2 == 0)
        console.log(no + 'is even number')
    else
        console.log(no + 'is odd number')
}

function primecheck() {

    let no = prompt('enter your number to check prime or not')

    flag = 1
    for (i = 2; i < no; i++) {
        while (no % i == 0) {
            flag = 0
            break;
        }
    }
    if (flag == 1) {
        console.log(no + 'is prime number')
    }
    else {
        console.log(no + 'is not a prime number')
    }

}

function table() {
    let tno = parseInt(prompt('enter your number to print table'))
    add = 0
    count = 0
    while (count != 10) {
        add = add + tno
        console.log(add + ' ')
        count++
    }
}