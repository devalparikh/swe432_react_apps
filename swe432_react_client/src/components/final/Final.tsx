import React from 'react';
import { useState } from 'react';
import './Final.css';


export function Final() {
    const [currStr, setCurrStr] = useState("");



    return (
        <div className="main-section">
            <div className="subsection">
                <h1>
                    SWE432-001 Final Exam | Tech Challenge
            </h1>
                <h3>
                    Created By:

                ,&nbsp;
                <a href="https://mason.gmu.edu/~dparikh4/">
                        Deval Parikh
                </a>
                </h3>
            </div>

            <div className="subsection">
                Hello World
            </div>

            <div className="subsection">
                <h1>
                    Collaboration Summary
                </h1>
                <h3>
                    <div className=""></div>
                </h3>
            </div>
        </div>
    );
}

