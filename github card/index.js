const image = document.getElementById("github-profile-pic")
const followers = document.querySelector(".followers")
const following = document.querySelector(".following")


addEventListener("load", function(e) {
    fetch('https://api.github.com/users/KlausMikhaelson')
            .then(response => response.json())
            .then(body => {
                console.log(body)
                image.src = body.avatar_url
                followers.innerText = "Followers:" + " " + body.followers
                following.innerText = "Following:" + " " + body.following
            })
            .catch(err => console.log(err))
})

