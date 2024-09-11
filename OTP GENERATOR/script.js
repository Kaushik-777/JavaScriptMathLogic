function generateOtp() {
    let otpLength = 4;
    let otp = "";

    for(let i = 0; i < otpLength; i++) {
        otp += Math.floor(Math.random() * 9);
    }
    console.log(otp);
}

generateOtp();

/*=============== second ===================*/
/*function generateOTP(length) {
    let OTP = "";
    let digits = '0123456789';

    for(let i = 0; i < length; i++) {
       OTP += digits[Math.floor(Math.random() * 10)];
    }

    return OTP;
}

const otpvalue = generateOTP(6);
console.log("Your OTP is: ", otpvalue);*/


/*=================== third example ==================*/
/*function generateOTP(length) {
    let OTP = "";
    let digits = prompt("Enter your mobile number: ");

    for(let i = 0; i < length; i++) {
       OTP += digits[Math.floor(Math.random() * 9)];
    }

    return OTP;
}

const otpvalue = generateOTP(4);
console.log("Your OTP is: ", otpvalue);*/
/*=================== fourth example ==================*/
function generateOTP(length) {
    let OTP = "";
    let mobileNum = prompt("Enter your mobile number: ");
    let digits = mobileNum.length;
    
    for(let i = 0; i < length; i++) {
       OTP += Math.floor(Math.random() * digits);
    }

    return OTP;
}

const otpvalue = generateOTP(4);
console.log("Your OTP is: ", otpvalue);