import React from "react";
import { Link } from "react-router-dom";
import ResetPage from "./ResetPage";
import DatosRow from "./DatosRow";
const DatosBusqueda = ({elo, setDataToEdit, deleteData,data,el}) =>{
    let {user, password,id} = elo;
    return(
        <div>
            {(() => {
        if (elo.password===el) {
          return (
            <p>La Contraseña es: {elo.password}</p>
          )
        }  
      })()}
        </div>
        /*<tr>
            <td>{user}</td>
                <td>{password}</td>
                La Contraseña es: {elo.password}
                Dato a Comparar: {el}
                <td>
            </td>
        </tr>*/
    );
};

export default DatosBusqueda;