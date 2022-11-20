import React from 'react';
import SimpleReactValidator from "simple-react-validator";
import axios from 'axios';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      messages: {
        Email: 'That is not an email.',
      }
    }
    );
  }
  state = {
    UserData: {
      UserId: "",
      Password: "",
      FirstName: "",
      LastName: "",
      DateOfBirth: "",
      Gender: "",
      Email: "",
      Address: [],
      City: "",
      State: "",
      Pin: "",
    }
  }
  async Post(userData){
    await axios
        .post('http://localhost:4000/post', userData) 
        .then(() => console.log(userData))
        .catch(err => {
          console.error(err);
        });
  }
  handleSubmit(){
    if (this.validator.allValid()) {
      this.Post(this.state.UserData);
      alert('You submitted the form and stuff!');
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  getUserData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        ...this.state.UserData,
          [name]: value
      })
    console.log(this.state.UserData);
  }
  render() {
    return (
      <div className="container-fluid p-3">
        <h1 className="text-center">Forms</h1>
        <div className="row g-3 form">
          <div className="row g-3 ">
            <label className="form-label">Name</label>
            <div className="col-md-6">
              <input
                onChange={this.getUserData}
                name="FirstName"
                value={this.state.UserData.FirstName}
                type="text" className="form-control"
                placeholder="First Name"
              />
              {this.validator.message('First name', this.state.UserData.FirstName, 'required|alpha|min:3')}
            </div>
            <div className="col-md-6">
              <input
                name="LastName"
                onChange={this.getUserData}
                value={this.state.UserData.LastName}
                type="text"
                className="form-control"
                placeholder='Last Name'
              />
              {this.validator.message('last name', this.state.UserData.LastName, 'required|alpha|min:3')}

            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Date Of Birth</label>
            <input
              onChange={this.getUserData}
              name="DateOfBirth"
              value={this.state.UserData.DateOfBirth}
              type="date"
              className="form-control"
            />
            {this.validator.message('Date of birth', this.state.UserData.DateOfBirth, 'required')}
          </div>
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <input
              type="text"
              onChange={this.getUserData}
              name="Gender"
              value={this.state.UserData.Gender}
              className="form-control"
              placeholder='Gender'
            />
            {this.validator.message('gender', this.state.UserData.Gender, 'required|alpha|min:4')}
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              onChange={this.getUserData}
              name="Email"
              value={this.state.UserData.Email}
              type="email"
              className="form-control"
              placeholder='XYZ@example.com'
            />
            {this.validator.message('Email', this.state.UserData.Email, 'required|email')}
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              onChange={this.getUserData}
              name="Password"
              value={this.state.UserData.Password}
              type="password"
              className="form-control"
              placeholder='Password'
            />
            {this.validator.message('title', this.state.UserData.Password, 'required|regex')}
          </div>
          <div className="col-12">
            <label className="form-label">Address Line 1</label>
            <input
              onChange={this.getUserData}
              name="Address"
              value={this.state.UserData.AddressLine1}
              type="text"
              className="form-control"
              placeholder="1234 Main St"
            />
            {this.validator.message('Address Line 1', this.state.UserData.Address, 'required|alpha_num_space')}
          </div>
          <div className="col-12">
            <label className="form-label">Address Line 2</label>
            <input
              onChange={this.getUserData}
              name="Address"
              value={this.state.UserData.AddressLine2} type="text"
              className="form-control"
              placeholder="Apartment, studio, or floor" />
            {this.validator.message('Address Line 2', this.state.UserData.Address, 'required|alpha_space')}
          </div>
          <div className="col-md-6">
            <label className="form-label">City</label>
            <input
              onChange={this.getUserData}
              name="City"
              value={this.state.UserData.City}
              type="text"
              className="form-control"
            />
            {this.validator.message('city', this.state.UserData.City, 'required|alpha')}
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <select
              onChange={this.getUserData}
              name="State"
              value={this.state.UserData.State}
              className="form-select"
            >
              <option defaultValue>Select State</option>
              <option>Tamilnadu</option>
              <option>Andrapradesh</option>
              <option>...</option>
              <option>...</option>
            </select>
            {this.validator.message('State', this.state.UserData.State, 'required|alpha')}
          </div>
          <div className="col-md-2">
            <label className="form-label">Pin</label>
            <input
              onChange={this.getUserData}
              name="Pin"
              value={this.state.UserData.Pin}
              type="number"
              className="form-control"
            />
            {this.validator.message('Pin', this.state.UserData.Pin, 'required|numeric')}
          </div>
          <div className="col-12">
            <button
              type="button"
              onClick={()=>this.handleSubmit()}
              className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Post;