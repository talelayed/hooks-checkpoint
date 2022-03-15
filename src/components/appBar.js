import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { useState , useRef } from 'react';
import {Data} from "./../Data"

export default function AppBar(){
    // export default list
    let titleRef = useRef()
    let descriptionRef = useRef()
    let urlRef = useRef()
    let ratingRef = useRef()
    const [list, setList] = useState(Data);
    const addMovie = () =>{
      setList([...list,{name:`${titleRef.current.value}`,description:`${descriptionRef.current.value}`,rating:`${ratingRef.current.value}`,imgUrl:`${urlRef.current.value}`}])
      console.log(list);
    }
    return(
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
            <TextField style={{marginTop:"auto",marginBottom:"auto"}} label="Movie name" variant="standard" color="success" focused />
           <TextField style={{marginTop:"auto",marginBottom:"auto"}} label="Rating" variant="standard" color="success" focused />
            <button  style={{border:"0",backgroundColor:"white"}}><MinimizeIcon sx={{ fontSize: 30 }}  style={{marginTop:"auto",marginBottom:"auto"}}/></button>
           </div>
        </div>
    )
}