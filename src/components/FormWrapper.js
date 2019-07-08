import React from 'react';
import FormField from './FormField';


class FormInput extends React.Component {

  render() {
    if (this.props.fieldDetail) {
      return (
        <React.Fragment>
          <label className="formLabel" id={"label" + this.props.fieldDetail.name} for={this.props.fieldDetail.name} >{this.props.fieldDetail.title} </label>
          <input id={this.props.fieldDetail.name}
            name={this.props.fieldDetail.name} type="text" className={this.props.fieldDetail.class}
            value={this.props.fieldDetail.value} onChange={this.props.fieldDetail.handleChange} />
        </React.Fragment>
      );
    }
  }
};
class FormText extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label className="formLabel" id={"label" + this.props.fieldDetail.name} for={this.props.fieldDetail.name} >{this.props.fieldDetail.title} </label>
        <textarea id={this.props.fieldDetail.name}
          name={this.props.fieldDetail.name} type="text" className={this.props.fieldDetail.class}
          value={this.props.fieldDetail.value} onChange={this.props.fieldDetail.handleChange} >{this.props.fieldDetail.value}</textarea>
      </React.Fragment>);

  }
};
class FormButton extends React.Component {
  render() {
    return (<React.Fragment>
      <input type="submit" name={this.props.fieldDetail.name}  className={this.props.fieldDetail.class}
          value={this.props.fieldDetail.value} onClick={this.props.fieldDetail.handleChange} />
    </React.Fragment>);

  }
};

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email:'',
      msg:''
    }
  }
  handleChange = (e) => {
    this.setState({ fullname: e.target.value });
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }
  handleMsgChange = (e) => {
    this.setState({ msg: e.target.value });
  }
  handleSubmit = () => {
    if(this.state.fullname != '' && this.state.email != '' && this.state.msg != '' ){
      let formObj = {name:this.state.fullname,email:this.state.email,msg:this.state.msg}
      this.props.submitForm(formObj);
      //this.setState({ fullname: e.target.value });
    } else {
      alert("fill the form field");
    }
   
  }
  render() {
    return (
      <div className="form" action="#">
        <FormField formTitle={this.props.formTitle} />

        <div className="form-section">
          <FormInput fieldDetail={{ title: "Full Name", name: "fullname", value: this.state.fullname, handleChange: this.handleChange, class: '' }} />
        </div>

        <div className="form-section">
          <FormInput fieldDetail={{ title: "Email", name: "email", value: this.state.email, handleChange: this.handleEmailChange, class: '' }} />
        </div>

        <div className="form-section">
          <FormText fieldDetail={{ title: "Message", name: "message", value: this.state.msg, handleChange: this.handleMsgChange, class: '' }} />
        </div>

        <div className="form-section">
          <FormButton fieldDetail={{ title: "Submit", name: "submit", value: this.state.submit, handleChange: this.handleSubmit, class: '' }} />
        </div>


      </div>
    );
  }
}

export default FormWrapper;
