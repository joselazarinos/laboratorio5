import React from 'react'

const Header = (props) => {

    
    const nombre = props.nombre
    return (
    <div>
        <h1>{nombre}</h1>
    </div>
    )
}

export default Header;