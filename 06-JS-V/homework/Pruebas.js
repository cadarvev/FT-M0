;function usuario(usuario,nombre,email,password){
    this.usuario = usuario;
    this.nombre = nombre;
    this.email = email;
    this.password = password
    this.saludar = function(){
      return `Hola soy ${this.nombre}`
    }
}
var usuario1 = new usuario("andres991","Andres","andres@gmail.com","1234")
var usuario2 = new usuario("res991","Alejandro","andres@gmail.com","1234")
var usuario3 = new usuario("andres991","Andres","andres@gmail.com","1234")
var usuario4 = new usuario("andres991","Andres","andres@gmail.com","1234")
var usuario5 = new usuario("andres991","Andres","andres@gmail.com","1234")
    console.log (usuario2.saludar())
    console.log(usuario1.saludar())
    console.log(usuario1)
  
  
  var camilo = {
    nombre : "Camilo",
    apellido : "Adarve",
    edad : "23",
    saludar3 : function () {
      return "Hola soy Camilo";
    },
  }
  var prueba1 = "nombre";
  console.log(camilo.nombre);
  console.log(camilo["nombre"]);
  console.log(camilo[prueba1])


  var persona = {
    nombre: "jimmy",
    saludar: function(){
      return ("Hola, " + this.nombre);
    }
  }
  console.log (persona.saludar())
  console.log (persona.saludar())

  class Persona {
    constructor(nombre, apellido, edad, dir) {
      // Crea el constructor:
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.dir = dir
    }
    detalle(){
      return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Domicilio: ${this.dir}`
  }}

  var persona1 = new Persona ("Juan", "Perez", 22, "Saavedra 123")
  console.log(persona1.detalle())