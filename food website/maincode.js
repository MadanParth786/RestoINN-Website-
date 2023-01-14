// Sign Up Form Logic
const signupForm = document.getElementById("signupform");
const pattern = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
if (signupForm) {
    signupForm.addEventListener("submit", signUp);



    function signUp(event) {
        // Get user input 
        event.preventDefault();
        const data = new FormData(event.target);
        const name = data.get("nam");
        const email = data.get("email");
        // console.log(email);

        const password = data.get("password");
        //console.log(password);


        const confirmPassword = data.get("confirmPassword");
        //console.log(confirmPassword);

        const phoneNumber = data.get("phone");



        // Logic to check whether password and required password are same or not.

        if (emailValidate(email)) {
            alert(`Email is incorrect`);
        } else {

            if (!validatePassword(password)) {
                alert(`Password donot meet required Crieria`);
            } else {
                if (password != confirmPassword) {
                    alert(`Passwords donot match`);
                } else {
                    if (!validPhone(phoneNumber)) {
                        alert('phone number should be of length 10');
                    } else {
                        if (alreadyLog(email)) {
                            alert(`${email} Already Sign up`);
                        } else {

                            // Validate user input
                            if (name === '' || email === '' || password === '' || confirmPassword === '' || phoneNumber === '') {
                                alert('Please Enter All Required Details');
                            } else {
                                // Create new user
                                const newUser = {
                                    Name: name,
                                    emailId: email,
                                    passWord: password,
                                    confirmPassword: confirmPassword,
                                    phoneNumber: phoneNumber
                                };

                                // Store user in database
                                const users = JSON.parse(localStorage.getItem('users')) || [];
                                users.push(newUser);
                                localStorage.setItem('users', JSON.stringify(users));
                                localStorage.setItem('islogin', true);

                                alert(`${email} was successfully signed up!`);
                            }

                        }

                    }
                }
            }
        }
    }
}









// Login Form Logic:

const loginForm = document.getElementById("loginform");

if (loginForm) {
    loginForm.addEventListener("submit", login);

    function login(event) {

        event.preventDefault();
        const ldata = new FormData(event.target);
        const lemail = ldata.get("lemail");

        //console.log(lemail);
        const lpassword = ldata.get("lpassword");
        //console.log(lpassword);



        // Validate user input
        if (lemail === '' || lpassword === '') {
            alert('Please enter your username and password.');
        } else {
            // Find user in database
            const users = JSON.parse(localStorage.getItem('users'));

            var isFound = false;
            users.find(function(user) {
                if (user.emailId == lemail && user.passWord == lpassword) {
                    isFound = true;
                    return true;
                }
            })

            if (isFound) {
                alert(`Welcome, ${ lemail }!`);
                window.localStorage.setItem("islogin", true);
                window.location.href = "restoinn.html";


            } else {
                alert(`Username or password is incorrect.`);
            }
        }
    }
}





// Logic for Validations and Checks: 

function emailValidate(email) {
    return (pattern.test(email));
}

function validatePassword(password) {
    // If the password length is less than 8, return false 
    if (password.length < 8) {
        return false;
    }

    // Set up a counter to keep track of the number of characters that are valid 
    let validCharacters = 0;

    // Create a list of all the valid characters 
    const validChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // Loop through all of the characters in the password 
    for (let i = 0; i < password.length; i++) {
        // If the character is in the list of valid characters, increment the validCharacters counter 
        if (validChars.includes(password[i])) {
            validCharacters++;
        }
    }

    // If the validCharacters counter is equal to the password length, return true 
    if (validCharacters === password.length) {
        return true;
    }

    // Otherwise, return false
    return false;
}

function validPhone(phoneNumber) {
    if (phoneNumber.length == 10) {
        return true;
    } else {
        return false;
    }
}

function alreadyLog(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.length > 0) {
        if (users.emailId == email) {
            return true;
        } else {
            return false;
        }
    }
}



// Log out Functionality Redirect to login Page:
const logoutForm = document.getElementById("logoutform");

if (logoutForm) {
    logoutForm.addEventListener("submit", logout);

    function logout(event) {
        console.log("Hello");
        // Get user input 
        event.preventDefault();
        window.localStorage.removeItem("islogin");
        window.location.href = "index.html";

    }
}



// https: //parthposist.netlify.app/