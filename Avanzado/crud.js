//Crud basico con Array
let datos = [
    "Fabrizio",
    "Leoran",
    "Ronaldo",
    "Ismael"
];
function options() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    datos.forEach((nombre, index) => {
        lista.innerHTML += `
        <li>
          ${nombre}
          <button onclick="edit(${index})">Editar</button>
          <button onclick="remove(${index})">Eliminar</button>
        </li>
      `;
    });
}
function create() { 
    const newusuario = document.getElementById("nombre").value;
    if (newusuario !== "") {
        datos.push(newusuario);
        document.getElementById("nombre").value = "";
        options();
    }
}

function edit(index) {
    const newname = prompt("Editar nombre:", datos[index]);
    if (newname !== null) {
        datos[index] = newname;
        options();
    }
}

function remove(index) {
    datos.splice(index, 1);
    options();
}

options();