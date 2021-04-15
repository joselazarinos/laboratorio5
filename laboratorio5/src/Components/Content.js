import React from 'react'
import Part from './Part'

const Content = (props) => {
    const {parts} = props.curso
    const listaItems = parts.map((element, index) =>
        <Part key={index} parte={element.nombre} numeroEjercicios={element.exercises} />
    );
    return (
    <div>        
        {listaItems}
    </div>
    )
    
}

export default Content;