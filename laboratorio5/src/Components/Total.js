import React from 'react'

const Total = (props) => {

    
    const {parts} = props.curso

   
    const sumaFinal = parts.reduce((prev, next) => prev + next.exercises, 0);
    return (
    <div>
        <p>Numero de ejercisios: {sumaFinal}</p>
    </div>
    )
}

export default Total;