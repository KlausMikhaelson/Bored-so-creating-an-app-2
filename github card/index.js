const image = document.getElementById("github-profile-pic")

addEventListener("load", function(e) {
    fetch('https://api.github.com/users/KlausMikhaelson')
            .then(response => response.json())
            .then(body => {
                console.log(body)
                image.src = body.avatar_url
            })
            .catch(err => console.log(err))
    // image.src = profile_image
    console.log("YOo")
})

