import {Link} from "react-router-dom";
import React from "react";
export default function Secblock() {
    return(
        <section className="i-s-sec">
                <span className="i-s-sec-text">
                    Free to use Editor
                </span>
            <div className="i-s-sec-button">
                <Link to="/editor">
                    <a className="i-s-sec-button-text">Try it right now</a>
                </Link>
            </div>
        </section>
    );
}