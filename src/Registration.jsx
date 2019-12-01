import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';

let fieldValues = {
  firstName: null,
  lastName: null,
  age: null,
  sex: null
}

class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1
    }
  }

  saveValues = data => {
    fieldValues = Object.assign({}, fieldValues, data)
  }

  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1
    })
  }

  render() {
    switch (this.state.step) {
      case 1: return < Page1 fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues}
      />
      case 2: return < Page2 fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues}
      />
      case 3: return <div>
          <p>First name: {fieldValues.firstName}</p>
          <p>Last name: {fieldValues.lastName}</p>
          <p>Age: {fieldValues.age}</p>
          <p>Sex: {fieldValues.sex}</p>
        </div>
    }
  }
};

export default Registration;