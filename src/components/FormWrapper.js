import React from 'react';
import FormField from './FormField';

class FormWrapper extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName : "",
      email : "",
      message : "",
    }
  }
  valueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onDataSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.formTitle}</h1>
        <form action="#" onSubmit = {(e) => {
          this.onDataSubmit(e);
        }}>
          <FormField fieldType={"text"} name={"firstName"} labelName={"First Name"} valueChange={this.valueChange} />
          <FormField fieldType={"text"} name={"email"} labelName={"Email"} valueChange={this.valueChange} />
          <FormField fieldType={"textarea"} name={"message"} labelName={"Message"} valueChange={this.valueChange} />
          <input type="submit"/>
        </form>
      </React.Fragment>
      );
  }
}

export default FormWrapper;
