class UI{
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // Display profile
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img src="${user.avatar_url}" class="img-fluid mb-2">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `
    }

    showRepos(repos){
       let output = '';

       repos.forEach(function (repo) {
           output += `
            <div class = 'card card-body mb-2'>
              <div class = 'row'>
                <div class = 'col-md-6'>
                   <a href="${repo.html_url} target="_blank">${repo.name}</a>
                </div>
                <div class= 'col-md-6'>
                  <span class="badge badge-primary">Public Repos: ${repo.stargazers_count}</span>
                  <span class="badge badge-secondary">Public Gists: ${repo.watchers_count}</span>
                  <span class="badge badge-success">Followers: ${repo.forms_count}</span>
                </div>
              </div>
            </div>
           `
       });

       document.getElementById('repos').innerHTML = output;

    }

    // Show alert message
    showAlert(message, className){
        // clear any remaining alerts
        this.clearAlert();
        // Create div
        const div = document.createElement('div');
        // add class
        div.className = className;
        // add Text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        // get child
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);
        // Show alert for 3 second
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    // Clear alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }
}