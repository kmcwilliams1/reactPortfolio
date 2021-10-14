import React from "react";
import '../App.css'


function Header() {
    return (
        <header className="App-header">
            <h1>Portfolio of Kyle McWilliams</h1>
            <div>
                <a href="#aboutme">About Me</a>

                <a href="#container">Work</a>

                <a href="#content">Contact Me </a>
            </div>
        </header>
    );
}

export default Header;