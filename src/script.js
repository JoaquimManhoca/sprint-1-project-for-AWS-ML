const input_data = document.querySelector('#input_user_data');
const submit_data = document.querySelector('#submit_user_data');

submit_data.addEventListener('click', pin_verification)

function pin_verification() {
    const data = input_data.value.length;
    if ( data > 15) {
        console.log('PIN não verificado');
        console.log(`o seu PIN contem ${data} números, deve ser muito Menor`);
    }
    else if ( data > 8) {
        console.log('PIN não verificado');
        console.log(`o seu PIN contem ${data} números, deve ser Menor`);
    }
    else if (data >= 4) {
        console.log('PARABÉNS');
        console.log('PIN verificado com sucesso');
    }
    else {
        console.log('PIN não verificado');
        console.log(`o seu pIN contem ${data} números, deve ser Maior no minimo 4 números`);
    }
}
