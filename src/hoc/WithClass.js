import React,{Component} from 'react';

const withClass = (WrappedComponent, className)=>{
  return class extends Component{
    render(){
      return (<div className={className}>
        <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
      </div>)
    }
  }
}

export default withClass;
