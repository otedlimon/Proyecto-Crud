function iniciar() {
    let boton = document.getElementById("agregar");
    boton.addEventListener("click", nuevaTarea);
    mostrar();
    }

    function nuevaTarea() {
    let taskName = document.getElementById("taskName").value;
    let taskDes = document.getElementById("taskDes").value;
    localStorage.setItem(taskName, taskDes);
    document.getElementById('taskName').value = "";
    document.getElementById('taskDes').value = "";
    mostrar();
    }

    function mostrar() {
    let mostrarDatos = document.getElementById("mostrarDatos");
    mostrarDatos.innerHTML= '<input type="button" onclick="removerTodo()" value="Eliminar Todos">';
    for (let tarea = 0; tarea < localStorage.length; tarea++) {
    let taskName = localStorage.key(tarea);
    let taskDes = localStorage.getItem(taskName);
    mostrarDatos.innerHTML += "<div>" + taskName + " : " + taskDes + "</div>" ;
    mostrarDatos.innerHTML += '<input type="button" onclick="removerItem(\'' + taskName + '\')" value="Remover">';
        }
    }

    function removerItem(taskName) {
        if (confirm("Está seguro?")) {
        localStorage.removeItem(taskName);
        mostrar();
        }
    }
    function removerTodo() {
        if (confirm("Está seguro?")) {
        localStorage.clear();
        mostrar();
        }
    }
window.addEventListener("load", iniciar);