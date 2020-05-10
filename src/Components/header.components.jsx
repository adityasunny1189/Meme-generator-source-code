import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className = "header">
            <img 
                className = "logo"
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
            />
            <img className = "main-image" alt = "meme-generator" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAhTaWUyZKb2dUDDFRENJzbeehWZrA4GutYOtK3o4Vdaj-uGEW&usqp=CAU" />
        </div>
    )
}

export default Header;