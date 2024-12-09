// Sample Data
const data = [
    { region: 'US', model: 'A', sales: 150 },
    { region: 'US', model: 'B', sales: 120 },
    { region: 'US', model: 'C', sales: 350 },
    { region: 'EU', model: 'A', sales: 200 },
    { region: 'EU', model: 'B', sales: 100 },
    { region: 'EU', model: 'C', sales: 250 },
    { region: 'CA', model: 'A', sales: 200 },
    { region: 'CA', model: 'B', sales: 100 },
    { region: 'CA', model: 'C', sales: 230 },
    { region: 'CA', model: 'D', sales: 400 },
];

// DOM Elements
const salesTable = document.getElementById('salesTable').querySelector('tbody');
const regionFilter = document.getElementById('regionFilter');
const modelFilter = document.getElementById('modelFilter');

// Populate Filters
function populateFilters() {
    const regions = [...new Set(data.map(item => item.region))];
    const models = [...new Set(data.map(item => item.model))];

    // Populate Region Filter
    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionFilter.appendChild(option);
    });

    // Populate Model Filter
    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelFilter.appendChild(option);
    });
}

// Populate Table
function populateTable(filteredData) {
    salesTable.innerHTML = ''; // Clear existing rows
    filteredData.forEach(({ region, model, sales }) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${region}</td>
            <td>${model}</td>
            <td>${sales}</td>
        `;
        salesTable.appendChild(row);
    });
}

// Filter Data
function filterData() {
    const selectedRegion = regionFilter.value;
    const selectedModel = modelFilter.value;

    const filteredData = data.filter(item => {
        const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;
        const matchesModel = selectedModel === 'all' || item.model === selectedModel;
        return matchesRegion && matchesModel;
    });

    populateTable(filteredData);
}

// Event Listeners
regionFilter.addEventListener('change', filterData);
modelFilter.addEventListener('change', filterData);

// Initialize
populateFilters();
populateTable(data); // Display all data initially
