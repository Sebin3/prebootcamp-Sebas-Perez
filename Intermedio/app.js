const input = document.getElementById("name");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre = input.value;
  Swal.fire('Hola, ' + nombre + '!');
});
