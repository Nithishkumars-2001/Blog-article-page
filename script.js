// select image

var like_btn = document.querySelector(".like-btn")

function like()
{
    like_btn.style.color = "red"
}

// side navbar

var side_navbar = document.querySelector(".side-navbar")

function opennavbar()
{
    side_navbar.style.left = "0"
}

function closenavbar()
{
    side_navbar.style.left = "-70%"
}

 var latest_post_like_btn = document.querySelector(".latest-post-like-btn")

 function  like_latest_post()
 {
    latest_post_like_btn.style.color = "red"
 }