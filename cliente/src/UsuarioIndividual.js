import axios  from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

function UsuarioIndividual({usuario}){


    const navegar = useNavigate()


    //Para animacion scroll al bajar

    useEffect(() => {
        AOS.init()
    }, [])

    //Function para borrar usuario
    function borrarusuario(idusuario){

        console.log(idusuario);

        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res => {
            console.log(res.data)
            //alert(res.data)
            Swal.fire('Borrar usuario', 'El usuario fue borrado')
            navegar(0);
            
        }).catch(err =>{
            console.log(err)
        })
    }



    return(
       <div className="container">
           <div className="row">

               <div className="col-sm-6 offset-3" data-aos="flip-right">
                    <ul className="list-group">
                        <li className="list-group-item">{usuario.idusuario}</li>
                        <li className="list-group-item">{usuario.nombre}</li>
                        <li className="list-group-item">{usuario.email}</li>
                        <li className="list-group-item">{usuario.telefono}</li>
                    </ul>
                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className="btn btn-success ml-auto">Editar</li> </Link>   
                    &nbsp;
                     
                    <button className="btn btn-danger" onClick={()=>{borrarusuario(usuario.idusuario)}}>Borrar</button>
               </div>
              
           </div>
           
       </div> 
    )
}

export default UsuarioIndividual