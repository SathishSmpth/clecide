import SimpleReactValidator from "simple-react-validator";
import React, { Component } from "react";

class FormValidator extends Component {
  constructor(){
    super()
    this.validator = new SimpleReactValidator();
  }
  submitForm(){
    if (this.validator.allValid()) {
      alert('You submitted the form and stuff!');
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  }
export default FormValidator;
