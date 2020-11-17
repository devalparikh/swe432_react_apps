import React from 'react';
import './Assignment10.css';

interface Props {
}

interface State {
}

class Assignment10 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
        }

    }

    render() {
        return (
            <div className="main-section">
                <div className="subsection">
                    <h1>
                        SWE432-001 Assignment 10
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
}

export default Assignment10;
