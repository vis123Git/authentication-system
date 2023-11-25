// Signup Page
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Generate random access token (16-byte string)
    const accessToken = generateRandomToken(16);

    // Store user details in local storage
    const user = {
        username,
        email,
        accessToken
    };

    localStorage.setItem('user', JSON.stringify(user));

    // Display success message and redirect to Profile Page
    signupMessage.textContent = 'Signup successful!';
    window.location.href = 'profile.html';
});

// Profile Page
const profileDetails = document.getElementById('profile-details');
const logoutBtn = document.getElementById('logout-btn');

// Check if the user is logged in
const user = JSON.parse(localStorage.getItem('user'));

if (user) {
    // Display user details on the profile page
    profileDetails.innerHTML = `
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
    `;
} else {
    // Redirect to Signup Page if not logged in
    window.location.href = 'index.html';
}

// Logout functionality
logoutBtn.addEventListener('click', function () {
    // Clear local storage and redirect to Signup Page
    localStorage.removeItem('user');
    window.location.href = 'index.html';
});

// Function to generate a random token
function generateRandomToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
}
