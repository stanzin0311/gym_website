import React from 'react'
import aboutimage from "../images/about.png"

function About() {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>
                    We know that building a positive culture is incredibly important.
                     We believe in encouraging, supporting, challenging, learning and growing to be the best!
                      Our flexible working solutions, gym rebates and educational opportunities create a
                       positive work/life balance for all our employees.

                     <button>READ MORE</button>
                </p>

            </div>

        </div>
    )
}

export default About
