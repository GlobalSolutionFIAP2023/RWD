const instaIcon = document.querySelector(".instagram");
const fbIcon = document.querySelector(".facebook");
const twitterIcon = document.querySelector(".twitter");

instaIcon.addEventListener("click", () => {
    window.open("https://www.instagram.com", "_blank");
});

fbIcon.addEventListener("click", () => {
    window.open("https://www.facebook.com", "_blank");
});

twitterIcon.addEventListener("click", () => {
    window.open("https://www.twitter.com", "_blank");
});