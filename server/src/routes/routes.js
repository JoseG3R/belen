const express = require('express');
const routes=express.Router();
const bcrypt = require('bcryptjs');


routes.post('/register', async(req, res)=>{

    const nombres = req.body.nombres;
    const apellidos = req.body.apellidos;
    const username = req.body.username;
    const email = req.body.username;
    const password = req.body.password;

    let passwordHash = await bcrypt.hash(password, 10);

    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        //console.log(req.body);
        conn.query('INSERT INTO `usuarios` set  ?',{nombres: nombres, apellidos: apellidos, username:username, email: email, password:passwordHash}, (err,rows)=>{
            if(err) return res.send(err);
            res.json('El usuario ha sido registrado');
        })
    });
});
/* routes.post('/register', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        //console.log(req.body);
        conn.query('INSERT INTO `usuarios` set  ?',[req.body], (err,rows)=>{
            if(err) return res.send(err);
            res.json('El usuario ha sido registrado');
        })
    });
}); */



routes.post('/login', async(req, res)=>{
    const user = req.body.user;
    const password = req.body.password;
    let passwordHash = await bcrypt.hash(password, 10);
    
    if(user && password){
        conn.query('SELECT * FROM usuarios WHERE user = ?',[user], async(err, results)=>{
            if(results.length == 0 || !(await bcrypt.compare(password, result[0].password))){
                res.send('Usuario o contraseña incorrectos')
            }else{
                res.send('conexion exitosa');
            }
        })
    }else{
        res.send("Ingrese un usuario y una contraseña")
    }
    
});
/* routes.post('/login', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        //console.log(req.body)
        conn.query(`SELECT * from usuarios where username = '${req.body.username}' and password = '${req.body.password}'`, (err,rows)=>{
            if(err) return res.send(err);
            res.json(rows);
        })
    });
}); */

//Estudiantes

routes.get('/', (req, res )=>{
    req.getConnection((err,conn)=>{
        if(err) return res.send(err);
        conn.query('SELECT * FROM estudiantes',(err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        //console.log(req.body);
        conn.query('INSERT INTO estudiantes set ?',[req.body], (err,rows)=>{
            if(err) return res.send(err);
            res.json('El estudiante ha sido registrado');
        })
    });
});

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        //console.log(req.body);
        conn.query('UPDATE estudiantes set ? WHERE id = ?',[req.body, req.params.id], (err,rows)=>{
            if(err) return res.send(err);
            res.json('El estudiante ha actualizado con exito');
        })
    });
});

routes.delete('/:id',(req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM estudiantes WHERE id = ?',[req.params.id],(err, rows)=>{
            res.send('Estudiante eliminado')
        })
    })
})




module.exports=routes;