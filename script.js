//You can edit ALL of the code here
const rootElem = document.getElementById("root");

function fetchAllEpisodes(theURL) {
  fetch(theURL)
    .then((data) => {
      return data.json();
    }) // Transform the data into json
    .then((episodesList) => {
      // Do something with the data
      makePageForEpisodes(episodesList);
    });
}

function setup() {
  // const allEpisodes = getAllEpisodes();
  // makePageForEpisodes(allEpisodes);
  fetchAllEpisodes("https://api.tvmaze.com/shows/22036/episodes");

  console.log("RICHARD");

  let searchEpisodesBox = document.querySelector("#searchEpisodes");
  searchEpisodesBox.addEventListener("keyup", searchEpisodes);
}

function searchEpisodes() {
  let searchEpisodesBox = document.querySelector("#searchEpisodes");
  console.log(searchEpisodesBox.value);

  const allEpisodes = getAllEpisodes();
  let filteredEpisodes = allEpisodes.filter(filterEpisodes);
  makePageForEpisodes(filteredEpisodes);
}

function filterEpisodes(episode) {
  let searchEpisodesBox = document.querySelector("#searchEpisodes");
  console.log(searchEpisodesBox.value);

  if (
    episode.name.toLowerCase().includes(searchEpisodesBox.value.toLowerCase())
  ) {
    return true;
  } else {
    return false;
  }
}

function makePageForEpisodes(episodeList) {
  console.log("CYF");

  rootElem.innerHTML = "";
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  //rootElem.textContent = "Got " + episodeList.length + " episode(s)";

  episodeList.forEach(createCard);
}

function createCard(episode) {
  const rootElem = document.getElementById("root");
  let cardSpan = document.createElement("span");

  let cardTitle = document.createElement("h2");
  cardTitle.innerText = episode.name;
  cardTitle.className = "episodeAlign";
  cardSpan.appendChild(cardTitle);

  let cardEpisodeNumber = document.createElement("h5");
  //cardEpisodeNumber.innerText = episode.season + " " + episode.number;
  let seasonPadding = "";
  if (episode.season < 10) {
    seasonPadding = "0";
  }
  let codeText = "S" + seasonPadding + episode.season;

  cardEpisodeNumber.textContent = ` - ${episode.season}E0${episode.number}`;

  cardSpan.appendChild(cardEpisodeNumber);

  let cardImage = document.createElement("img");
  cardImage.src = episode.image.medium;
  cardImage.alt = episode.name;
  cardImage.title = episode.name;
  cardImage.className = "imgCenter";
  cardSpan.appendChild(cardImage);

  let cardEpisodeSummary = document.createElement("span");
  cardEpisodeSummary.innerHTML = episode.summary;
  cardSpan.appendChild(cardEpisodeSummary);

  cardSpan.className = "episodeCard";
  rootElem.appendChild(cardSpan);
}

window.onload = setup;
