import { loadUser } from './load_user.js';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const loginUsername = document.getElementById('login-username').value;
        const loginPassword = document.getElementById('login-password').value;

        if (loginUsername !== "") {
            if (loginPassword !== "") {                
                loadUser(loginUsername, loginPassword);
            } else {
                console.error('Password is required');
            }
        } else {
            console.error('Username is required');
        }
    });
});
