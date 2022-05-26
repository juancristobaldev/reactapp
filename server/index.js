const express = require('express'),
app = express(),
mysql = require('mysql'),
cors = require('cors'),
port = 3001

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

// Conectar mysql

/*const connection = mysql.createConnection({
    host:'68.178.244.98',
    port:'3306',
    user:'thepaqui',
    password:'12345',
    database:'juancristobal'
})

connection.connect((err) => {
    if(err) throw err
    else console.log('mysql connected')
})

//cors

app.use(cors())


//Definir rutas

app.get('/', (req,res)=>{
    res.send('Api funcionando')
})


app.get('/api/routines',(req,res)=>{ //SELECCIONAR TODO'S
    connection.query('SELECT * FROM routines',(err,done)=>{
        if(err) throw err
        else res.send(done)
    })
})

app.get("/api/exercises/",(req,res)=>{
    const query = "SELECT * FROM exercises "
    connection.query(query,(err,done)=>{
        if(err) throw err
        else{
            res.send(done)
        }
    })
})

app.get('/api/routines/:id',(req,res)=>{ // SELECCIONAR TODO'S por ID
    const query = 'SELECT * FROM routines WHERE id = ?'
    connection.query(query,[parseInt(req.params.id)],(err,done)=>{
        if(err) throw err
        else res.send(done)
    })
})

app.post('/api/routines/create', async (req,res)=>{ // CREAR UN NUEVO TODO
    const name = req.body.name
    if(!name) return res.status(400).json({error:'No hay datos'})
    else{
        connection.query('SELECT * FROM routines',(err,done) => {
            if (err) throw err
            else{
                const routine = {
                    id: done.length + 1,
                    name: name
                }
                console.log(routine.id+' '+routine.name)
                const sql = "INSERT INTO routines (id,name) VALUES ? "
                const values = [
                    [routine.id,routine.name]
                ]
                connection.query(sql ,[values],(err,done)=>{
                    if (err) throw err
                    else{
                        console.log('Agregado correctamente')
                    }
                })
            }
        })
    }

})*/

app.listen(port, ()=> console.log('Api funcionando en puerto '+ port))