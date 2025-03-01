// Get the theme toggle checkbox
const themeToggle = document.getElementById('theme-toggle');
// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}
// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = true; // Ensure the switch is checked for dark mode

} else {
    document.documentElement.setAttribute('data-theme',
        'light');
    themeToggle.checked = false; // Ensure the switch is unchecked for light mode

}
// Add event listener to the toggle button
themeToggle.addEventListener('change', toggleTheme);