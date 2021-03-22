import React from 'react';
import './Person.css';

function Person({id, photo, name, quote, superlative}) {
  return (
    <article className="card" id={id}>
      <img className="card-photo" src={photo} alt= {"picture of" + name}/>
      <p>{name}</p>
      <p>{quote}</p>
      <p>{superlative}</p>
    </article>
  )
}

export default Person;
