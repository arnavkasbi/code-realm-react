import React from 'react';
import FormWrapper from './components/FormWrapper';
import FormList from './components/FormList';
import './App.css';

class App extends React.Component {  
  constructor(props) {
    super(props)
    this.state = {
      formTitle: 'Enquiry Form',
      formlist: [{name:"test"}]
    }
  }

  submitForm = (obj) => {
   this.setState({formlist: Object.assign({},...this.state.formlist,{obj})});
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="section">
          <FormWrapper submitForm={this.submitForm} formTitle={this.state.formTitle}/>
          </div>
          <div className="section">
            List
          <FormList  listData={this.state.formlist}/>
          </div>
         
         
        </header>
      </div>
    );
  }
}

export default App;
