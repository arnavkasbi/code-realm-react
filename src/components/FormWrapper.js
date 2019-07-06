import React from 'react';
import FormField from './FormField';
import './Form.css';
import Input from "./Input";
import Label from "./Label";
class FormWrapper extends React.Component {
  render() {
    return (
      <form action="#">
        <FormField formTitle={this.props.formTitle}/>
        <div>
          <Label title={"Full Name"} className={"full-name"} name={"fullName"}/>
          //TODO: as I did with label component similarly we can do it with input
          <Input title={}/>
          <input id="Field1" name="Field1" type="text" class="field text fn" value="" size="8" tabindex="1" />
        </div>
        <div>
          <Label title={"Email"} className={"email"} name={"email"}/>
          <input id="Field3" name="Field3" type="email" spellcheck="false" value="" maxlength="255" tabindex="3"/>
        </div>
        <div>
          <Label title={"Message"} className={"message"} name={"message"}/>
            <textarea id="Field4" name="Field4" spellcheck="true" rows="10" cols="50" tabindex="4"></textarea>
        </div>
        <div>
          <div>
            <div>
              <input id="Field5_0" name="Field5" type="submit" value="Submit" tabindex="5" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default FormWrapper;
