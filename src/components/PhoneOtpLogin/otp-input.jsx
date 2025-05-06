import React, { useState, useRef, useEffect } from 'react';
import './otp.css';

export const OtpInput = ({ length, onOtpSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, event) => {
    const { value } = event.target;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join('');
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    const key = event.key;

    if (key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index]) {
        // Clear current box first
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }

    if (key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index]?.focus();
  };

  return (
    <div>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onClick={() => handleClick(index)}
          className="otp-input"
          maxLength={1}
          ref={(input) => (inputRefs.current[index] = input)}
        />
      ))}
    </div>
  );
};
