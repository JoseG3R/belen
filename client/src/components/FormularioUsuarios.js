
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
        <form onSubmit={handleSubmit}>
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

/* import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

class FormularioUsuarios extends Component {
    constructor(){
        super()
        this.state = {
            nombres: '',
            apellidos: '',
            username: '',
            email: '',
            password: ''
        }
        this.changeNombres= this.changeNombres.bind(this);
        this.changeApellidos= this.changeApellidos.bind(this);
        this.changeUsername= this.changeUsername.bind(this);
        this.changeEmail= this.changeEmail.bind(this);
        this.changePassword= this.changePassword.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }
    
    changeNombres(event){
        this.setState({
            apellidos: event.target.value
        })
    }
    changeApellidos(event){
        this.setState({
            nombres: event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username: event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();
        const registered = {
            fullName: this.state.fullName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/app/signup', registered)
            .then(response=>console.log(response.data))

        this.setState({
            fullName:'' ,
            username: '',
            email: '',
            password: ''
        })

        window.location = '/'
    }

    render() { 
        return ( 
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                                placeholder="Full name" 
                                onChange={this.changeFullName}
                                value={this.state.fullName}
                                className="form-control form-group"
                            />
                            <input type="text" 
                                placeholder="Username"
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className="form-control form-group"
                            />
                            <input type="text" 
                                placeholder="E-mail"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group"
                            />
                            <input type="password" 
                                placeholder="Password"
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group"
                            />
                            <input type="submit" className="btn btn-danger btn-block"  value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default FormularioUsuarios;  */

