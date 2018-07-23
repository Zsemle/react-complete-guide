import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      {id: 'srygdf3fffffsd',name: 'Max',age: 28},
      {id: 'dfgmnjklmdfgff',name: 'Imre',age: 32},
      {id: 'rtsr54z754zhrt',name: 'Stephanie',age: 26},
    ],
    otherState: {
      some: 'other state'
    },
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let assignedClasses = [];
    let btnClass= '';

    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold)
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (

        <div>
          {this.state.persons.map((person,index) => {
            return <ErrorBoundary key={person.id}>
              <Person
              name={person.name}
              age={person.age}
              click={()=>this.deletePersonHandler(index)}
              changed={(event)=>this.nameChangedHandler(event,person.id)}/>
            </ErrorBoundary>
          })}
        </div>
      )
      btnClass = classes.Red;
    }

    const rnd = Math.random();
    if (rnd > 0.7){
      throw new Error('Something went wrong');
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a react app</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass} onClick={() => this.togglePersonsHandler()}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
