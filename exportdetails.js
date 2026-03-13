document.getElementById("exporterForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let company = document.getElementById("company").value;
let country = document.getElementById("country").value;
let product = document.getElementById("product").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

let table = document.getElementById("exporterTable").getElementsByTagName("tbody")[0];

let row = table.insertRow();

row.insertCell(0).innerHTML = name;
row.insertCell(1).innerHTML = company;
row.insertCell(2).innerHTML = country;
row.insertCell(3).innerHTML = product;
row.insertCell(4).innerHTML = email;
row.insertCell(5).innerHTML = phone;

document.getElementById("exporterForm").reset();

});
