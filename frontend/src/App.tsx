import { useState } from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import { Greet } from "../wailsjs/go/main/App.js";
import { NavLink } from "react-router";
import { Button } from './stories/Button.js';
function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <div id="App">
            <NavLink to={'/foo'}><img src={logo} id="logo" alt="logo" /></NavLink>
            <div id="result" className="result">{resultText}</div>
            <div id="input" className="input-box">
                <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text" />

            </div>
            <Button onClick={greet} label='Click Me!' size='large' backgroundColor='#1ecb9a'></Button>
        </div>
    )
}

export default App
