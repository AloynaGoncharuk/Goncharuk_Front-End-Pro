
document.getElementById('submit').addEventListener('click', () => {
    document.querySelector(".list").style.display = "block";
    document.getElementById("form").style.display = "none";
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let birth = document.getElementById('birth').value;
    let selectElement = document.getElementById('city').value;
    let textarea = document.getElementById('adress').value;

    let gender = document.getElementsByName('gender');
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            document.getElementById('showGender').innerHTML = gender[i].value;
        }
    }

    let checkboxes = document.getElementsByName('lang');
    let result = "";
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value + ' ,' + ' ';
            document.getElementById('showLanguage').innerHTML = result;
        }
    }
    document.getElementById('showName').innerHTML = name;
    document.getElementById('showSurname').innerHTML = surname;
    document.getElementById('showBirth').innerHTML = birth;
    document.getElementById('showCity').innerHTML = selectElement;
    document.getElementById('showAdress').innerHTML = textarea;

});



