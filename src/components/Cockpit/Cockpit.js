import React from 'react';
import classes from './Cockpit.css';
import Auxi from '../../hoc/Auxi';

const Cockpit = (props) => {
  let assignedClasses = [];
  let btnClass= classes.Button;

  if(props.showPersons){
    btnClass = [classes.Button,classes.Red].join(' ');
  }

  if(props.persons.length<=2){
    assignedClasses.push(classes.red)
  }
  if(props.persons.length<=1){
    assignedClasses.push(classes.bold)
  }


  return (
    <Auxi>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={() => props.clicked()}>Toggle Persons</button>
      <button onClick={props.login}>Log in</button>
    </Auxi>
  );
}

export default Cockpit;
