import React, {useState} from "react";

export default function SignUp(){

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [zip, setZip] = useState('')
    const [repeatZip, setRepeatZip] = useState('')

    return(
        <form>

            <div className="row">
                <div className="col-6">
                    <label className="form-label">Name:</label>
                    <input type='text' className="form-control" placeholder='Enter Name' onChange={e => setName(e.target.value)} required/>
                </div>
                <div className="col-6">
                    <label className="form-label">Username:</label>
                    <input type='text' className="form-control" placeholder='Enter Username' onChange={e => setUserName(e.target.value)} required/>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <label className="form-label">Email:</label>
                    <input type='email' className="form-control" placeholder='Enter email' onChange={e => setEmail(e.target.value)} required/>
                </div>
                <div className="col-6">
                    <label className="form-label">Phone:</label>
                    <input type="phone" className="form-control" placeholder='Enter Phone Number' onChange={e => setPhone(e.target.value)} required/>
                </div>
            </div>

            <div className="row">
                    <label className="form-label">Zipcode:</label>
                    <input type='email' className="form-control" placeholder='Enter Zipcode' onChange={e => setZip(e.target.value)} required/>
                    <label className="form-label">Repeat Zipcode:</label>
                    <input type="text" className="form-control" placeholder='Repeat Zipcode' onChange={e => setRepeatZip(e.target.value)} required/>
            </div>

            <button type='submit'>Create Account</button>

        </form>
    )
}