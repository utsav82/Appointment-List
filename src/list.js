import React from 'react';

const List = ({ appointments }) => {
  return (
    <>
      {appointments.map((person) => {
        const { id, name, time} = person;
        return (
          <article key={id} className='person'>

            <div>
              <h4>{name}</h4>
              <p>{time}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;