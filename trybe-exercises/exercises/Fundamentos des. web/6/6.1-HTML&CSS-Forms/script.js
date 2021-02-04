function disableForm(event) {
    event.preventDefault();
}

function addHandler() {
    document.getElementById("main-form").addEventListener("click", preventDef);
}

function stateOptions() {
    const state = ["Acre (AC)", "Alagoas (AL)", "Amapá (AP)", "Amazonas (AM)", "Bahia (BA)", "Ceará (CE)", "Distrito Federal (DF)", "Espírito Santo (ES)", "Goiás (GO)", "Maranhão (MA)", "Mato Grosso (MT)", "Mato Grosso do Sul (MS)", "Minas Gerais (MG)", "Pará (PA)", "Paraíba (PB)", "Paraná (PR)", "Pernambuco (PE)", "Piauí (PI)", "Rio de Janeiro (RJ)", "Rio Grande do Norte (RN)", "Rio Grande do Sul (RS)", "'Rondônia (RO)'", "Roraima (RR)", "Santa Catarina (SC)", "São Paulo (SP)", "Sergipe (SE)", "Tocantins (TO)"];

    const stateTag = document.querySelector('#state');

    for(let index = 0; index < state.length; index += 1){
        let newOpt = document.createElement('option');
        newOpt.text = state[index];
        newOpt.value = state[index];
        stateTag.add(newOpt)
    }
}

function buttonOptions() {
    const button = document.getElementById('submit');
    button.addEventListener('click', disableForm);
}

stateOptions();
buttonOptions();