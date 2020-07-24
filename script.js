const CalculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) =>{
    CalculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach( (number) =>{
    number.addEventListener("click", (event)=>{
        updateScreen(event.target.value)
        // console.log("aaa")
    })
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) =>{
    if(currentNumber === '0'){
        currentNumber= number
    }
    else{
        currentNumber += number
    }
}

const operators  = document.querySelectorAll(".operator")

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
    calculate()
    updateScreen(currentNumber)
    // console.log('equal button is pressed')
})

const calculate = () =>{
    let = result=''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            break
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
