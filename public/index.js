const features = [
    {
    name: "OpenAI",
    method: "GET",
    description: "AI/openai",
    category: "AI",
    endpoint: "../api",
    query: "s=openai&text=Hai%20kamu"
    },
    {
    name: "BlackBox",
    method: "GET",
    description: "AI/blackbox",
    category: "AI",
    endpoint: "../api",
    query: "s=blackbox&text=Hai%20kamu"
  },
  {
    name: "OtakuDetail",
    method: "GET",
    description: "ANIME SEARCH",
    category: "ANIME",
    endpoint: "../api",
    query: "s=otakudesu-detail&url=https://otakudesu.cloud/lengkap/btr-nng-sub-indo-part-1"
  }
    ];

    const folders = [
      { name: "AI", icon: "fas fa-brain", info: "Artificial Intelligence related features" },
      { name: "ANIME", icon: "fas fa-ghost", info: "Anime features" }
    ];

    // Render Folders
    function renderFolders() {
      const foldersContainer = document.getElementById('folders-container');
      folders.forEach(folder => {
        const folderDiv = document.createElement('div');
        folderDiv.classList.add('folder-card');

        folderDiv.innerHTML = `
          <div class="folder-name">
            <i class="${folder.icon}"></i>${folder.name}
          </div>
          <div class="folder-action">
            <button onclick="showFeatures('${folder.name}')">Open</button>
          </div>
        `;
        foldersContainer.appendChild(folderDiv);
      });
    }

    // Show Folder Features and Information
// Show or Hide Folder Features and Information
function showFeatures(folderName) {
  const featuresContainer = document.getElementById('features-container');
  const infoSection = document.getElementById('info-section');
  const infoText = document.getElementById('info-text');

  // Toggle visibility
  if (featuresContainer.style.display === 'block' && infoText.innerText.includes(folderName)) {
    // Hide the section if already open and the same folder is clicked
    featuresContainer.style.display = 'none';
    infoSection.style.display = 'none';
    return;
  }

  // Show the info section with folder description
  const folder = folders.find(f => f.name === folderName);
  infoText.innerText = folder ? folder.info : 'No information available';
  infoSection.style.display = 'block';

  // Show the features related to the folder
  const filteredFeatures = features.filter(f => f.category === folderName);

  const featuresTableBody = document.getElementById('featuresTable-body');
  featuresTableBody.innerHTML = '';

  filteredFeatures.forEach((feature, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${feature.name}</td>
      <td>${feature.method}</td>
      <td><button class="action-button" onclick="redirectToEndpoint('${feature.endpoint}', '${feature.query}', '${feature.method}')">Open</button></td>
    `;
    featuresTableBody.appendChild(row);
  });

  // Display the features table
  featuresContainer.style.display = 'block';
}

    // Redirect to Endpoint
    function redirectToEndpoint(endpoint, query, method) {
      if (method === "GET") {
        window.open(`${endpoint}?${query}`, "_blank");
      } else if (method === "POST") {
        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: query })
        }).then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
      }
    }

    // Search Function
    document.getElementById('searchInput').addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const rows = document.querySelectorAll('#featuresTable-body tr');

      rows.forEach(row => {
        const featureName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (featureName.includes(searchTerm)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });

// Initial Render
renderFolders();