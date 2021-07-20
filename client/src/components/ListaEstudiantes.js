import React from 'react';

const ListaEstudiantes = ({estudiante,setEstudiante,estudiantes, setListaActualizada}) => {

    const handleDelete=id=>{
        
        const requestInit={
            method:'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
            .then(res=>res.text())
            .then(res=>console.log(res))
            setListaActualizada(true);
    }

    let{nombres, apellidos, ti, nacimiento}=estudiante;
   
    const handleUpdated=id=>{
        //validación de los datos
        if(nombres==="" ||apellidos===""||ti<=0,nacimiento===undefined){
            alert("Todos los campos son obligatorios");
            return
        }
        const requestInit={
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(estudiante)
        }
        //reiniciando state de libro
        setEstudiante({
            nombres:'',
            apellidos:'',
            ti:0,
            nacimiento:undefined
        })

        fetch('http://localhost:9000/api/' + id, requestInit)
            .then(res=>res.text()
            .then(res=>console.log(res)))

            setListaActualizada(true)
    }
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>TI</th>
                    <th>Fecha de Nacimiento</th>
                </tr>
            </thead>
            <tbody>
                {estudiantes.map(estudiante=>(
                <tr key={estudiante.id}>
                    <td>{estudiante.nombres}</td>
                    <td>{estudiante.apellidos}</td>
                    <td>{estudiante.ti}</td>
                    <td>{estudiante.nacimiento}</td>
                    <td>
                        <div className="mb-3" >
                            <button onClick={()=>handleDelete(estudiante.id)} className="btn btn-danger">Eliminar</button>
                        </div>
                        <div className="mb-3" >
                            <button onClick={()=>handleUpdated(estudiante.id)} className="btn btn-success">Actualizar</button>
                        </div>
                    </td>
                </tr>
                )
                )}
            </tbody>
        </table>
     );
}
 
export default ListaEstudiantes;