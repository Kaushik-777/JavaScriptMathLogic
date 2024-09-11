// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const dataContainer = document.getElementById('data-container');
  
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        displayData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loader.classList.add('hidden');
        content.classList.add('visible');
      }
    };
  
    // Function to display data in the content area
    const displayData = (data) => {
      dataContainer.innerHTML = data.slice(0, 5).map(item => `
        <div>
          <h2>${item.title}</h2>
          <p>${item.body}</p>
        </div>
      `).join('');
    };
  
    // Fetch data when the page loads
    fetchData();
  });
  