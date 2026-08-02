/**
 * Settings Page JavaScript
 */

const settingsNav = document.querySelectorAll('.settings-nav button');

settingsNav.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetSection = btn.getAttribute('data-section');

    // Remove active from all
    settingsNav.forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.settings-section').forEach((s) => s.classList.remove('active'));

    // Add active to clicked
    btn.classList.add('active');
    document.getElementById(targetSection).classList.add('active');
  });
});
