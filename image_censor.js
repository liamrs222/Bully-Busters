let blackScreen = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1200px-A_black_image.jpg";

const imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = blackScreen;
}