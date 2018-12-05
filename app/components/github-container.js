import Component from '@ember/component';

export default Component.extend({
    githubUrl: 'https://api.github.com',
    name: '',
    avatar: '',
    followers: '',
    actions: {
        submitName() {
            const name = this.get('name')
            const url = this.get('githubUrl') +  '/users/' + name;
            fetch(url).then(response => 
                response.json()
            ).then(data => {
                this.set('avatar', data.avatar_url);
                this.set('followers', data.followers);
                this.getRepos({ url: data.repos_url })
            })
        }
    },
    /* 
        async-await does not work in this part of an ember component - ususally...
        api calls are set up through an ember adapter or ember-data, more complicated systems.
        Fetch is not often used, but given the time constraint, I felt it appropriate.
    */
    getRepos({ url }) {
        fetch(url).then(res => 
            res.json()
        ).then(data =>
            this.set('repos', data)
        )
    }
});