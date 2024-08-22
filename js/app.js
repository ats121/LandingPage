/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/



document.addEventListener('DOMContentLoaded', function () {

    // Selects all of the sections    
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');

    // Create a nav item
    sections.forEach(section => {
        const navItem = document.createElement('li');
        const menuLink = document.createElement('a');
        
        menuLink.href = `#${section.id}`;
        menuLink.textContent = section.dataset.nav;
        menuLink.classList.add('menu__link');
    
        navItem.appendChild(menuLink);
        navList.appendChild(navItem);

        // Scroll to section when link is clicked
        menuLink.addEventListener('click', function (event) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Highlight active section and matching nav link
    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const sect = section.getBoundingClientRect();
            const menuLink = document.querySelector(`a[href="#${section.id}"]`);

            if (sect.top >= 0 && sect.top <= window.innerHeight / 2) {
                section.classList.add('your-active-class');
                menuLink.classList.add('active');
            }
            else {
                section.classList.remove('your-active-class');
                menuLink.classList.remove('active');
            }
        });
    });
});



