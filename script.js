function generate() {
    const length = 10;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./_="
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('password').value = password;
}

function copy() {
    const passwordInput = document.getElementById("password");
    passwordInput.select()
    document.execCommand("copy")
    alert("Text to clipboard");

}