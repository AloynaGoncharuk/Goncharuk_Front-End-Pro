
const table = document.getElementById("employeeList");
let row = table.insertRow(-1);

document.getElementById('submit').addEventListener('click', () => {
    document.getElementById("employeeList").style.display = "block";
    let name = row.insertCell(0);
    name.innerHTML = document.getElementById("name").value;
});

document.getElementById('submit').addEventListener('click', () => {
    document.getElementById("employeeList").style.display = "block";
    let surname = row.insertCell(1);
    surname.innerHTML = document.getElementById("surname").value;
});

document.getElementById('submit').addEventListener('click', () => {
    document.getElementById("employeeList").style.display = "block";
    let birth = row.insertCell(2);
    birth.innerHTML = document.getElementById("birth").value;
});

