

function mostrarDatos(){
    fetch('datos.json')
.then(res => res.json())
.then(function(usuario) {
   
    let nombre = usuario.nombre;
    let apellido = usuario.apellido;
    let edad = usuario.edad;
    let saldo = usuario.saldo;
    let direccion = usuario.direccion;

    let txtNombre = document.getElementById('nombre');
    let txtApellido = document.getElementById('apellido');
    let txtEdad = document.getElementById('edad');
    let txtSaldo = document.getElementById('saldo');
    let txtDireccion = document.getElementById('direccion')

    txtNombre.textContent = "Nombre: " + nombre;
    txtApellido.textContent = "Apellido: " + apellido;
    txtEdad.textContent = "Edad: " + edad;
    txtSaldo.textContent = "Saldo: " + saldo;
    txtDireccion.textContent = "Direccion: " + direccion.calle + " ," + direccion.ciudad;
})
.catch(function(error){
    alert(error);
})


}