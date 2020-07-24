// const numbers = document.querySelectorAll(".number")

// numbers.forEach( (number) =>{
//     number.addEventListener("click", (event)=>{
//         inputNumber(event.target.value)
//         // updateScreen(event.target.vale)
//         updateScreen(currentNumber)
//         // console.log("button is pressed")
//     })
// })

const numbers = document.querySelectorAll(".number")

numbers.forEach( (number) =>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
        // console.log("aaa")
    })
})


const CalculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) =>{
    // CalculatorScreen.value = parseFloat (number)
    CalculatorScreen.value = number
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) =>{
    if(currentNumber === '0'){
        currentNumber = number
    }
    else{
        currentNumber += number
    }
}

const operators  = document.querySelectorAll(".operator")
let count = 0;

operators.forEach((operator) =>{
    operator.addEventListener("click", (event) =>{
    inputOperator(event.target.value)
    })
})

const inputOperator = (operator) =>{
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber ='0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=>{
    if(count === 0){ 
        calculate()
        updateScreen(currentNumber)
        count++;
    // console.log('equal button is pressed')
    }
    else{
        prevNumber = currentNumber
    }
})

const calculate = () =>{
    let = result=''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break;
        case "%":
            result = parseFloat(prevNumber) / 100
            break;
        default:
            break;
    }
    currentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () =>{
    claerAll()
    updateScreen(currentNumber)
    // console.log('AC button is pressed')

})

const claerAll = () =>{
    prevNumber=''
    calculationOperator=''
    currentNumber='0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', () =>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
