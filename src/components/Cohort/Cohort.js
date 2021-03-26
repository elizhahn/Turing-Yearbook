import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort ({ people, deleteStudent }) {
  const cohortList = people.map(person => {
    return <Person 
              key={person.id}
              id={person.id}
              photo={person.photo}
              name={person.name}
              quote={person.quote}
              superlative={person.superlative}
              deleteStudent={deleteStudent}
           />

  })
  return (
    <section className="card-container">
      {cohortList}
    </section>
  )
}

export default Cohort;
