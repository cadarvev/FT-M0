function usuario(usuario,nombre,email,password){
    this.usuario = usuario,
    this.nombre = nombre,
    this.email = email,
    this.password = password
    this.saludar = function() {
    return `Hola mi nombre es ${this.nombre}` ;
    }
}
var usuario1 = new usuario("andres991,Andres,andres@gmail.com,1234")
  console.log()