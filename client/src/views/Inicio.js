import React,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import ListaEstudiantes from '../components/ListaEstudiantes';
import Formulario from '../components/Formulario';


function Inicio() {

  const [estudiante, setEstudiante] = useState({
    nombres: "",
    apellidos: "",
    ti: 0,
    nacimieto: undefined
  })
const [estudiantes, setEstudiantes] = useState([]);

const [listaActualizada, setListaActualizada] = useState(false);

useEffect(() => {
  const getEstudiantes = () =>{
    fetch('http://localhost:9000/api')
    .then(res=>res.json())
    .then(res => setEstudiantes(res))
  }
  getEstudiantes();
  setListaActualizada(false);
}, [listaActualizada])

  return (
    <>
      <Navbar  brand="Estudiantes" />
      <h3>Inicio</h3>
      <div className="container">
        <div className="row">
          <div className="col-10">
              <h2 style={{textAlign:'center'}}>Agregar un nuevo estudiante</h2>
              <Formulario estudiante={estudiante} setEstudiante={setEstudiante} />
          </div>
          <div className="col-12">
            <h2 style={{textAlign: 'center'}} >Lista de estudiantes</h2>
            <ListaEstudiantes estudiante={estudiante} setEstudiante={setEstudiante} estudiantes={estudiantes} setListaActualizada={setListaActualizada} />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
