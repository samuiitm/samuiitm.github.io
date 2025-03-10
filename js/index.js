// Translations in english and spanish
const translations = {
    en: {
        title: 'Samuel Cañadas - Aspiring Developer',
        about: 'About',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
        aspiring_dev: 'Aspiring Developer',
        about_large_first_paragraph: `I love seeing how my code takes shape and my ideas come to life. I’m always looking to grow, discover new things, and keep that ambition in everything I do.`,
        about_large_second_paragraph: `Outside of coding, I enjoy narrative video games, going to the gym, and music inspires me, helping me stay focused on my goals.`,
        technologies: 'Technologies',
        milo_quote: `"Seek peace in those who don’t subtract"`,
        milo_name: `Milo J`,
        joel_quote: `"No matter what, you keep finding something to fight for"`,
        joel_name: `Joel Miller`,
        dream_title: `From Technology to Justice`,
        dream_text: `I have always been fascinated by security, criminology, and computer science. By combining these passions, I discovered that my dream was to be part of the Central Forensic Unit of the Scientific Police as a forensic IT specialist, blending what I love the most to help solve cases.`,
        projects_section_subtitle: `Take a look to the projects I have made along the time as a student and internship`,
        project_1_description: `An horitzontal shoot 'em up videogame where you control a spaceship tasked with destroying alien ships escaping from Area 51. This is my first game developed in Unity and programmed in C#.`,
        project_2_title: `HANGMAN`,
        project_2_description: `Hangman is a word-guessing game where players try to guess a hidden word by suggesting letters. Each incorrect guess adds a part to a hanging figure, and the game ends if the figure is fully drawn`,
        project_3_title: `FINAL PROJECT SMX`,
        project_3_description: `I designed the IT infrastructure for a fictional company, covering network setup, DHCP, DNS, web servers (WordPress, Moodle), security with Squid proxy and pfSense, and documentation.`,
        experience_section_subtitle: `A professional journey in progress: learning and evolving.`,
        first_experience_role: `IT Support Intern`,
        first_experience_company: `Rocagrossa Institute`,
        first_experience_location: `Lloret de Mar, Spain`,
        first_experience_date: `Oct 2023 - Feb 2024`,
        first_experience_task_1: `Resolved technical issues in classrooms, including both hardware and software problems.`,
        first_experience_task_2: `Provided software troubleshooting and support for Chromebooks used by students.`,
        first_experience_task_3: `Created a detailed inventory of the institute’s IT systems.`,
        first_experience_task_4: `Deployed new operating system images on desktop computers, updating outdated systems and configuring them to prevent unwanted changes using tools like Deep Freeze.`,
        first_experience_task_5: `Performed routine hardware maintenance, including cleaning components and repairing computers to avoid premature disposal.`,
        second_experience_role: `Digital Marketing Intern`,
        second_experience_company: `PAX Jovem`,
        second_experience_location: `Beja, Portugal`,
        second_experience_date: `Apr 2024 - May 2024`,
        second_experience_task_1: `Designed promotional materials such as posters, flyers, and social media posts.`,
        second_experience_task_2: `Assisted in creating digital content to enhance the visibility of the "Futebol de Rua" project across social media platforms.`,
        second_experience_task_3: `Supported the promotion of sports and cultural activities organized by the project, contributing to raising awareness about social inclusion through sports.`,
        second_experience_task_4: `I dedicated time to assist team members with a simple, in-person user guide, helping them become familiar with digital content creation tools such as Canva, ensuring they could confidently utilize these resources to enhance their productivity and creativity.`,
        contact_section_title: `LET'S MAKE IT POSSIBLE`,
        contact_section_subtitle: `I’m working toward my own dream, and I’d love to partner with others who dream big. Drop me a message on LinkedIn or email!`,
    },
    es: {
        title: 'Samuel Cañadas - Aspirante Desarrollador',
        about: 'Sobre mí',
        projects: 'Proyectos',
        experience: 'Experiencia',
        contact: 'Contacto',
        aspiring_dev: 'Aspirante Desarrollador',
        about_large_first_paragraph: `Me encanta ver cómo mi código va tomando forma y mis ideas se hacen realidad. Siempre busco crecer, descubrir cosas nuevas y mantener esa ambición en todo lo que hago.`,
        about_large_second_paragraph: `Fuera del código, disfruto de los videojuegos narrativos, voy al gimnasio, y la música me inspira, ayudándome a mantenerme enfocado en mis objetivos.`,
        technologies: 'Tecnologías',
        milo_quote: `"Debo buscar la paz en quien no reste"`,
        milo_name: `Milo J`,
        joel_quote: `"Pase lo que pase, sigues encontrando algo por lo que luchar"`,
        joel_name: `Joel Miller`,
        dream_title: `De la Tecnología a la Justicia`,
        dream_text: `Siempre me han fascinado la seguridad, la criminología y la informática. Al juntar esas pasiones, descubrí que mi sueño era formar parte de la Unidad Central de Criminalística de la Policía Científica como informático forense, combinando lo que más me gusta para ayudar a resolver casos.`,
        projects_section_subtitle: `Echa un vistazo a los proyectos que he desarrollado a lo largo del tiempo como estudiante e interno.`,
        project_1_description: `Un videojuego de disparos horizontales en el que controlas una nave espacial destinada a destruir naves alienígenas que escapan del Área 51. Este es mi primer juego desarrollado en Unity y programado en C#.`,
        project_2_title: `AHORCADO`,
        project_2_description: `El Ahorcado es un juego de adivinanza donde los jugadores deben adivinar una palabra oculta con letras. Cada fallo agrega una parte a una figura colgante, y el juego termina si la figura completa se dibuja.`,
        project_3_title: `PROYECTO FINAL SMR`,
        project_3_description: `Diseñé la infraestructura IT para una empresa ficticia, realizando la configuración de redes, DHCP, DNS, servidores web (WordPress, Moodle), seguridad con proxy Squid y pfSense, documentando detalladamente el todo.`,
        experience_section_subtitle: `Una carrera profesional en progreso: aprendiendo y evolucionando.`,
        first_experience_role: `Interno de Soporte Técnico`,
        first_experience_company: `IES Rocagrossa`,
        first_experience_location: `Lloret de Mar, España`,
        first_experience_date: `Oct 2023 - Feb 2024`,
        first_experience_task_1: `Resolví problemas técnicos en aulas, tanto en el ámbito del hardware como en el del software.`,
        first_experience_task_2: `Ofrecí soporte y resolución de problemas de software para Chromebooks utilizados por los estudiantes.`,
        first_experience_task_3: `Creé un inventario detallado de los sistemas IT del instituto.`,
        first_experience_task_4: `Implementé imágenes de sistema operativo en computadoras de escritorio, actualizando sistemas desactualizados y configurando para prevenir cambios no deseados con herramientas como Deep Freeze.`,
        first_experience_task_5: `Realicé mantenimiento rutinario del hardware, incluyendo limpieza de componentes y reparación de ordenadores para evitar su descarte prematuro.`,
        second_experience_role: `Interno de Marketing Digital`,
        second_experience_company: `PAX Jovem`,
        second_experience_location: `Beja, Portugal`,
        second_experience_date: `Abr 2024 - May 2024`,
        second_experience_task_1: `Diseñé materiales promocionales como carteles, folletos y publicaciones en redes sociales.`,
        second_experience_task_2: `Ayudé a crear contenido digital para mejorar la visibilidad del proyecto "Futebol de Rua" en las plataformas de redes sociales.`,
        second_experience_task_3: `Apoyé la promoción de actividades deportivas y culturales organizadas por el proyecto, contribuyendo a crear conciencia sobre la inclusión social a través del deporte.`,
        second_experience_task_4: `Dediqué tiempo a asistir a los miembros del equipo con una pequeña guía, ayudándolos a familiarizarse con herramientas de creación de contenido digital como Canva, asegurando que pudieran utilizarlas con confianza para mejorar su productividad y creatividad.`,
        contact_section_title: `VAMOS A HACERLO POSIBLE!`,
        contact_section_subtitle: `Estoy trabajando para cumplir mis sueños y me gustaría colaborar con otros que también sueñen en grande. ¡Contáctame en LinkedIn o por correo!`,
    }
}

