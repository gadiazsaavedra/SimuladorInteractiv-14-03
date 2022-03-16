//EVENTOS FOCUS Y BLUR, LUEGO UNIFICADOS CON LA FUNCIÓN focoEnCampos(), PARA OPTIMIZAR EL CÓDIGO
// inputNombre.addEventListener("focus", ()=> {
//     //console.log("has hecho foco en el campo NOMBRE")
//     inputNombre.className = "fondo-inputs"
// })
// inputNombre.addEventListener("blur", ()=> {
//     //console.warn("el campo NOMBRE ha perdido el foco")
//     inputNombre.className = ""
// })

const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los datos antes de pulsar ENVIAR"
})

document.addEventListener("submit", (event)=> {
    event.preventDefault()
    alert("Formulario enviado.")
    //PUEDO LLENAR UN OBJ LITERAL CON LOS DATOS DEL Formulario
    //ENVIAR EL OBJETO LITERAL A LA CONSOLA VIA CONSOLE.TABLE()
    //comentar el click del botón y traer aquí el ALERT()
    //VACIAR LOS INPUT TYPES
})

//MOSTRAR LA CAPTURA DEL EVENTO e, USANDO CHANGE Y GUARDANDO EL DATO EN LA VARIABLE: datosDeInput
inputNombre.addEventListener("keyup", (event)=> {
    datosDeInput = event.target.value
    console.log(datosDeInput)
})

inputNombre.addEventListener("keypress", (event)=> {
    if (event.keyCode == 13) { //event.key = "Enter"
        inputTelefono.focus()
    }
})

//EJECUTARSE AL CARGAR EL DOCUMENTO HTML
focoEnCampos()