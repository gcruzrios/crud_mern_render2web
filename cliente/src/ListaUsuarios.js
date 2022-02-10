import React, { useEffect, useState } from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import axios from 'axios'

function ListaUsuarios(){

    const [datausuarios, setDatausuarios] = useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerusuarios').then(res =>{
            console.log(res.data)
            setDatausuarios(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

//mapear lista de usuarios en objeto usuario

const listausuarios = datausuarios.map(usuario =>{
    return(
        <div>
            <UsuarioIndividual usuario={usuario}/>
        </div>

    )

})

    return(
       <div>
           <h2>Lista de usuarios</h2>
            {listausuarios}
        </div> 
    )
}

export default ListaUsuarios