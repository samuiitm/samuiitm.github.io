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
        setTimeout(() => (nav.style.display = "none"), 300);
    } else {
        nav.style.display = "flex"; 
        setTimeout(() => nav.classList.add("open"), 0);
    }

    bNavMobile.textContent = isOpen ? "☰" : "🞪";
});
