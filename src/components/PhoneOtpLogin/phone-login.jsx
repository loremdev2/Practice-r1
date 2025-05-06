import React, { useState } from 'react'
import { OtpInput } from './otp-input.jsx'

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // phone validations
        const regex = /[^0-9]/g;
        if (phoneNumber.length !== 10 || regex.test(phoneNumber)) {
            alert('Please enter a valid phone number')
            return;
        }

        // call the API to send OTP
        // show OTP input field
        setShowOtpInput(true);
    }

    const onOtpSubmit = (otp) => {
        // call the API to verify OTP
        // handle success or failure
        console.log('OTP submitted:', otp);

    }

    return (
        <div>
            <h4>Login with OTP</h4>
            {!showOtpInput ? <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                />
                <button type='submit'>Send OTP</button>
            </form> :
                <div>
                    <p>OTP sent to {phoneNumber}</p>
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                </div>

            }

        </div>
    )
}

export default PhoneOtpForm;
