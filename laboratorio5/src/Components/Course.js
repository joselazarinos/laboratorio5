import { Fragment } from "react"
import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Curso = (props) => {
    const{curso}= props
    const{nombre}= props.curso
    return (
    <div>
      <Header nombre={nombre}/>
      <Content curso={curso} />
      <Total curso={curso}/>
    </div>
)
  

}

export default Curso;
