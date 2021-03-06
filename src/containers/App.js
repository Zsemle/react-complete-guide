import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxi from '../hoc/Auxi';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor.',props);
    this.state = {
      persons: [
        {id: 'srygdf3fffffsd',name: 'Max',age: 28},
        {id: 'dfgmnjklmdfgff',name: 'Imre',age: 32},
        {id: 'rtsr54z754zhrt',name: 'Stephanie',age: 26},
      ],
      otherState: {
        some: 'other state'
      },
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }

  }
  componentWillMount(){
    console.log('[App.js] inside componentWillMount.')
  }
  componentDidMount(){
    console.log('[App.js] inside componentDidMount.')
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate',nextProps,nextState)
  //   return nextState.persons !== this.state.persons ||
  //         nextState.showPersons !== this.state.showPersons;
  // }
  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate',nextProps,nextState)
  }
  static getDerivedStateFromProps(nextProps,prevState){
    console.log('[UPDATE App.js] inside getDerivedStateFromProps',
    nextProps,
    prevState)
    // not updating anything right now, so just returning the previous state
    return prevState;
  }
  getSnapshotBeforeUpdate(){
    //do something before updating the DOM
    console.log('[UPDATE App.js] inside getSnapshotBeforeUpdate')
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate')
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
    this.setState((prevState,props)=>{
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] inside render.')
    let persons = null;

    if (this.state.showPersons){
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
      )
    }

    return (
        <Auxi>
          <button onClick={()=>this.setState({showPersons: true})}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}/>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
        </Auxi>
    );
  }
}

export default withClass(App,classes.App);
