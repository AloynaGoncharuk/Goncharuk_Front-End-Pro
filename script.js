
const userNameId = document.getElementById('myTextField');

userNameId.addEventListener("focus", function () {
    document.getElementById("error").style.display = "inline-block";
});

userNameId.addEventListener("blur", function () {
    document.getElementById("error").style.display = "none";
})

