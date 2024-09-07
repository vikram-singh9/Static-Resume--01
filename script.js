"use strict";
const toggleButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');
console.log(toggleButton);
toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
