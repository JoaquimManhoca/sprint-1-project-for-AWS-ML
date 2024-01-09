const buttons = document.querySelector('.buttons');

listButtons =[
    {
        name : 1,
        id : 1
    },
    {
        name : 2,
        id : 2
    },
    {
        name : 3,
        id : 3
    },
    {
        name : 4,
        id : 4
    },
    {
        name : 5,
        id : 5
    },
    {
        name : 6,
        id : 6
    },
    {
        name : 7,
        id : 7
    },
    {
        name : 8,
        id : 8
    },
    {
        name : 9,
        id : 9
    },
    {
        name : 'Clean',
        id : 'clean'
    },
    {
        name : 0,
        id : 0
    },
    {
        name : 'Check',
        id : 'Check'
    }
]


    listButtons.forEach((value)=>{
        button = document.createElement('button');
        button.innerHTML = value.name;
        button.setAttribute('id', value.id);
        buttons.append(button);
        console.log(button);
    })