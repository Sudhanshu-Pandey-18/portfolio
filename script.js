// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
    });
});

// Highlight the nav link for the section currently on screen
const sections = document.querySelectorAll("main section[id]");
const linkFor = (id) => navLinks.querySelector(`a[href="#${id}"]`);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const link = linkFor(entry.target.id);
            if (link && entry.isIntersecting) {
                navLinks.querySelectorAll("a").forEach((a) => a.classList.remove("active"));
                link.classList.add("active");
            }
        });
    },
    { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((section) => observer.observe(section));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
