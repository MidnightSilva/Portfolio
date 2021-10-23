
import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form className='form'
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xnqowlwk"
        method="POST"
      >
    
        <label className='email'>Email:</label>
        <input className='input1' type="email" name="email" />
        <label className='message'>Message:</label>
        <textarea className='input2' type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className='submit-button'>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}