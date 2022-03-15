import Movie from "./movie";
import React, { useState } from "react";

export default function MovieList({list}){

   
    return(
        <div style={{margin:"15px",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridColumnGap:"10px"}}>
            
          {
              list.map((movie)=>(<Movie movie={movie}/>))
          }
        </div>
    )
}