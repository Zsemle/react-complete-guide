import React,{Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxi from '../../../hoc/Auxi';
import PropTypes from 'prop-types';

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
    if (this.props.position === 0){
      this.inputElement.focus();
    }
  }
  render(){
    console.log('[Person.js] inside render.')
    return (
      <Auxi>
        <p onClick={this.props.click}>I'm {this.props.name}, and I am  {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <p><input
          ref={(inp)=>{this.inputElement = inp}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/></p>
      </Auxi>
    )
    // return [<p key="1" onClick={this.props.click}>I'm {this.props.name}, and I am  {this.props.age} years old.</p>,
    //     <p key="2">{this.props.children}</p>,
    //     <p key="3"><input type="text" onChange={this.props.changed} value={this.props.name}/></p>]
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);
