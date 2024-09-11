const searchBar = document.getElementById('searchBar');
const voiceSearchButton = document.getElementById('voiceSearchButton');
const resultsDiv = document.getElementById('results');

// Check for browser compatibility
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    console.log(recognition);
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

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

    function performSearch(query) {
        // Replace with your search logic
        resultsDiv.innerHTML = `Searching for: ${query}`;
        // Simulate search results
        setTimeout(() => {
            resultsDiv.innerHTML = `Results for: ${query}`;
        }, 1000);
    }
} else {
    alert('Your browser does not support speech recognition.');
}
