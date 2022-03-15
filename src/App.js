import logo from './logo.svg';
import './App.css';
import AppBar from './components/appBar';
import MovieList from './components/movieList';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import MinimizeIcon from '@mui/icons-material/Minimize';

import {Data} from "./Data"
import { useState , useRef } from 'react';
function App() {
  let titleRef = useRef()
    let descriptionRef = useRef()
    let urlRef = useRef()
    let ratingRef = useRef()
    let titleRemoveRef = useRef()
    let ratingRemoveRef = useRef()
    const [list, setList] = useState(Data);
    const addMovie = () =>{
      setList([...list,{name:`${titleRef.current.value}`,description:`${descriptionRef.current.value}`,rating:`${ratingRef.current.value}`,imgUrl:`${urlRef.current.value}`}])
      console.log(list);
    }

    const removeMovie = () => {
      setList(list.filter(elt => (elt.name!=titleRemoveRef.current.value && elt.rating!=ratingRemoveRef.current.value)))
    }
 return (
   <>
              <div style={{display:"grid",gridTemplateColumns:"1fr"}}>
           <div style={{display:"flex",justifyContent:"space-between",textAlign:"center",width:"80%",margin:"auto"}}>
            <h2>Add a Film</h2>
            <TextField inputRef={titleRef} style={{marginTop:"auto",marginBottom:"auto"}} label="Movie name" variant="standard" color="success" focused />
           <TextField inputRef={descriptionRef} style={{marginTop:"auto",marginBottom:"auto"}} label="Movie description" variant="standard" color="success" focused />
           <TextField inputRef={urlRef} style={{marginTop:"auto",marginBottom:"auto"}} label="url" variant="standard" color="success" focused />
           <TextField inputRef={ratingRef} style={{marginTop:"auto",marginBottom:"auto"}} label="Rating" variant="standard" color="success" focused />
            <button onClick={addMovie} style={{border:"0",backgroundColor:"white"}}><AddIcon sx={{ fontSize: 30 }}  style={{marginTop:"auto",marginBottom:"auto"}}/></button>
           </div>
           <div style={{display:"flex",justifyContent:"space-between",textAlign:"center",width:"70%",margin:"auto"}}>
            <h2>Remove a Film</h2>
            <TextField inputRef={titleRemoveRef} style={{marginTop:"auto",marginBottom:"auto"}} label="Movie name" variant="standard" color="success" focused />
           <TextField inputRef={ratingRemoveRef} style={{marginTop:"auto",marginBottom:"auto"}} label="Rating" variant="standard" color="success" focused />
            <button onClick={removeMovie}  style={{border:"0",backgroundColor:"white"}}><MinimizeIcon sx={{ fontSize: 30 }}  style={{marginTop:"auto",marginBottom:"auto"}}/></button>
           </div>
        </div>
      <MovieList list={list}/>
   </>
 );
}
export default App;