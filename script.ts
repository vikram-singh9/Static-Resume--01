const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;
console.log(toggleButton);

toggleButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
    skillsSection.style.display = 'block';
  } else {
    skillsSection.style.display = 'none';
  }
});
