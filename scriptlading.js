 const toggleButton = document.getElementById('toggleDarkMode');

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.textContent = 'Modo Claro';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.textContent = 'Modo Escuro';
        }
    });