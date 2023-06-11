import React from "react";

export default function Header() {
    return (
        <div className='the-header'>
            <img className="default-img" src="src\images\person-image.jpg" alt="default dude" />
            <h1 className='name'>John Smith</h1>
            <h2 className='job-desc'>FrontEnd Developer</h2>
            <p>United Kingdom, London</p>
        </div>
    )
}