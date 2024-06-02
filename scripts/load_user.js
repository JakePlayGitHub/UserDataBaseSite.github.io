const AccountsDatabase = "https://raw.githubusercontent.com/JakePlayGitHub/UserDataBase/main/accounts.json";

export function loadUser(username, password) {
    fetch(AccountsDatabase)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data["Users"][username] && data["Users"][username]["Password"] === password) {

                localStorage.setItem('userProfileImage', data["Users"][username]["ProfileImage"]);
                localStorage.setItem('username', username);
                localStorage.setItem('userBio', data["Users"][username]["BIO"]);

                window.location.href = '../html/profile.html';
            } else {
                console.warn("Invalid username or password!");
            }
        })
        .catch(error => console.log('There was a problem with the fetch operation:', error));
}
