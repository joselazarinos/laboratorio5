import logo from './logo.svg';
import Course from "./Components/Course";
import './App.css';

const App = () => {
  const cursos = [
    {
      nombre: 'Desarrollo de aplicasiones de half stack',
      id: 1,
      parts: [
        {
          nombre: 'Fundamentos en React native',
          exercises: 15,
          id: 1
        },
        {
          nombre: 'uso de accesorios para pasar datos',
          exercises: 3,
          id: 2
        },
        {
          nombre: 'estado de un componente',
          exercises: 11,
          id: 3
        },
        {
          nombre: 'Redux',
          exercises: 19,
          id: 4
        },
        {
            nombre: 'uso de servicios',
            exercises: 12,
            id: 5
          }
      ]
    }, 
    {
      nombre: 'Node.js',
      id: 2,
      parts: [
        {
          nombre: 'Enrutamiento',
          exercises: 10,
          id: 1
        },
        
        {
            nombre: 'numero total de ejercisios',
            exercises: 5,
            id: 2
          }
      ]
    }
  ]
  const listaCurso = cursos.map((element, index) =>
        <Course key={index} curso={element}/>
    );
return (
  <div>        
      {listaCurso}
  </div>
  )
}

export default App;
