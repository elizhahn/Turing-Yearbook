import React from 'react';
import './Person.css';

function Person({id, photo, name, quote, superlatative}) {
  return (
    <article className="card" id={id}>
      <img src={photo} alt= {"picture of" + name}/>
      <p>{name}</p>
      <p>{quote}</p>
      <p>{superlatative}</p>
    </article>
  )
}

export default Person;
