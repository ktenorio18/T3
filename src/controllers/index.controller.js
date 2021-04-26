const { Pool }=require('pg');

const pool=new Pool({
    host:'localhost',
    user:'postgres',
    password:'',
    database:'tarea3',
    port:'5432'
});
const getEstudiante=async (req,res)=>{
     const response=await pool.query('SELECT * FROM estudiante');
     res.status(200).json(response.rows);
};
//=========================================INSERT=========================================
//agregar estudiante
const agregarEstudiante=async(req,res)=>{
    const {nombre,apellidos,fechaNacimiento,telefono,correoElectronico} =req.body;
    const response=await pool.query('INSERT INTO estudiante(nombre,apellidos,fechaNacimiento,telefono,correoElectronico) VALUES($1,$2,$3,$4,$5)',[nombre,apellidos,fechaNacimiento,telefono,correoElectronico]);
    console.log(response);
    res.json({
        message:'Estudiante creado',
        body:{
            user:{
                    nombre,apellidos,fechaNacimiento,telefono,correoElectronico
                
            }
        }
    });
};

//agregar carrera
const agregarCarrera=async(req,res)=>{
    const {carrera}=req.body;
    const response=await pool.query('INSERT INTO carrera(carrera) VALUES($1)',[carrera]);
    console.log(response);
    res.json({
        message:'Carrera creada',
        body:{
            user:{
                    carrera
                
            }
        }
    });
}; 

//agregar cita
const agregarCita=async(req,res)=>{
    const {idEstudiante,idCarrera,cita,tiempoSesion}=req.body;
    const response=await pool.query('INSERT INTO cita(idEstudiante,idCarrera,cita,tiempoSesion) VALUES($1,$2,$3,$4)',[idEstudiante,idCarrera,cita,tiempoSesion])
    console.log(response);
    res.json({
        message:'Cita creada',
        body:{
            user:{
                idEstudiante,idCarrera,cita,tiempoSesion
                
            }
        }
    });
}; 

//=========================================UPDATE=========================================
//actualizar una cita
const updateCita=async(req,res)=>{
    const id=req.params.id;
    const {idEstudiante,idCarrera,cita,tiempoSesion}=req.body; 
    const response=pool.query('UPDATE cita SET idEstudinate=$1,idCarrera=$2,cita=$3,tiempoSesion=$4 WHERE idCita=$3',[idEstudiante,idCarrera,cita,tiempoSesion,id]);
    console.log(response);
    res.json('Cita actualizada');
};

//=========================================DELETE=========================================
//eliminar una cita
const deleteCita=async(req,res)=>{
    const id=req.params.id;
    const response=await pool.query('DELETE FROM cita WHERE idCita=$1',[id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);
};
//=========================================VIEW=========================================
//ver las citas de los estudiantes
const getCitas=async(req,res)=>{
    const response= await pool.query('SELECT e.idEstudiante,e.nombre||e.apellidos,e.correoElectronico,ca.carrera,c.cita,c.tiempoSesion  FROM cita c INNER JOIN estudiante e e.idEstudiante=c.idEstudiante INNER JOIN carrera ca ca.idCarrera=c.idCarrera')
    res.json(response.rows);
};
module.exports={
    getEstudiante,
    agregarEstudiante,
    agregarCarrera,
    agregarCita,
    updateCita,
    deleteCita,
    getCitas

}