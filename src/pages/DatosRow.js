import React from "react";
import { Link } from "react-router-dom";
const DatosRow = ({el, setDataToEdit, deleteData}) =>{
    let {user, password, id} = el;
    return(
        <tr>
            <td>{user}</td>
                <td>{password}</td>
                <td>
                <button onClick={()=>setDataToEdit(el)}><li><Link to='/sesion'>Editar</Link></li></button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default DatosRow;