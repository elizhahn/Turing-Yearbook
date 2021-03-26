import React from 'react';
import { IoClose } from 'react-icons/io5'
// import { ReactComponent  as CloseIcon } from "../../public/close-outline (1).svg"
import './Person.css';

function Person({id, photo, name, quote, superlative, deleteStudent}) {
  
  return (
    <article className="card" id={id}>
     
        <IoClose onClick={deleteStudent}/>
  
      <img className="card-photo" src={photo} alt= {"picture of " + name}/>
      <p className="card-name">{name}</p>
      <p className="card-quote">"{quote}"</p>
      <p className="card-superlative">{superlative}</p>
    </article>
  )
}

export default Person;
