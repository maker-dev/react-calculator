import { useState } from "react"
import CalculatorButton from "./CalcButton"

const operators = ["/", "+", "-", "*"];

function Calculator() {

  const [formula, setFormula] = useState<string>("");
  const [input, setInput]   = useState<string>("");

  const clearCalc = (): void => {
    setFormula("");
    setInput("");
  }

  const addNumber = (number: string): void => {
    if (input.length === 0 && number === "0") return;
    if (formula.includes("=")) {
      setInput(number)
      setFormula(number);
      return;
    }
    if (operators.includes(input)) {
      setInput(number);
    } else {
      setInput(input + number);
    }
    setFormula(formula + number);
  }

  const addOperator = (operator: string): void => {
    if (operators.includes(input)) {
      setInput(operator);
      const newFormula: string = formula.slice(0, formula.length - 1);
      setFormula(newFormula + operator);
    } else if (formula.includes("=")) {
      setFormula(input + operator);
      setInput(operator);
    } else {
      setInput(operator);
      setFormula(formula + operator);
    }
    
  }

  const addDecimal = () => {
    if (input.includes(".")) return;
    if (input.length === 0) {
      setInput("0.");
      setFormula(formula + "0.");
      return;
    }
    setInput(input + ".");
    setFormula(formula + ".");
  }

  const calculate = () => {
    if (operators.includes(input)) {
      const newFormula: string = formula.slice(0, formula.length - 1);
      const result: string = eval(newFormula);
      setFormula(`${newFormula}=${result}`);
      setInput(result);
      return;
    }
    const result: string = eval(formula);
    setFormula(`${formula}=${result}`)
    setInput(result);
  }

  return (
    <div className="bg-black p-2">
      <div className="text-yellow-500 min-h-8 text-right break-words text-md lg:text-lg" style={{fontFamily: '"Orbitron", sans-serif'}}>{formula}</div>
      <div className="text-white text-right text-2xl lg:text-3xl" style={{fontFamily: '"Orbitron", sans-serif'}} id="display">{!input ? 0 : input}</div>
      <div className="text-white grid grid-cols-4">
        <CalculatorButton label="AC" colSpan={2} color="bg-red-800" id="clear" onClick={clearCalc}/>
        <CalculatorButton label="/" color="bg-gray-500" id="divide" onClick={() => addOperator("/")}/>
        <CalculatorButton label="x" color="bg-gray-500" id="multiply" onClick={() => addOperator("*")}/>
        <CalculatorButton label="7" color="bg-gray-700" id="seven" onClick={() => addNumber("7")}/>
        <CalculatorButton label="8" color="bg-gray-700" id="eight" onClick={() => addNumber("8")}/>
        <CalculatorButton label="9" color="bg-gray-700" id="nine" onClick={() => addNumber("9")}/>
        <CalculatorButton label="-" color="bg-gray-500" id="subtract" onClick={() => addOperator("-")}/>
        <CalculatorButton label="4" color="bg-gray-700" id="four" onClick={() => addNumber("4")}/>
        <CalculatorButton label="5" color="bg-gray-700" id="five" onClick={() => addNumber("5")}/>
        <CalculatorButton label="6" color="bg-gray-700" id="six" onClick={() => addNumber("6")}/>
        <CalculatorButton label="+" color="bg-gray-500" id="add" onClick={() => addOperator("+")}/>
        <CalculatorButton label="1" color="bg-gray-700" id="one" onClick={() => addNumber("1")}/>
        <CalculatorButton label="2" color="bg-gray-700" id="two" onClick={() => addNumber("2")}/>
        <CalculatorButton label="3" color="bg-gray-700" id="three" onClick={() => addNumber("3")}/>
        <CalculatorButton label="=" rowSpan={2} color="bg-blue-800" id="equals" onClick={calculate}/>
        <CalculatorButton label="0" colSpan={2} color="bg-gray-700" id="zero" onClick={() => addNumber("0")}/>
        <CalculatorButton label="." color="bg-gray-700" id="decimal" onClick={addDecimal}/>
      </div>
    </div>
  )
}



export default Calculator