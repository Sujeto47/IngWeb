import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutPage from '../src/pages/AboutPage'
import HomePage from '../src/pages/HomePage'
import NotFunPage from '../src/pages/NotFunPage'
import TopicsPage from '../src/pages/TopicsPage'
import LogInPage from './pages/LogInPage';
import DatosPage from './pages/DatosPage';
import ResetPage from './pages/ResetPage';
//import React from "react";
import React, {useState} from 'react';
import NavBar from './components/NavBar'
const initialDb = [
  {
    id: 1,
    user: "admin",
    password: "admin",
  },
  {
    id: 2,
    user: "medico",
    password: "medico",
  },
  {
    id: 3,
    user: "paciente",
    password: "paciente",
  },
];
const App = () => {
  const [db,setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (data) =>{
    setDb([...db, data]);//Envia datos nuevos al registro
  };
  const updateData = (data) =>{
    let newData =db.map(el => el.id === data.id ? data:el);
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm('¿Esta seguro de eliminar este registro ?',);
    if(isDelete){
      let newData = db.filter(el => el.id !==id);
      setDb(newData);
    }
  };
    return (
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/about" element = {<AboutPage/>}/>
            <Route path="/home" element = {<HomePage/>}/>
            <Route path="/topic" element = {<TopicsPage/>}/>
            <Route path="/error" element = {<NotFunPage/>}/>
            <Route path="/sesion" element = {<LogInPage createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>}/>
            <Route path="/datos" element = {<DatosPage data ={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>}/>
            <Route path="/recuperar" element = {<ResetPage data = {db}/>}/>

          </Routes>
       </BrowserRouter>
    );
}
export default App