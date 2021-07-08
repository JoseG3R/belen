import React, { Component } from 'react'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Navbar extends Component {
    cerrarSesion=()=>{
        cookies.remove('id',{path:"/"});
        cookies.remove('nombres',{path:"/"});
        cookies.remove('apellids',{path:"/"});
        cookies.remove('username',{path:"/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./"
        } 
    }

    render() {
        console.log(('id'+cookies.get('id')));
        console.log(('nombres: '+cookies.get('nombres')));
        console.log(('apellidos: '+cookies.get('apellidos')));
        console.log(('username: '+cookies.get('username')));
        return (
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" >Estudiantes</a>
                <a className="navbar-brand" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</a>
            </div>
        </nav>
            </div>
        );
    }
}

export default Navbar;


 