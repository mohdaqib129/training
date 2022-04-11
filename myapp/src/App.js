import React, {useState } from 'react'
import './App.css';

function App() {
  // states start
  const [number1,setNumber1] = useState("");
  const [operation,setOperation] = useState("");
  const [number2,setNumber2] = useState("");
  const [toggle,setToggle] = useState(false);
  const [result,setResult] = useState(null);
  //states end

  // Calculation
  const calculate =() =>{
    if(operation==="+"){
      setResult(number1+number2)
    }else if (operation==="-"){
      setResult(number1-number2)
    }else if (operation==="*"){
      setResult(number1*number2)
    }else {
      setResult(number1/number2);
    }
  }

  //Set operation State
  const operations = (i) => {
    if(number1===""){
      alert("please select digit");
      return ;
    }
    setToggle(true);
    if(i==="+"){
      setOperation("+");
    }else if(i==="-"){
      setOperation("-");
    }else if(i==="*"){
      setOperation("*");
    }else if(i==="/"){
      setOperation("/");
    }
  }

  // All Clear  Function
  const allClear = () => {
    setNumber1("");
    setResult("");
    setNumber2("");
    setOperation("");
    setToggle(false)
  }

  // Set number State
  const numbers = (i) =>{
    if(toggle){
      setNumber2(parseInt(number2 + i));
    }else{
      setNumber1(parseInt(number1 + i));
    }
  } 

  return (
    <div className="App">
      <h1 className='header'>CALCULATOR</h1>
      <div className='board-row'>
      <button className='btn' onClick={()=>{numbers("1")}}>1</button>
      <button className='btn' onClick={()=>{numbers("2")}}>2</button>
      <button className='btn' onClick={()=>{numbers("3")}}>3</button>
      <button className='btn' onClick={()=>{operations("+")}}>+</button>
      </div>
      <div className='board-row'>
      <button className='btn' onClick={()=>{numbers("4")}}>4</button>
      <button className='btn' onClick={()=>{numbers("5")}}>5</button>
      <button className='btn' onClick={()=>{numbers("6")}}>6</button>
      <button className='btn' onClick={()=>{operations("-")}}>-</button>
      </div>
      <div>
      <button className='btn' onClick={()=>{numbers("7")}}>7</button>
      <button className='btn' onClick={()=>{numbers("8")}}>8</button>
      <button className='btn' onClick={()=>{numbers("9")}}>9</button>
      <button className='btn' onClick={()=>{operations("*")}}>*</button>
      </div>
      <div>
      <button className='btn' onClick={()=>{allClear()}}>AC</button>
      <button className='btn' onClick={()=>{numbers("0")}}>0</button>
      <button className='btn' onClick={calculate}>=</button>
      <button className='btn' onClick={()=>{operations("/")}}>/</button>
      </div>
      <div className='result'>
      <h2>{number1} {operation} {number2}</h2>
      <h1>{result}</h1>
      </div>
    </div>
  );
}

export default App;
