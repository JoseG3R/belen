import React from 'react';

const Formulario = ({estudiante, setEstudiante}) => {

    const handleChange = e =>{
        setEstudiante({
            ...estudiante,
            [e.target.name]: e.target.value
        })
    }

    let{nombres, apellidos, ti, nacimiento}=estudiante;

    const handleSubmit=()=>{
        ti=parseInt(ti,10)
        //validación de los datos
        if(nombres==="" ||apellidos===""||ti<=0||nacimiento===null){
            alert("Todos los campos son obligatorios");
            return
        }
        //consulta
        const requestInit={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(estudiante)
        }
        fetch('http://localhost:9000/api', requestInit)
            .then(res=>res.text())
            .then(res=>console.log(res))

        //reiniciando state de libro
        setEstudiante({
            nombres:'',
            apellidos:'',
            ti:0,
            nacimiento:undefined
        })

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label" >Nombre</label>
                <input value={nombres} name="nombres" onChange={handleChange} type="text" id="nombre" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label" >Apellido</label>
                <input value={apellidos} name="apellidos" onChange={handleChange} type="text" id="apellido" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="ti" className="form-label" >TI</label>
                <input value={ti} name="ti" onChange={handleChange} type="number" id="ti" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="nacimiento" className="form-label" >Nacimiento</label>
                <input value={nacimiento} name="nacimiento" onChange={handleChange} type="date" id="nacimiento" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
     );
}
 
export default Formulario;