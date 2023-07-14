const locations = [
  {
    id: 1,
    image: "../assets/images/4.png",
    letter: "M2",
    name: "Mansions",
    location: { x: 10, y: 60 },
  },
  {
    id: 2,
    image: "../assets/images/2.png",
    letter: "P1",
    name: "Park",
    location: { x: 30, y: 50 },
  },
  {
    id: 3,
    image: "../assets/images/3.png",
    letter: "M1",
    name: "Apartments",
    location: { x: 60, y: 30 },
  },
  {
    id: 4,
    image: "../assets/images/4.png",
    letter: "R1",
    name: "Road",
    location: { x: 80, y: 70 },
  },
];

const locationsDiv = document.getElementById("locations");
const popup = document.querySelector(".popup");
let viewer;

locations.map((item) => {
  const location = document.createElement("div");
  const letter = document.createElement("span");
  const name = document.createElement("span");

  location.classList.add("location");
  letter.classList.add("location__letter");

  letter.textContent = item.letter;
  name.textContent = item.name;

  location.style.top = `${item.location.y}%`;
  location.style.left = `${item.location.x}%`;

  location.addEventListener("click", function () {
    popupOpen(item.image);
  });

  location.appendChild(letter);
  location.appendChild(name);
  locationsDiv.appendChild(location);
});

// Open the popup
function popupOpen(image) {
  viewer = new PhotoSphereViewer.Viewer({
    container: "viewer",
    panorama: image,
  });
  popup.style.display = "flex";
}

// Close the popup
document.querySelector("#close").addEventListener("click", function (event) {
  popup.style.display = "none";
  viewer.destroy();
});

// Open the popup Download brochure
document
  .querySelector("#download__button")
  .addEventListener("click", function () {
    document.querySelector("#download__popup").style.display = "flex";
  });

// Close the popup Download brochure
document
  .querySelector("#download__close")
  .addEventListener("click", function () {
    document.querySelector("#download__popup").style.display = "none";
  });
