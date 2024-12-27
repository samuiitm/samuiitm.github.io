window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const itemsList = document.querySelectorAll('.container li');
itemsList.forEach(item => {
    item.addEventListener('click', () => {
        itemsList.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    });
});

let lastCopied = false;
document.getElementById('gmail-icon').addEventListener('click', () => {
    const email = "samuelcanadas2711@gmail.com";
    const gmailIcon = document.getElementById('gmail-icon');

    if (lastCopied) return;

    navigator.clipboard.writeText(email).then(() => {
        gmailIcon.setAttribute('data-label', 'Copied!');
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

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
            });
        }
    });
});

const handleScroll = () => {
    let currentSection = null;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
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