import React, { Component, useState } from 'react'
import FormularioUsuarios from '../components/FormularioUsuarios';
import '../css/Login.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:9000/api/login";
const cookies = new Cookies();

class Login extends Component {

    state={
        form:{
            nombres: '',
            apellidos: '',
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        });
    }



    iniciarSesion=async()=>{
        await axios.post(baseUrl,  {username: this.state.form.username, password: this.state.form.password 
            /* md5(this.state.form.password) */})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                let respuesta=response[0];
                cookies.set('id', respuesta.id,{path: "/"});
                cookies.set('nombres', respuesta.nombres, {path:"/"});
                cookies.set('apellidos', respuesta.apellidos, {path:"/"});
                cookies.set('username', respuesta.username, {path:"/"});
                window.location.href="./Inicio";
            }else{
                alert('El usuario o la contraseña son incorrectos')
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./Inicio"
        }   
    }

    render() {
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label>Contraseña: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={()=>this.iniciarSesion()}>Iniciar sesión</button>
                    </div>
                    <a href="/Register">Registrar Usuario</a>
                </div>
            </div>
        )
    }
}

export default Login;