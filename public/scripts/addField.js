// Procurar o botão e quando clicar executar ação
document.querySelector("#add-time").addEventListener("click", cloneField)

// executar a ação
function cloneField() {
    // Pegar os campos para duplicar
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    });

    // colocar os campos duplicados
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}