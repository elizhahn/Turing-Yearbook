import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

function Cohort ({ staff }) {
  const cohortList = staff.map(person => {
    return <Person 
              id={person.id}
              photo={person.photo}
              name={person.name}
              quote={person.quote}
              superlative={person.superlative}
           />

  })
  return (
    <main className="card-container">
      {cohortList}
    </main>
  )
}

export default Cohort;
