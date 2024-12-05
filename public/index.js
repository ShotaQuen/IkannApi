const features = [
{
name: "Open AI",
category: "ai",
endpoint: "/api/other",
query: "s=other&text=Hello"
},
{
name: "Rumah sakit",
category: "search",
endpoint: "/api/other",
query: "s=other&text=Hello"
}
];

function redirectToEndpoint(endpoint, query) {
  const fullUrl = `${endpoint}?${query}`;

  if (method === "GET") {
    window.open(fullUrl, "_blank");
  } else if (method === "POST") {
    const data = Object.fromEntries(new URLSearchParams(query));
    axios.post(endpoint, data)
      .then((response) => {
        console.log("Response:", response.data);
        alert("Request berhasil! Lihat konsol untuk respons.");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        if (error.response) {
          console.error("Detail Error:", error.response.data);
        }
        alert("Terjadi kesalahan! Lihat konsol untuk detail.");
      });
  }
}

function addFeaturesToDiv(features) {
const categoryCounts = {};
let totalFeatures = 0; 
features.forEach(feature => {
const categoryId = feature.category.toLowerCase().replace(/\s+/g, '-');
const categoryDiv = document.getElementById(categoryId);

// Jika div untuk kategori ada, tambahkan fitur ke dalamnya
if (categoryDiv) {
const featureCard = document.createElement('div');
featureCard.className = 'feature-card';
featureCard.innerHTML = `<a class="collapse-item" target="_blank" onclick="redirectToEndpoint('${feature.endpoint}', '${feature.query}')" >${feature.name}</a>
`;
// Tambahkan kartu fitur ke div kategori
categoryDiv.appendChild(featureCard);

if (!categoryCounts[categoryId]) {
categoryCounts[categoryId] = 0;
}
categoryCounts[categoryId]++;
} else {
console.warn(`Error cok.`);
}
totalFeatures++;
});

Object.keys(categoryCounts).forEach(categoryId => {
const countSpan = document.getElementById(`${categoryId}-count`);
if (countSpan) {
countSpan.textContent = ` ${categoryCounts[categoryId]}`;
}
});

const totalCountDiv = document.getElementById('total-count');
totalCountDiv.innerHTML = `<span>Total Feature: ${totalFeatures}</span>`;
    }
// Tambahkan fitur ke div yang sesuai
addFeaturesToDiv(features);