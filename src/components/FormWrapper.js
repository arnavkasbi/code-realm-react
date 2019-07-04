import React from 'react';
import FormField from './FormField';

class FormWrapper extends React.Component {
  render() {
    return (
      <form action="#">
        <FormField formTitle={this.props.formTitle}/>
        <div style={{width: '100%'}}>
          <label style={{width: '50%', padding: '0 20px 0 0'}} class="desc" id="title1" for="Field1">Full Name</label>
          <input style={{width: '50%'}} id="Field1" name="Field1" type="text" class="field text fn" value="" size="8" tabindex="1" />
        </div>
        <div style={{width: '100%'}}>
          <label style={{width: '50%', padding: '0 20px 0 0'}} class="desc" id="title3" for="Field3">
            Email
          </label>
          <input style={{width: '50%'}} id="Field3" name="Field3" type="email" spellcheck="false" value="" maxlength="255" tabindex="3"/> 
        </div>
        <div style={{width: '100%', margin: '20px 0 0 0'}}>
          <label style={{width: '50%', padding: '0 20px 0 0'}} class="desc" id="title4" for="Field4">
            Message
          </label>
            <textarea style={{width: '50%'}} id="Field4" name="Field4" spellcheck="true" rows="10" cols="50" tabindex="4"></textarea>
        </div>
        <div>
          <div>
            <div style={{width: '100%'}}>
              <input id="Field5_0" name="Field5" type="submit" value="Submit" tabindex="5" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default FormWrapper;
