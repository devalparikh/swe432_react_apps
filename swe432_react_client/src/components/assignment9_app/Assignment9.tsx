import * as React from 'react'
import {useState} from 'react';
import { StringDisplay } from './StringDisplay';
import { StringItem } from './StringItem';
import {StringCreate } from './StringCreate';

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };



export function Assignment9() {
  const [storedStrings, setStoredStrings] = useState([<StringItem str=""/>]);
  const [writtenStrings, setWrittenStrings] = useState([""]);
  const [currStr, setCurrStr] = useState("");
  const [withReplacement, setWithReplacement] = useState(false);
  const [withoutReplacement, setWithoutReplacement] = useState(true);

  function onSubmit(){

    let tempArr = [...writtenStrings].filter(str => str != "");

    let max = tempArr.length;

    if(max == 0){
      alert("Please enter strings in the left box.");
      return;
    }
   

    let index = Math.floor(Math.random() * Math.floor(max));
    let randStr = tempArr[index];

    setCurrStr(randStr); //setting recent string
    setStoredStrings([...storedStrings, <StringItem str={randStr}/>]); //storing in array

    if(withoutReplacement){
      let newArr = tempArr;
      newArr.splice(index, 1);
      setWrittenStrings(newArr);
    }else{
      setWrittenStrings(tempArr);
    }

  }

  function onReset(){
    setWrittenStrings([]);
    setCurrStr("");
    setStoredStrings([]);
  }

  function clearChoseStrings(){
    setCurrStr("");
    setStoredStrings([]);
  }

  return (
    <div className="main-section">
      <div className="subsection">
        <h1>
          SWE432-001 Assignment 9
          </h1>
        <h3>
          Created By:
            <a href="https://mason.gmu.edu/~afuentel/">
            Alexandro Fuentelzas
            </a>
              ,&nbsp;
            <a href="https://mason.gmu.edu/~dparikh4/">
            Deval Parikh
            </a>
              ,&nbsp;
            <a href="https://mason.gmu.edu/~spolina/">
            Surya Polina
            </a>
        </h3>
      </div>
      <div style={{width:"100vw", height:"550px", display:"flex", justifyContent:"center"}}>
        <div style={{width:"1000px", height:"550px", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-evenly", }}>
          <StringCreate updateStrings={(list:string[]):void => {setWrittenStrings(list)}} writtenStrings={writtenStrings}/>
          <div style={{width:"200px", height:"200px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-evenly", }}>
            <label> <input style={{color:"white"}} type="radio" checked={withReplacement} onClick={() => {setWithReplacement(true); setWithoutReplacement(false);}}/> With Replacement </label>
            <label> <input style={{color:"white"}} type="radio" checked={withoutReplacement} onClick={() => {setWithReplacement(false); setWithoutReplacement(true);}}/> Without Replacement </label>
            <button onClick={onSubmit} style={{color:"white",width:"100px", height:"25px", backgroundColor:"gray", border:"none", borderRadius:"25px"}}> Submit </button>
            <button onClick={onReset} style={{color:"white",width:"100px", height:"25px", backgroundColor:"gray", border:"none", borderRadius:"25px"}}> Reset </button>
            <button onClick={clearChoseStrings} style={{color:"white",width:"150px", height:"25px", backgroundColor:"gray", border:"none", borderRadius:"25px"}}> Clear Chosen Strings </button>
          </div>
          <StringDisplay currentStrings={storedStrings} randomString={currStr} />
        </div>
      </div>
    </div>
  );
}