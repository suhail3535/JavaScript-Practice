import React from 'react'
import "./card.css"
import logo from "../images/image.jpg"
const Card = () => {
    return (
        <div className='main_cont'>
            <div className='card'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='details'>
                    <h1>Down syndrome:Does your kid has IT?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam sapiente commodi illum quis ipsum optio exercitationem
                        laborum nihil expedita, quas voluptatum velit
                        ea! Delectus aliquid, nisi tenetur nulla inventore minus.
                    </p>
                    <div className='read_more'>
                        <button>Read More About it <span>&#8594;</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
