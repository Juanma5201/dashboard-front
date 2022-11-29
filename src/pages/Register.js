import { Navigate, Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export const Register = ({user}) => {
    const [inputs, setInputs] = useState({username:"", email:"", password:""})
    const [mensaje, SetMensaje] = useState()
    const [loading, SetLoading] = useState()
    const {username, password, email} = inputs
    const onChange = () => {setInputs({...inputs, [e.target.name]: e.target.value})}
    const onSubmit = async (e) => {e.preventDefault()}
    if (username !=='' && password !=='' && email !=='') {
        const Usuario = {username, password, email}
        SetLoading(true)
        await axios
        .post("http://localhost:5000/auth/register", Usuario)
        .then(({data}) => {SetMensaje(data.mensaje)
        setInputs({username:'',email:'',password:''})
        })
    } 
    if (user.isLogin) {
        return   <Navigate to={"/user/:_id"}/>
      }
    return (
        <main>
        <form action="" >
            <input
                //estado={usuario}
                //cambiarEstado={cambiarUsuario}
                tipo="text"
                label="Usuario"
                placeholder="john123"
                name="usuario"
                leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
                //expresionRegular={expresiones.usuario}
            />
            <input
                //estado={password}
                //cambiarEstado={cambiarPassword}
                tipo="password"
                label="Contraseña"
                name="password1"
                leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
                //expresionRegular={expresiones.password}
            />
            <input
                //estado={password2}
                //cambiarEstado={cambiarPassword2}
                tipo="password"
                label="Repetir Contraseña"
                name="password2"
                leyendaError="Ambas contraseñas deben ser iguales."
                //funcion={validarPassword2}
            />
            <input
                //estado={correo}
                //cambiarEstado={cambiarCorreo}
                tipo="email"
                label="Correo Electrónico"
                placeholder="john@correo.com"
                name="correo"
                leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                //expresionRegular={expresiones.correo}
            />
            
                       <div>
                <button type="submit"><Link to="/login">Enviar</Link></button>
            </div>
        </form>
    </main>
    )
}