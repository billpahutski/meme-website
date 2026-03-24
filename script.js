window.addEventListener("load", function() {
  const firstMeme = memes[0];
  const image = document.getElementById("randomImage");
  image.src = firstMeme.image;
});