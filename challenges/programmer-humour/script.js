const rootEl = document.getElementById("root");

const imageEl = document.createElement("img");

imageEl.classList.add("img-center");

const getAPIData = () => {
  const URL = `https://xkcd.now.sh/?comic=latest`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const imageSource = data.img;
      imageEl.setAttribute("src", imageSource);
    })
    .catch((err) => alert(err));
};

rootEl.appendChild(imageEl);

window.onload = getAPIData();
