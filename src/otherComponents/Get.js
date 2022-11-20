import axios from "axios";
import { useState } from "react";


const Get = () => {
    const [userData, setUserData] = useState("");
    async function get() {
        await axios
            .get('http://localhost:4000/get/')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(err => {
                console.error(err);
            });
    }
    return (
        <div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit" onSubmit={()=>get()}>Search</button>
            </form>
            {
                userData &&
                <div className='table-responsive mt-5'>
                    <table className="table table-hover table-success table-striped">
                        <tbody>
                            <tr>
                                <td>S.No</td>
                                <td>First name</td>
                                <td>Second Name</td>
                                <td>Date of Birth</td>
                                <td>Gender</td>
                                <td>Email</td>
                                <td>Password</td>
                                <td>Address Line 1</td>
                                <td>Address Line 2</td>
                                <td>City</td>
                                <td>State</td>
                                <td>Pin</td>
                            </tr>
                            {userData.map((person, i) =>
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{person.FirstName}</td>
                                    <td>{person.DateOfBirth}</td>
                                    <td>{person.LastName}</td>
                                    <td>{person.Gender}</td>
                                    <td>{person.Email}</td>
                                    <td>{person.Password}</td>
                                    <td>{person.AddressLine1}</td>
                                    <td>{person.AddressLine2}</td>
                                    <td>{person.City}</td>
                                    <td>{person.State}</td>
                                    <td>{person.Pin}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Get;