import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import './PreFinal.css';


export function PreFinal() {
    const [inputStr1, setinputStr1] = useState("A");
    const [inputStr2, setinputStr2] = useState("B");
    const [inputStr3, setinputStr3] = useState("C");
    const [resultStr, setResultStr] = useState("");
    const [seperatorStr, setSeperatorStr] = useState("");

    const [concatOrder, setconcatOrder] = useState(0);



    useEffect(() => {
        switch (concatOrder) {
            case 0:
                setResultStr(inputStr1 + seperatorStr + " " + inputStr2 + seperatorStr + " " + inputStr3);
                break;
            case 1:
                setResultStr(inputStr1 + seperatorStr + " " + inputStr3 + seperatorStr + " " + inputStr2);
                break;
            case 2:
                setResultStr(inputStr2 + seperatorStr + " " + inputStr1 + seperatorStr + " " + inputStr3);
                break;
            case 3:
                setResultStr(inputStr2 + seperatorStr + " " + inputStr3 + seperatorStr + " " + inputStr1);
                break;
            case 4:
                setResultStr(inputStr3 + seperatorStr + " " + inputStr1 + seperatorStr + " " + inputStr2);
                break;
            case 5:
                setResultStr(inputStr3 + seperatorStr + " " + inputStr2 + seperatorStr + " " + inputStr1);
                break;
        }
    }, [inputStr1, inputStr2, inputStr3, seperatorStr, concatOrder]);



    return (
        <div className="main-section">
            <div className="subsection">
                <h1>
                    SWE432-001 Practice Final Exam | Tech Challenge
            </h1>
                <h3>
                    Created By:
                    &nbsp;
                <a href="https://mason.gmu.edu/~dparikh4/">
                        Deval Parikh
                </a>
                </h3>
            </div>

            <div className="main-user-field">

                <div className="subsection card">
                    <div className="input-field">
                        Input String 1
                    <div>
                            <input type="text" name="string1" placeholder="Input String 1" value={inputStr1} onChange={e => setinputStr1(e.target.value)} />
                        </div>
                    </div>

                    <div className="input-field">
                        Input String 2
                    <div>
                            <input type="text" name="string2" placeholder="Input String 2" value={inputStr2} onChange={e => setinputStr2(e.target.value)} />
                        </div>
                    </div>

                    <div className="input-field">
                        Input String 3
                    <div>
                            <input type="text" name="string3" placeholder="Input String 3" value={inputStr3} onChange={e => setinputStr3(e.target.value)} />
                        </div>
                    </div>

                    <div className="input-field">
                        Seperator
                    <div>
                            <input type="text" name="seperator" placeholder="Input Seperator String" value={seperatorStr} onChange={e => setSeperatorStr(e.target.value)} />
                        </div>
                    </div>
                </div>


                <div className="subsection card">
                    Order
                    <form className="radio-form">
                        <input className="input-field" type="radio" name="concatinationOrder" defaultChecked onClick={() => setconcatOrder(0)}></input>
                        ABC <br />

                        <input className="input-field" type="radio" name="concatinationOrder" onClick={() => setconcatOrder(1)}></input>
                        ACB <br />

                        <input className="input-field" type="radio" name="concatinationOrder" onClick={() => setconcatOrder(2)}></input>
                        BAC <br />

                        <input className="input-field" type="radio" name="concatinationOrder" onClick={() => setconcatOrder(3)}></input>
                        BCA <br />

                        <input className="input-field" type="radio" name="concatinationOrder" onClick={() => setconcatOrder(4)}></input>
                        CAB <br />

                        <input className="input-field" type="radio" name="concatinationOrder" onClick={() => setconcatOrder(5)}></input>
                        CBA <br />
                    </form>
                </div>

            </div>

            <div className="subsection">
                <h1>Result</h1>
                <h3>The concatination results.</h3>
            </div>

            <div className="subsection">
                <h1>{resultStr}</h1>
            </div>
        </div>
    );
}
