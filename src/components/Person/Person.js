import React from 'react';
import './Person.css';

function Person({id, photo, name, quote, superlative}) {
  return (
    <article className="card" id={id}>
      <img className="card-photo" src={photo} alt= {"picture of" + name}/>
      <p className="card-name">{name}</p>
      <p className="card-quote">{quote}</p>
      <p className="card-superlative">{superlative}</p>
    </article>
  )
}

export default Person;
