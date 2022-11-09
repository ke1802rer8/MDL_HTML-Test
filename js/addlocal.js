const form = document.getElementById('form');

const fremes = document.querySelectorAll('input[name="pse"]')

const toggleThem = document.querySelector('.js-button__click');
const indentSize = document.querySelector('.js-size');
const titleCompany = document.querySelector('.js-title');
const code = document.querySelector('.js__code');
const codeSecond = document.querySelector('.js__code_scnd-window');
const codeThird = document.querySelector('.js__code_thrd-window');

const homepage = document.querySelector('.wrapper > span');

toggleThem.addEventListener('click', () => {

    let freme;

    localStorage.setItem(titleCompany.name, titleCompany.value);
    localStorage.setItem("homepage", homepage.textContent);
    localStorage.setItem(indentSize.name, indentSize.value);
    localStorage.setItem(code.name, code.value);
    localStorage.setItem(codeSecond.name, codeSecond.value);
    localStorage.setItem(codeThird.name, codeThird.value);
    
    for (const f of fremes) {
        if (f.checked) {
        freme = f.value;
        }
    }

    localStorage.setItem("freme", freme);
        
    fremeChange()
    
})

//переменные для input
indentSize.value = localStorage.getItem(indentSize.name);
titleCompany.value = localStorage.getItem(titleCompany.name);
code.value = localStorage.getItem(code.name);
codeSecond.value = localStorage.getItem(codeSecond.name);
codeThird.value = localStorage.getItem(codeThird.name);

//span
forHomepage = localStorage.getItem('homepage');

if(forHomepage == null) {
    homepage.textContent = "Default";
    homepage.style.color = "#887C7C";

} else {
    homepage.textContent = forHomepage;
    homepage.style.color = "var(--title-body-color)";
}


fremeChange()


function fremeChange() {

    let freme = localStorage.getItem('freme');

    //Проверяем какой цвет сохранен в локальной памяти и сохранен ли вообще
    if(freme != '' && freme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark')
                
    }else{
        document.documentElement.removeAttribute('data-theme', 'dark')
    }
    
}

    