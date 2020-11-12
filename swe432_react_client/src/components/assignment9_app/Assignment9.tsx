import * as React from 'react'
import './Assignment9.css'
import { useState } from 'react';
import { StringDisplay } from './StringDisplay';
import { StringItem } from './StringItem';
import { StringCreate } from './StringCreate';

export function Assignment9() {
  const [storedStrings, setStoredStrings] = useState([<StringItem str="" />]);
  const [writtenStrings, setWrittenStrings] = useState([""]);
  const [currStr, setCurrStr] = useState("");
  const [withReplacement, setWithReplacement] = useState(false);
  const [withoutReplacement, setWithoutReplacement] = useState(true);

  function onSubmit() {

    // Get array of written strings
    let tempArr = [...writtenStrings].filter(str => str != "");

    let max = tempArr.length;

    // No written strings
    if (max == 0) {
      alert("Please enter strings in the left box.");
      return;
    }

    // Choose random string from written strings
    let index = Math.floor(Math.random() * Math.floor(max));
    let randStr = tempArr[index];

    setCurrStr(randStr); //setting recent string
    setStoredStrings([...storedStrings, <StringItem str={randStr} />]); //storing in array

    if (withoutReplacement) {
      let newArr = tempArr;
      newArr.splice(index, 1); //remove CurrStr
      setWrittenStrings(newArr);
    }

  }

  function onReset() {
    setWrittenStrings([]);
    setCurrStr("");
    setStoredStrings([]);
  }

  function clearChoseStrings() {
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
      <div className="menu-container">
        <div className="menu-subcontainer">
          <StringCreate updateStrings={(list: string[]): void => { setWrittenStrings(list) }} writtenStrings={writtenStrings} />
          <div style={{ width: "200px", height: "200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", }}>
            <label> <input type="radio" checked={withReplacement} onClick={() => { setWithReplacement(true); setWithoutReplacement(false); }} /> With Replacement </label>
            <label> <input type="radio" checked={withoutReplacement} onClick={() => { setWithReplacement(false); setWithoutReplacement(true); }} /> Without Replacement </label>
            <button className="menu-button" onClick={onSubmit}> Submit </button>
            <button className="menu-button" onClick={onReset}> Reset </button>
            <button className="menu-button" onClick={clearChoseStrings} style={{ width: "150px" }}> Clear Chosen Strings </button>
          </div>
          <StringDisplay currentStrings={storedStrings} randomString={currStr} />
        </div>
      </div>
      <div className="subsection">
        <h1>
          Collaboration Summary
        </h1>
        <h3>
          Our group made a collaberative effort to complete Assignment 9. 
          Deval created the repository and the template codebase with react router dom and deployed to heroku. 
          Surya worked on the navigation bar and control flow to adhere to usability standards. 
          Alex created the functional components that handles the string inputs and string outputs. 
          Alex also created the layout to adhear to usability standards. 
          We all helped one another to design and implement each of our parts. 
        </h3>
      </div>
    </div>
  );
}