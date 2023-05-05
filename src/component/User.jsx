import React from 'react'
import { useSearchParams } from 'react-router-dom';

const User = () => {
    const [data] = useSearchParams();

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e)
        console.log(e.target[0].value)
        
        localStorage.setItem('movieName', e.target[0].value)
        localStorage.setItem('firstName', e.target[1].value)
        localStorage.setItem('lastName', e.target[2].value)
        localStorage.setItem('email', e.target[3].value)
        localStorage.setItem('phoneNumber', e.target[4].value)
        

    }
    return (
        <div className="conatiner-sm">
            <form className="needs-validation" noValidate="" onSubmit={handleSubmit} >
                <div className="mx-auto p-2" style={{ width: "80%" }}>
                    <div className="row g-3">
                        <div className="col-12">
                            <label htmlFor="text" className="form-label">Movie Name</label>
                            <input type="text" value={data.get('data')} className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="phone" className="form-label">Phone no. </label>
                            <input type="phone" className="form-control" id="email" placeholder="10-digit Mobile no." />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
                        <button className="w-25 my-2 mx-auto btn btn-primary btn" type="submit">Continue to checkout</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default User
