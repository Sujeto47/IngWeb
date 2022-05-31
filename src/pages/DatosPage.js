import React from "react";
import DatosRow from "./DatosRow";

const DatosPage = ({data, setDataToEdit, deleteData}) =>{
    return(
        <div className="card">
            <h1>Tabla de Registros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Contraseña</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ===0 ? (<tr><td colSpan="3">Sin datos</td></tr>
                    ):(
                        data.map((el) => <DatosRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
                        )}
                </tbody>
            </table>
        </div>
    )
}
export default DatosPage