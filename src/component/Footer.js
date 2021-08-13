import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <>
            <div className ="wrapper"> </div>
            <div classname="footer"> <p>Copyright Ⓒ {year} </p></div>                
        </>
    )
}

export default Footer
