// Data Features
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
        name: "Tebak Gambar",
        method: "GET",
        description: "Games/tebakgambar",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakgambar"
    },
    {
        name: "Tebak HeroML",
        method: "GET",
        description: "Games/tebakheroml",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakheroml"
    },
    {
        name: "Tebak JKT",
        method: "GET",
        description: "Games/tebakjkt",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakjkt"
    },
    {
        name: "Tebak Hewan",
        method: "GET",
        description: "Games/tebakhewan",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakhewan"
    },
    {
        name: "Tebak Game",
        method: "GET",
        description: "Games/tebakgame",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakgame"
    },
    {
        name: "Tebak Bendera",
        method: "GET",
        description: "Games/tebakbendera",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakbendera"
    },
    {
        name: "Tebak Lagu",
        method: "GET",
        description: "Games/tebaklagu",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebaklagu"
    },
    {
        name: "Tebak Lirik",
        method: "GET",
        description: "Games/tebaklirik",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebaklirik"
    },
    {
        name: "Tebak Kalimat",
        method: "GET",
        description: "Games/tebakkalimat",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakkalimat"
    },
    {
        name: "Tebak Kata",
        method: "GET",
        description: "Games/tebakkata",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakkata"
    },
    {
        name: "Tebak Kimia",
        method: "GET",
        description: "Games/tebakkimia",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebakkimia"
    },
    {
        name: "Tebak Logo",
        method: "GET",
        description: "Games/tebaklogo",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebaklogo"
    },
    {
        name: "Tebak Kabupaten",
        method: "GET",
        description: "Games/tkabupaten",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tkabupaten"
    },
    {
        name: "Tebak Tebakan",
        method: "GET",
        description: "Games/tebaktebakan",
        category: "GAMES",
        endpoint: "../api",
        query: "s=tebaktebakan"
    },
    {
        name: "Family100",
        method: "GET",
        description: "Games/family100",
        category: "GAMES",
        endpoint: "../api",
        query: "s=family100"
    },
    {
        name: "Cak Lontong",
        method: "GET",
        description: "Games/caklontong",
        category: "GAMES",
        endpoint: "../api",
        query: "s=caklontong"
    },
    {
        name: "Susun Kata",
        method: "GET",
        description: "Games/susunkata",
        category: "GAMES",
        endpoint: "../api",
        query: "s=susunkata"
    },
    {
        name: "Asah Otak",
        method: "GET",
        description: "Games/asahotak",
        category: "GAMES",
        endpoint: "../api",
        query: "s=asahotak"
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

// Data Folders
const folders = [
    { name: "AI", icon: "fas fa-brain", info: "Artificial Intelligence related features" },
    { name: "GAMES", icon: "fas fa-gamepad", info: "Game related features" },
    { name: "ANIME", icon: "fas fa-ghost", info: "Anime related features" }
];

// Render Folders
function renderFolders() {
    const foldersContainer = document.getElementById('folders-container');
    folders.forEach(folder => {
        const folderDiv = document.createElement('div');
        folderDiv.classList.add('folder-card');

        folderDiv.innerHTML = `
            <div class="folder-name">
                <i class="${folder.icon}"></i> ${folder.name}
            </div>
            <div class="folder-action">
                <button onclick="showFeatures('${folder.name}')">Open</button>
            </div>
        `;
        foldersContainer.appendChild(folderDiv);
    });
}

// Total Features
const totalFeature = features.length;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("totalFeatures").textContent = `${totalFeature}`;
});

// Show or Hide Folder Features and Information
function showFeatures(folderName) {
    const featuresContainer = document.getElementById('features-container');
    const infoSection = document.getElementById('info-section');
    const infoText = document.getElementById('info-text');

    // Toggle visibility
    if (featuresContainer.style.display === 'block' && infoText.innerText.includes(folderName)) {
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
document.getElementById('searchInput').addEventListener('input', function (e) {
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
