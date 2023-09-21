const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

btn2.addEventListener('click', (event) => {
    const btn11 = document.querySelector('.btn1')
    console.log(btn11)
    btn11.classList.add('dropdown-menu')
    for (var i = 0; i < btn11.classList.length; i++) {
        if (btn11.classList[i] === 'dropdown-menu') {
            btn11.classList.remove('dropdown-menu')
        }
    }
})