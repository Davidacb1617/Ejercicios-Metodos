'use strict'
//1. Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el vector

let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
let nombre = prompt("Escriba su nombre");

if(students.includes(nombre)){
    alert("Si se encuentra")
}else{
    alert("No se encuentra")
}