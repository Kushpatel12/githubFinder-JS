// initiate
const github = new GitHub;
// Initiate
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Serach input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
       // make HTTP call
       github.getUser(userText)
          .then(data => {
              // console.log(data);
              if (data.profile.message === 'Not Found') {
                  // Show alert
                  ui.showAlert('User not found', 'alert alert-danger');
              }else{
                  // Show profile
                  ui.showProfile(data.profile);
                  ui.showRepos(data.repos);
              }
          })
    }else{
       // Clear profile
       ui.clearProfile();
    }
})