import React, { useEffect } from 'react';
import { useState } from 'react';
import { Switch } from 'react-router-dom';
import './Final.css';


export function Final() {
    const [CurrentString, setCurrentString] = useState(""); // String the user is typing
    const [EnteredStrings, setEnteredStrings] = useState([""]); // All of the added strings
    const [DisplayStrings, setDisplayStrings] = useState([""]); // All strings specifically sorted
    const [DisplayFinalStrings, setDisplayFinalStrings] = useState([""]);  // The final strings to display

    const [Sort, setSort] = useState(2); // Which way to sort
    const [Unique, setUnique] = useState(0); // Unique strings or not
    const [InputError, setInputError] = useState(0); // Input Error state

    // Add string to list of all strings - EnteredStrings
    const addNewString = () => {
        // Check for error - invalid string input
        if(CurrentString.trim() === "") {
            setInputError(1);
        } else {
            setInputError(0);
        }
        setEnteredStrings([...EnteredStrings, CurrentString]); // Append current string
        setCurrentString(""); // Reset string input
    }

    // Determing sorting
    useEffect(() => {

        // Copy all strings list
        let sortedStrings = [...EnteredStrings];

        switch (Sort) {
            case 0:
                // ascending time
                break;
            case 1:
                // descending time
                sortedStrings = sortedStrings.reverse();
                break;
            case 2:
                // ascending alphabetical
                sortedStrings = sortedStrings.sort();
                break;
            case 3:
                // descending alphabetical
                sortedStrings = sortedStrings.sort().reverse();
                break;
        }

        // Set sorted strings
        setDisplayStrings(sortedStrings);

    }, [EnteredStrings, Sort])

    // Determine to show unique strings or all strings
    useEffect(() => {
        if (Unique) {
            // Remove duplicate strings, remain sorted order
            setDisplayFinalStrings(DisplayStrings.reduce((a: any, b: any) => { if (a.indexOf(b) < 0) a.push(b); return a; }, []));
        } else {
            // Bring back all strings sorted
            setDisplayFinalStrings(DisplayStrings);
        }
    }, [DisplayStrings, Unique])


    return (
        <div className="main-section">
            <div className="subsection">
                <h1>
                    SWE432-001 Final Exam | Tech Challenge
                </h1>
                <h3>
                    Created By:&nbsp;
                <a href="https://mason.gmu.edu/~dparikh4/">
                        Deval Parikh
                </a>
                </h3>
            </div>

            <div className="subsection">
                <div className="card">
                    <h1 className="invert">Input</h1>
                    <input className="input-field" placeholder="Type your string here." value={CurrentString} onChange={(event) => { setCurrentString(event.target.value) }}></input>
                    <button onClick={addNewString}>Add</button>
                    {InputError ? <div className="error-text">Please enter a valid input</div> : <div></div>}


                    <h1 className="invert">Sort</h1>
                    <select className="input-field" value={Sort} onChange={(event) => setSort(parseInt(event.target.value))}>
                        <option value={0}>Ascending Time (oldest-latest)</option>
                        <option value={1}>Descending Time (latest-oldest)</option>
                        <option value={2}>Ascending Alphabetical</option>
                        <option value={3}>Descending Alphabetical</option>
                    </select>

                    <h1 className="invert">Options</h1>
                    <form className="input-field">
                        <label className="invert">
                            <input name="uniqueRadio" type="radio" onClick={() => setUnique(0)} defaultChecked />
                            All Strings
                        </label>
                        <br />
                        <label className="invert">
                            <input name="uniqueRadio" type="radio" onClick={() => setUnique(1)} />
                            Only Unique Strings
                        </label>
                    </form>

                </div>

            </div>

            <div className="subsection">
                <h1>Entered Strings</h1>
                <h3>Here you will find the collection<br /> of all strings the user has entered.</h3>
                <div className="card">

                    {
                        // When no strings have been inputted yet
                        DisplayFinalStrings.length === 1 && DisplayFinalStrings[0] === ""

                            ?

                            <div className="invert">No inputted strings yet.</div>

                            :

                            // Display all strings sorted and with options
                            DisplayFinalStrings.map((cur_str, index) => {
                                return (<div key={index} className="invert">{cur_str}</div>);
                            })
                    }

                </div>
            </div>

            <div className="subsection">

            </div>

        </div >
    );
}

