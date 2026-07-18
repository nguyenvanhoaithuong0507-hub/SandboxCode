/**
 * Authentication Page JavaScript
 */

const authTabs = document.querySelectorAll('.auth-tabs .tab');
const tabContents = document.querySelectorAll('.tab-content');

authTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute('data-tab');

    // Remove active class from all
    authTabs.forEach((t) => t.classList.remove('active'));
    tabContents.forEach((c) => c.classList.remove('active'));

    // Add active to clicked
    tab.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});

// OAuth buttons
const oauthButtons = document.querySelectorAll('.oauth-buttons button');
oauthButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('OAuth clicked:', btn.textContent);
    // Redirect to OAuth provider
  });
});
