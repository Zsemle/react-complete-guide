import React from 'react';
import classes from './Person.css';

const person = (props) => {
  const style = {

    }

  return (
    <div className={classes.Person} style={style}>
      <p onClick={props.click}>I'm {props.name}, and I am  {props.age} years old.</p>
      <p>{props.children}</p>
      <p><input type="text" onChange={props.changed} value={props.name}/></p>
    </div>
  )
};

export default person;
