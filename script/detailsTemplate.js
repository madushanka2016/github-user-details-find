class detailsTemplate{
    constructor(){
        this.profile = document.getElementById('details');
    }
    createTemplate(userProfil){
        this.profile.innerHTML = `
            <div class="border border-success"
                style="margin-top: 50px;border-radius: 30px">
                <div class="row" style="margin: 20px;">
                    <div class="col">
                        <div class="row">
                            <div class="col-3">
                                <h5>${userProfil.name}</h5>
                                <img src="${userProfil.avatar_url}" alt="" style="height: 200px;width: 200px;">
                                <br>
                                <a href="${userProfil.html_url}">
                                    <button class="btn btn-primary" style="width: 200px">Check profil</button>
                                </a>
                            </div>
                            <div class="col-9">
                                <div class="row">
                                    <div class="col-3">
                                        <label for="" class="border" style="border-radius: 5px;padding: 10px">Public repos : ${userProfil.public_repos}</label>
                                    </div>
                                    <div class="col-3">
                                        <label for="" class="border" style="border-radius: 5px;padding: 10px">Public gists : ${userProfil.public_gists}</label>
                                    </div>
                                    <div class="col-3">
                                        <label for="" class="border" style="border-radius: 5px;padding: 10px">Followers : ${userProfil.followers}</label>
                                    </div>
                                    <div class="col-3">
                                        <label for="" class="border" style="border-radius: 5px;padding: 10px">Following : ${userProfil.following}</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div style="width: 100%">
                                        <label for="" class="border" style="border-radius: 5px;padding: 10px;width: 90%">Company : ${userProfil.company}</label>
                                    </div>
                                    <div style="width: 100%">
                                        <label for="" class="border" style="border-radius: 5px;padding: 10px;width: 90%">Address : ${userProfil.location}</label>
                                    </div>
                                    <div style="width: 100%">
                                        <label for="" class="border" style="border-radius: 5px;padding: 10px;width: 90%">Blog : ${userProfil.blog}</label>
                                    </div>
                                    <div style="width: 100%">
                                        <label for="" class="border" style="border-radius: 5px;padding: 10px;width: 90%">Created at : ${userProfil.created_at}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
                            `
    }
}