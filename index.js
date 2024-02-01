function generatePassword(length) {
    const allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        const randomCharacter = allowedCharacters[randomIndex];
        password += randomCharacter;
    }
    return password;
}

function generateAndDisplayPassword() {
    const passwordLength = parseInt(document.getElementById("Num").value);
    if (!isNaN(passwordLength) && passwordLength > 0) {
        const generatedPassword = generatePassword(passwordLength);
        document.getElementById("result").innerHTML = generatedPassword;
    } else {
        alert("Please enter a valid positive integer for password length.");
    }
}

const iconElement = document.getElementById("copyIcon");

iconElement.addEventListener("click", function () {
    const resultElement = document.getElementById("result");
    navigator.clipboard.writeText(resultElement.textContent)
        .then(function () {
            alert("Password copied to clipboard!");
        })
        .catch(function (err) {
            console.error("Failed to copy:", err);
        });
});
