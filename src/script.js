const input_data = document.querySelector('#input_user_data');
const submit_data = document.querySelector('#submit_user_data');

submit_data.addEventListener('click', ()=>{
    console.log(input_data.value);
})
