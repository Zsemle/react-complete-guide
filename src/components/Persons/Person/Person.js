import React,{Component} from 'react';
import classes from './Person.css';

class Person extends Component{
  constructor(props){
    super(props);
    console.log('[Person.js] inside constructor.',props);
  }
  componentWillMount(){
    console.log('[Person.js] inside componentWillMount.')
  }
  componentDidMount(){
    console.log('[Person.js] inside componentDidMount.')
  }
  render(){
    console.log('[Person.js] inside render.')
    // return (
    //   <div className={classes.Person}>
    //     <p onClick={this.props.click}>I'm {this.props.name}, and I am  {this.props.age} years old.</p>
    //     <p>{this.props.children}</p>
    //     <p><input type="text" onChange={this.props.changed} value={this.props.name}/></p>
    //   </div>
    // )
    return [<p key="1" onClick={this.props.click}>I'm {this.props.name}, and I am  {this.props.age} years old.</p>,
        <p key="2">{this.props.children}</p>,
        <p key="3"><input type="text" onChange={this.props.changed} value={this.props.name}/></p>]
  }
}

export default Person;
