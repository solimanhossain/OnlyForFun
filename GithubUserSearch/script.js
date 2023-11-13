let input = document.getElementById('user-submit');
let profile = document.querySelector('#profile');


async function githubApi() {
    let user = input.children[1].value;
    let api = await fetch(`https://api.github.com/users/${user}`);
    let obj = await api.json();
    profile.style.display = "block";
    if (obj.message == 'Not Found') {
        profile.innerHTML = `"${user}" incorrect username. No github user found! `;
    } else {
        profileView(obj, profile);
    }
}


function profileView(o, p) {
    p.innerHTML = `<div class="d-flex text-black">
        <div class="flex-shrink-0  pt-3">
            <img src="${o.avatar_url}" class="img-fluid" style="width: 175px; border-radius: 50%;">
        </div>
        <div class="flex-grow-1 ms-3">
            <div class='row d-flex '>
                <div class="col">
                    <h5 class="mb-1">${o.name}</h5>
                    <p class="mb-2 pb-1 text-muted">${o.id}</p>
                </div>
                <div class="col d-flex justify-content-end">
                    <input type="button"  class="btn btn-outline-secondary mb-5" value="Follow" onclick="location.href='${o.html_url}';" />
                </div>
            </div>
            <div class="d-flex justify-content-start rounded-1 p-2 mb-2"
                style="background-color: lightgrey;">
                <div class="px-3">
                    <p class="small text-muted mb-1">Followers</p>
                    <p class="mb-0">${o.followers}</p>
                </div>
                <div>
                    <p class="small text-muted mb-1">Repos</p>
                    <p class="mb-0">${o.public_repos}</p>
                </div>
                <div class="px-3">
                    <p class="small text-muted mb-1">Following</p>
                    <p class="mb-0">${o.following}</p>
                </div>
                <div>
                    <p class="small text-muted mb-1">Gists</p>
                    <p class="mb-0">${o.public_gists}</p>
                </div>
            </div>
            <div><p>${o.bio}</p></div>
        </div>
    </div>`;
}


input.children[2].firstChild.addEventListener('click', githubApi);