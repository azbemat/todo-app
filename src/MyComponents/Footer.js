import React from 'react'

export const Footer = () => {
    let footerStyle={
        position: "fixed",
        bottom: "0vh",
        width: "100vw"
    }
    return (
        <footer className="bg-dark text-light py-1" style={footerStyle}>
            <p className="text-center">
                copyright &copy; TodoList.com
            </p>
        </footer>
    )
}
