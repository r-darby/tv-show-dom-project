console.log("One");

//Retrieve the JSON
fetch("https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true")
  // Get the response and extract the JSON
  .then(function (response) {
    console.log("Two");
    return response.json();
  })
  // Do something with the JSON
  .then((headlines) => {
    console.log(headlines);
  })
  // If something goes wrong
  .catch((error) => console.log(error));

console.log("Three");
