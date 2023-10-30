document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".typing", {
        strings: ["", "Art critic", "Curator", "Translator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var userLanguage = navigator.language || navigator.userLanguage;

    var languageMappings = {
        'en-US': 'en',
        'es-ES': 'es',
        'pt-BR': 'pt-br',
    };

    function changeLanguage(lang) {
        var elements = document.querySelectorAll(".title");
        elements.forEach(element => {
            if (element.classList.contains(`title-${lang}`)) {
                element.hidden = false;
            } else {
                element.hidden = true;
            }
        });
    }

    if (userLanguage in languageMappings) {
        changeLanguage(languageMappings[userLanguage]);
    } else {
        changeLanguage('en');
    }
});