let currentLang = 'es';
function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });

    document.querySelectorAll('.language a').forEach(el => el.classList.remove('active-lang'));
    document.querySelector(`.language a[href="${lang.toUpperCase()}"]`).classList.add('active-lang');

    document.querySelectorAll('.language-options a').forEach(el => el.classList.remove('active-lang'));
    document.querySelector(`.language-options a[href="${lang.toUpperCase()}"]`).classList.add('active-lang');
}

document.querySelector('.language a[href="EN"]').addEventListener('click', (e) => {
    e.preventDefault();
    changeLanguage('en');
    currentLang = 'en';
});

document.querySelector('.language a[href="ES"]').addEventListener('click', (e) => {
    e.preventDefault();
    changeLanguage('es');
    currentLang = 'es';
});

document.querySelector('.language-options a[href="EN"]').addEventListener('click', (e) => {
    e.preventDefault();
    changeLanguage('en');
    currentLang = 'en';
});

document.querySelector('.language-options a[href="ES"]').addEventListener('click', (e) => {
    e.preventDefault();
    changeLanguage('es');
    currentLang = 'es';
});

changeLanguage('es');

// Change the header style at scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Change active section
const itemsListHeader = document.querySelectorAll('.container li');
itemsListHeader.forEach(item => {
    item.addEventListener('click', () => {
        itemsListHeader.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});
    
// Copy email to clipboard
let lastCopied = false;
document.getElementById('gmail-icon').addEventListener('click', () => {
    const email = "samuelcanadas2711@gmail.com";
    const gmailIcon = document.getElementById('gmail-icon');

    if (lastCopied) return;

    navigator.clipboard.writeText(email).then(() => {
        if (currentLang === 'es') {
            gmailIcon.setAttribute('data-label', 'Copiado!');
        } else if (currentLang === 'en') {
            gmailIcon.setAttribute('data-label', 'Copied!');
        }
        gmailIcon.style.cursor = 'not-allowed';
        lastCopied = true;

        setTimeout(() => {
            gmailIcon.setAttribute('data-label', 'Gmail');
            gmailIcon.style.cursor = 'pointer';
            lastCopied = false;
        }, 3000);
    });
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');

// Smooth scrolls to the target element when a navigation link is clicked, accounting for a 70px offset.
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
            });
        }
    });
});

// Change active section based on scrolling position
const updateActiveSection = () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', updateActiveSection);

const handleScroll = () => {
    let currentSection = null;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        if (targetId === currentSection) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', handleScroll);
handleScroll();

// Toggles the mobile menu visibility and updates the menu button icon.
const bNavMobile = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-mobile");

bNavMobile.addEventListener("click", () => {
    const isOpen = nav.classList.contains("open");

    if (isOpen) {
        nav.classList.remove("open");
        bNavMobile.classList.remove("open-toggle");
        setTimeout(() => (nav.style.display = "none"), 300);
    } else {
        nav.style.display = "flex"; 
        setTimeout(() => nav.classList.add("open"), 0);
        setTimeout(() => bNavMobile.classList.add("open-toggle"), 0);
    }

    bNavMobile.textContent = isOpen ? "☰" : "";
});

// Close the mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            setTimeout(() => (nav.style.display = "none"), 300);
            bNavMobile.classList.remove("open-toggle");
            bNavMobile.textContent = "☰";
        }
    });
});