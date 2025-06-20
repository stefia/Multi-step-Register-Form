const formData = {
name: '',
email: '',
topics: []
};

function handleStep1(event) {
    event.preventDefault(); // отменяем отправку формы
    goToStep(2);
}

function handleStep2(event) {
    event.preventDefault(); // отменяем отправку формы
    goToStep(3);
}

function goToStep(step) {
// Скрыть все шаги
    for (let i = 1; i <= 4; i++) {
        const stepEl = document.getElementById('step' + i);
        if (stepEl) stepEl.classList.remove('active');
    }

    // Показать нужный шаг
    const current = document.getElementById('step' + step);
    if (current) current.classList.add('active');

    // Обновить точки снизу
    for (let i = 1; i <= 3; i++) {
        const dot = document.getElementById('dot' + i);
        if (dot) dot.classList.remove('active');
    }
    if (step <= 3) {
        const dot = document.getElementById('dot' + step);
        if (dot) dot.classList.add('active');
    }

    // Шаг 3: сохраняем данные и подставляем в итог
    if (step === 3) {
        formData.name = document.getElementById('name').value;
        formData.email = document.getElementById('email').value;
        formData.topics = [];

        document.querySelectorAll('.topic:checked').forEach(cb => {
        formData.topics.push(cb.value);
        });

        document.getElementById('summaryName').textContent = formData.name;
        document.getElementById('summaryEmail').textContent = formData.email;

        const list = document.getElementById('summaryTopics');
        list.innerHTML = '';
        formData.topics.forEach(topic => {
        const li = document.createElement('li');
        li.textContent = topic;
        list.appendChild(li);
        });
    }
    const dots = document.getElementById('dots');
    if (dots) {
        if (step === 4) {
            dots.classList.add('hidden');   // скрыть
        } else {
            dots.classList.remove('hidden'); // показать
        }
    }
}
function submitForm(event) {
    event.preventDefault(); // отменяем перезагрузку
    goToStep(4); // Показать "Отправлено"
}
