document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const voiceSearchButton = document.getElementById("voiceSearchButton");
  const resultsDiv = document.getElementById("results");

  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    voiceSearchButton.onclick = () => {
      recognition.start();
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      searchBar.value = transcript;
      performSearch(transcript);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
    };

    async function performSearch(query) {
      resultsDiv.innerHTML = `Searching for: ${query}`;
      // Placeholder for actual search logic
      const results = await fakeSearch(query);
      displayResults(results);
    }

    function displayResults(results) {
      resultsDiv.innerHTML = results
        .map(
          (result) =>
            `<div>
                    <h3>${result.title}</h3>
                    <p>${result.description}</p>
                    <p>Price: ${result.price}</p>
                </div>`
        )
        .join("");
    }

    async function fakeSearch(query) {
      // Simulate an API call
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { title: "Product 1", description: "Description 1", price: "$10" },
            { title: "Product 2", description: "Description 2", price: "$20" },
          ]);
        }, 1000);
      });
    }
  } else {
    alert("Your browser does not support speech recognition.");
  }
});

