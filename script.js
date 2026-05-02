const getTemplateBtn = document.getElementById('btn');
const contactBtn = document.getElementById('contact');
const projectBtn = document.getElementById('project');
const aboutBtn = document.getElementById('about');
const newsBtn = document.getElementById('news');
const teamBtn = document.getElementById('team');

getTemplateBtn.addEventListener('click', () => {
    const userPrompt = +prompt("Введите число от 1 до 10:")

    if (userPrompt === 4) {
        alert("Вы угадали число, открывается сайт..")
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    } else if (userPrompt > 10 || userPrompt < 1 || isNaN(userPrompt)) {
        alert("Пожалуйста, введите число от 1 до 10")
    } else {
        alert("Вы не угадали число")
    }
});

contactBtn.addEventListener('click', () => {
    const contactPrompt = +prompt(`Выберите способ свяхзи: ${"\n"} 1. Whatsapp ${"\n"} 2. Telegram `)

    if (contactPrompt === 1) {
        alert("Вы выбрали Whatsapp, открывается чат..")
        window.open("https://whatsapp.com/")
    } else if (contactPrompt === 2) { 
        alert("Вы выбрали Telegram, открывается чат..")
        window.open("https://telegram.org/")
    } else {
        alert("Пожалуйста, выберите 1 или 2")
    }
})

projectBtn.addEventListener('click', () => {
    alert("Вы выбрали раздел 'Project', открывается страница..")
    window.open("https://github.com/bl1een/wishbone-test-public")
})


aboutBtn.addEventListener('click', () => {
    alert("Ничего пока что нет.")
    
})

newsBtn.addEventListener('click', () => {
    alert("Ничего пока что нет.")
})

teamBtn.addEventListener('click', () => {
    alert("Ничего пока что нет.")
})