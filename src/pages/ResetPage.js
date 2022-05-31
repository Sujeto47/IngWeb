
import { Link } from 'react-router-dom';
import DatosBusqueda from "./DatosBusqueda";
import React, {useState} from 'react';
const ResetPage = ({data, setDataToEdit, deleteData}) => {
    //let {user, password, id} = el;
    const [texto, setTexto] = useState('')
    const handleInputChange = ({target}) => {
        setTexto(target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(texto)
    }
    return (
        <div className="card">
            <h1>Recuperacion de Contraseña</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" name="user" placeholder='Digite su Usuario'value={texto} onChange={handleInputChange}></input>
            <table>
                <tbody>
                    {data.length ===0 ? (<tr><td colSpan="3">Sin datos</td></tr>
                    ):(
                        data.map((elo) => <DatosBusqueda key={elo.user} elo={elo} el={texto} />)
                        )}
                </tbody>
            </table>
            </form>
        </div>
      /*<div>
        <h1>Recuperacion de Contraseña</h1>
        <form>
            <input type="text" name="user" placeholder='Usuario'></input>
            <input type="submit" value='Recuperar Contraseña'></input>
            <li>
              <Link to='/sesion'>Atras</Link>
            </li>
            <tr>
                <td>{el.name}</td>
            </tr>
        </form>
      </div>
      <table>
                <tbody>
                    {data.length ===0 ? (<tr><td colSpan="3">Sin datos</td></tr>
                    ):(
                        data.map((el) => <DatosBusqueda key={el.user} el={el} />)
                        )}
                </tbody>
            </table>
            <table>
                <tbody>
                    {data.length ===0 ? (<tr><td colSpan="3">Sin datos</td></tr>
                    ):(
                        data.map((el) => <DatosBusqueda key={el.user} el={texto} />)
                        )}
                </tbody>
                <p>
                    {texto}
                </p>
            </table>
            <input type="submit" value='Recuperar Contraseña'></input>*/
    );
  }
  
  export default ResetPage;