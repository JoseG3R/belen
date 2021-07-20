import React,{useState} from 'react';


const FormularioUsuarios = () => {
    const [usuario, setUsuario] = useState({
        nombres: "",
        apellidos: "",
        username: "",
        email: "",
        password: ""
      })
    
    const handleChange = e =>{
        //console.log(e.target.value)
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    let{nombres, apellidos, username, email, password}=usuario;

    const handleSubmit=()=>{
        //validación de los datos
        if(nombres==="" ||apellidos===""||username===""||email===""||password===""){
            alert("Todos los campos son obligatorios");
            return
        }
        //consulta
        const requestInit={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(usuario)
        }
        fetch('http://localhost:9000/api/register', requestInit)
            .then(res=>res.text())
            .then(res=>console.log(res))

        //reiniciando state de usuario
        setUsuario({
            nombres:'',
            apellidos:'',
            username: '',
            email:'',
            password: ''
        })

    }

    return ( 
        <form onSubmit={handleSubmit}className="container">
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label" >Nombres</label>
                <input value={nombres} name="nombres" onChange={handleChange} type="text" id="nombres" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label" >Apellidos</label>
                <input value={apellidos} name="apellidos" onChange={handleChange} type="text" id="apellido" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label" >Nombre de usuario</label>
                <input value={username} name="username" onChange={handleChange} type="text" id="username" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label" >Email</label>
                <input value={email} name="email" onChange={handleChange} type="text" id="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label" >Contraseña de usuario</label>
                <input value={password} name="password" onChange={handleChange} type="password" id="password" className="form-control" />
            </div>
           
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
     );
}
 
export default FormularioUsuarios;

