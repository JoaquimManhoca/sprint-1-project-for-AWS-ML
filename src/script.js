const input_data = document.querySelector('#input_user_data');
const submit_data = document.querySelector('#submit_user_data');

submit_data.addEventListener('click', pin_verification);

function pin_verification() {
    const data = input_data.value.length;
    if ( data > 15) {
        alert(`
        PIN não verificado
        o seu PIN contem ${data} número, deve ser muito Menor`)
    }
    else if ( data > 8) {
        alert(`
        PIN não verificado
        o seu PIN contem ${data} número, deve ser Menor`)
    }
    else if (data >= 4) {
        alert(`
        PARABÉNS
        PIN verificado com sucesso`)
    }
    else {
        alert(`
        PIN não verificado
        o seu pIN contem ${data} número,
        deve ser Maior no minimo 4 número`)
    }
}
