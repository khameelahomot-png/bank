function login(event) {

    event.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("loginPassword").value;


    if (email == "") {

        alert("Email is empty. Try again.");

    } else {

        if (password == "") {

            alert("Password is empty. Try again.");

        } else {

            if (email == "king@gmail.com") {

                if (password == "password") {

                    alert("Login correct!");
                    window.location.href = "dash-board.html";

                } else {

                    alert("Wrong password. Try again.");

                }

            } else {

                alert("Wrong email. Try again.");

            }

        }

    }

}



function showPassword(id, button) {

    const password = document.getElementById(id);

    if (password.type == "password") {

        password.type = "text";

        button.textContent = "🙈";

    } else {

        password.type = "password";

        button.textContent = "👁";

    }

}


function signupUser(event) {

    event.preventDefault();


    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    // CHECK NAME

    if (name == "") {

        alert("Name is empty. Try again.");

    } else {


        // CHECK EMAIL

        if (email == "") {

            alert("Email is empty. Try again.");

        } else {


            // CHECK PHONE

            if (phone == "") {

                alert("Phone number is empty. Try again.");

            } else {


                // CHECK PASSWORD

                if (password == "") {

                    alert("Password is empty. Try again.");

                } else {


                    // CHECK PASSWORD LENGTH

                    if (password.length < 6) {

                        alert(
                            "Password must be at least 6 characters. Try again."
                        );

                    } else {


                        // CHECK CONFIRM PASSWORD

                        if (password != confirmPassword) {

                            alert(
                                "Passwords do not match. Try again."
                            );

                        } else {


                            // GENERATE ACCOUNT NUMBER

                            const accountNumber =
                                Math.floor(
                                    1000000000 +
                                    Math.random() * 9000000000
                                );


                            // SAVE USER

                            localStorage.setItem(
                                "name",
                                name
                            );

                            localStorage.setItem(
                                "email",
                                email
                            );

                            localStorage.setItem(
                                "phone",
                                phone
                            );

                            localStorage.setItem(
                                "password",
                                password
                            );

                            localStorage.setItem(
                                "accountNumber",
                                accountNumber
                            );


                            // SUCCESS

                            alert(
                                "Account created successfully!\n\n" +
                                "Your account number is: " +
                                accountNumber
                            );


                            // GO TO LOGIN

                            window.location.href =
                                "login.html";

                        }

                    }

                }

            }

        }

    }

}