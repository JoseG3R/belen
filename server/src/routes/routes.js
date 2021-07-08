const express = require('express');
const routes=express.Router();




routes.post('/register', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        //console.log(req.body);
        conn.query('INSERT INTO `usuarios` set  ?',[req.body], (err,rows)=>{
            if(err) return res.send(err);
            res.json('El usuario ha sido registrado');
        })
    });
});


routes.get('/login', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        
        conn.query('SELECT * FROM usuarios WHERE username = ?',[req.body], (err,rows)=>{
            if(err) return res.send(err);
            res.json(rows);
        })
    });
});

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