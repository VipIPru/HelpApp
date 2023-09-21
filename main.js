const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

btn2.addEventListener('click', (event) => {
    const btn11 = document.querySelector('.btn1')
    let num = 0
    for (var i = 0; i < btn11.classList.length; i++) {
        if (btn11.classList[i] === 'dropdown-menu') {
            num = 1
        }
    }
    console.log(num)
    if (num === 1) {
        btn11.classList.remove('dropdown-menu')
    }
    if (num === 0) {
        btn11.classList.add('dropdown-menu')
    }
})