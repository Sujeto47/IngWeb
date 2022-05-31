import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const initialForm ={
  user:"",
  password:"",
  id:null,
}

const LogInPage = ({createData, updateData, dataToEdit, setDataToEdit})  => {
  const [form, setForm] = useState(initialForm);
  useEffect(()=>{//Edita la propiedad del prop
    if(dataToEdit){
      setForm(dataToEdit);
    }else{
      setForm(initialForm);
    }
  },[dataToEdit]);
  const handleChange = (e) =>{
    setForm({
      ...form,[e.target.name]:e.target.value,
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!form.user || !form.password){//Validacion de campos vacios
      alert("Datos incompletos");
      return;
    }
    if(form.id===null){
      createData(form);
    }else{
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) =>{
    setForm(initialForm);
    setDataToEdit(null);
  };
    return (
      <div className='card'>
       <h1 class='formulario__titulo'>{dataToEdit ? "Editar" : "Inicio de Sesion"}</h1>
        <form onSubmit={handleSubmit}>
         <input type="text" name="user" placeholder="Usuario" onChange={handleChange} value={form.user}/>
         <input type="text" name="password" placeholder="Contraseña" onChange={handleChange} value={form.password}/>
         <input type="submit" value="Ingresar"/>
         <input type="reset" value="Limpiar" onClick={handleReset}/>
         <li>
           <Link to='/recuperar'>¿Olvidaste tu Contraseña?</Link>
         </li>
        </form>
      </div>
    );
  }
  
  export default LogInPage;