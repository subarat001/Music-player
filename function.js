let arr = [
  {
    songName: "Girls like you",
    url: "./musics/Maroon 5 - Girls Like You ft. Cardi B (Official Music Video).mp3",
    image: "./images/girls_like_you.jpg",
  },
  {
    songName: "Camila Cabello - Havana",
    url: "./musics/Camila Cabello - Havana (Audio) ft. Young Thug.mp3",
    image: "./images/_Camila_Cabello_Havana.png",
  },
  {
    songName: "Justion Bieber- sorry",
    url: "./musics/Justin Bieber - Sorry (PURPOSE _ The Movement).mp3",
    image: "./images/juston_bieber_sorry.jpg",
  },
  {
    songName: "Dj snaker - lean on ",
    url: "./musics/Major Lazer & DJ Snake - Lean On (feat. MØ) [Official 4K Music Video].mp3",
    image: "./images/Major_Lazer_DJ_Snake_Lean_On.png",
  },
  {
    songName: "Roddy Ricch-The Box",
    url: "./musics/Roddy Ricch - The Box [Official Audio].mp3",
    image: "./images/The_box.jpg",
  },
];

let play = document.querySelector("#Play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");

let poster = document.querySelector("#left");
let AllSongs = document.querySelector("#allsongs");
var audio = new Audio();

let selectedSong = 0;

function mainFunction() {
  let clutter = "";
  arr.forEach((val, idx) => {
    clutter += `<div class="songscard" id=${idx}>
            <div class="part1">
              <img
                src=${val.image}
                alt=""
              />
              <h2>${val.songName}</h2>
            </div>
            <h6>3:55</h6>
          </div>`;
  });

  AllSongs.innerHTML = clutter;

  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].image})`;
}

mainFunction();

AllSongs.addEventListener("click", (dets) => {
  selectedSong = dets.target.id;
  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  flag = 1;
  mainFunction();
  audio.play();
});

let flag = 0;
play.addEventListener("click", () => {
  if (flag === 0) {
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="fa-solid fa-play"></i>`;
    mainFunction();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", () => {
  if (selectedSong < arr.length) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.3;
  }
});

backward.addEventListener("click", () => {
  if (selectedSong >= 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.3;
  }
});
