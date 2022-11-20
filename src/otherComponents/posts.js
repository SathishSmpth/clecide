import { useState, useRef } from "react";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

const Posts = () => {

    const handleSubmit = () => {
        if (validator.current.allValid()) {
            alert('You submitted the form and stuff!');
            postData();
        } else {
            validator.current.showMessages();
            ForceUpdate();
        }
    }

    const ForceUpdate = () => {
        let [Value, setState] = useState(true);
        return () => setState(!Value);
    }

    const validator = useRef(new SimpleReactValidator())

    const [UserDetails, setUserDetails] = useState(
        {
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
        });

    async function postData() {
        await axios
            .post('http://localhost:4000/post', UserDetails)
            .then(() => console.log(UserDetails, "success"))
            .catch(err => {
                console.error(err);
            });
    }

    const getUserData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserDetails({
            ...UserDetails,
            [name]: value
        });
    }

    return (
        <div className="container-fluid p-3">
            <h1 className="text-center">Forms</h1>
            <div className="row g-3 form">
                <div className="row g-3 ">
                    <label className="form-label">Name</label>
                    <div className="col-md-6">
                        <input
                            onChange={getUserData}
                            name="FirstName"
                            value={UserDetails.FirstName}
                            type="text" className="form-control"
                            placeholder="First Name"
                        />
                        {validator.current.message('First name', UserDetails.FirstName, 'required|alpha|min:3')}
                    </div>
                    <div className="col-md-6">
                        <input
                            name="LastName"
                            onChange={getUserData}
                            value={UserDetails.LastName}
                            type="text"
                            className="form-control"
                            placeholder='Last Name'
                        />
                        {validator.current.message('last name', UserDetails.LastName, 'required|alpha|min:3')}

                    </div>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Date Of Birth</label>
                    <input
                        onChange={getUserData}
                        name="DateOfBirth"
                        value={UserDetails.DateOfBirth}
                        type="date"
                        className="form-control"
                    />
                    {validator.current.message('Date of birth', UserDetails.DateOfBirth, 'required')}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Gender</label>
                    <input
                        type="text"
                        onChange={getUserData}
                        name="Gender"
                        value={UserDetails.Gender}
                        className="form-control"
                        placeholder='Gender'
                    />
                    {validator.current.message('gender', UserDetails.Gender, 'required|alpha|min:4')}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                        onChange={getUserData}
                        name="Email"
                        value={UserDetails.Email}
                        type="email"
                        className="form-control"
                        placeholder='XYZ@example.com'
                    />
                    {validator.current.message('Email', UserDetails.Email, 'required|email')}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input
                        onChange={getUserData}
                        name="Password"
                        value={UserDetails.Password}
                        type="password"
                        className="form-control"
                        placeholder='Password'
                    />
                    {validator.current.message('title', UserDetails.Password, 'required|regex')}
                </div>
                <div className="col-12">
                    <label className="form-label">Address Line 1</label>
                    <input
                        onChange={getUserData}
                        name="Address"
                        value={UserDetails.AddressLine1}
                        type="text"
                        className="form-control"
                        placeholder="1234 Main St"
                    />
                    {validator.current.message('Address Line 1', UserDetails.Address, 'required|alpha_num_space')}
                </div>
                <div className="col-12">
                    <label className="form-label">Address Line 2</label>
                    <input
                        onChange={getUserData}
                        name="Address"
                        value={UserDetails.AddressLine2} type="text"
                        className="form-control"
                        placeholder="Apartment, studio, or floor" />
                    {validator.current.message('Address Line 2', UserDetails.Address, 'required|alpha_space')}
                </div>
                <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                        onChange={getUserData}
                        name="City"
                        value={UserDetails.City}
                        type="text"
                        className="form-control"
                    />
                    {validator.current.message('city', UserDetails.City, 'required|alpha')}
                </div>
                <div className="col-md-4">
                    <label className="form-label">State</label>
                    <select
                        onChange={getUserData}
                        name="State"
                        value={UserDetails.State}
                        className="form-select"
                    >
                        <option defaultValue>Select State</option>
                        <option>Tamilnadu</option>
                        <option>Andrapradesh</option>
                        <option>...</option>
                        <option>...</option>
                    </select>
                    {validator.current.message('State', UserDetails.State, 'required|alpha')}
                </div>
                <div className="col-md-2">
                    <label className="form-label">Pin</label>
                    <input
                        onChange={getUserData}
                        name="Pin"
                        value={UserDetails.Pin}
                        type="number"
                        className="form-control"
                    />
                    {validator.current.message('Pin', UserDetails.Pin, 'required|numeric')}
                </div>
                <div className="col-12">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Posts;