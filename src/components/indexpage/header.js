import React from "react";
export default function Header() {
    return(
        <header>
            <span className="logo-text" id="logoname"> WebSiteName<label htmlFor="active" className="menu-btn"> </label></span>
            <input type="checkbox" id="active"/>
            <label htmlFor="active" className="close"> </label>
            <div className="wrapper">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </div>
        </header>
    );
}