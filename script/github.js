class Github {
    constructor() {
        this.client_id = 'd0b65d707d89db76bbd2';
        this.client_secret = 'b0610e3ff46160229974cf0fc30ecf67bde426f5';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();

        return {
            profile: profileData
        }
    }
}