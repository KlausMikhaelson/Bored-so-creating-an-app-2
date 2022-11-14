const image = document.getElementById("github-profile-pic")
const followers = document.querySelector(".followers")
const following = document.querySelector(".following")
const Socials = document.querySelector(".socials")
const Repos = document.querySelector(".Repos")


addEventListener("load", function(e) {
    fetch('https://api.github.com/users/KlausMikhaelson')
            .then(response => response.json())
            .then(body => {
                console.log(body)
                image.src = body.avatar_url
                followers.innerText = "Followers:" + " " + body.followers
                following.innerText = "Following:" + " " + body.following
                Socials.innerText = "Follow me on twitter" + body.twitter_username
                Repos.innerText = "Personal Repos: " + body.public_repos 
            })
            .catch(err => console.log(err))
})

