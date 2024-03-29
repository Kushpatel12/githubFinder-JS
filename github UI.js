class GitHub{
  constructor(){
      this.client_id = '4aa537a66937fceb174d';
      this.client_secret = '8777d9aa3680e527b9d0002f25014bda90a701bf';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await 
    fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await 
    fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
        profile,
        repos
    }
  }
}