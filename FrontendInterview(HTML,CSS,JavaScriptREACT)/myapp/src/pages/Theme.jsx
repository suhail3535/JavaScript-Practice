
import React, { useState } from 'react'
import "./theme.css"
const Theme = () => {
    const [theme, setTheme] = useState("light")
    const [theme1, setTheme1] = useState(false)
    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }
    const handleshow = () => {
        setTheme1(!theme1)
    }
    return (
        <>

            <div className={`app ${theme}`}>
                <button onClick={toggleTheme}>
                    Toggle theme
                </button>

            </div>
            <button onClick={handleshow}>show</button>
            {theme1 ? <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, voluptates?
            </div>:""}


        </>
    )
}

export default Theme
