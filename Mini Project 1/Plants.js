// document.addEventListener('DOMContentLoaded', () => {

// console.log(data);

// let allPlants=[]

// allPlants.forEach(plant => {
//   console.log(plant.sunlight); 
// });

// const apiKey = "sk-IRwf6837daf55954610722";
// const speciesListUrl = `https://perenual.com/api/v2/species-list?key=${apiKey}`;


// // Fetch species list and then fetch details for each plant from second API endpoint
// fetch(speciesListUrl)
//   .then(res => res.json())
//   .then(data => {
//     const detailFetches = data.data.map(plant =>
//       fetch(`https://perenual.com/api/v2/species/details/${plant.id}?key=${apiKey}`)
//         .then(res => res.json())
//         .catch(err => {
//           console.warn("Failed to fetch details for plant ID", plant.id, err);
//           return null;
//         })
//     );

//     return Promise.all(detailFetches);
//   })


// .then(details => {
//   // Filter out null responses
//   allPlants = details.filter(plant => plant !== null);
//   console.log("Sample plant with details:", allPlants[0]);
//   applyFilters();
// })

//  .catch(error => console.error("Fetch error:", error));

// // Cache the filter selects
// const indoorSelect = document.getElementById('filter-indoor');
// const sunlightSelect = document.getElementById('filter-sunlight');

// // Apply filters on change
// indoorSelect.addEventListener('change', applyFilters);
// sunlightSelect.addEventListener('change', applyFilters);



// applyFilters(); 



// function applyFilters() {
//   const indoorValue = indoorSelect.value;
//   const sunlightValue = sunlightSelect.value;

//   let filtered = allPlants;

//   // Indoor filter
//   if (indoorValue === 'indoor') {
//     filtered = filtered.filter(p => p.indoor === true);
//   } else if (indoorValue === 'outdoor') {
//     filtered = filtered.filter(p => p.indoor === false);
//   }

//   // Sunlight filter
//   if (sunlightValue !== 'all') {
//     filtered = filtered.filter(p => Array.isArray(p.sunlight) && p.sunlight.includes(sunlightValue));
//   }

//   displayPlants(filtered);
// }

// function displayPlants(plants) {
//   const container = document.getElementById('card-container');
//   container.innerHTML = '';

//   plants.forEach(plant => {
//     const col = document.createElement('div');
//     col.className = 'col-12 col-sm-6 col-lg-3 mb-4';

//     col.innerHTML = `
//       <div class="card" style="width: 100%;">
//         <img src="${plant.default_image?.original_url || 'https://via.placeholder.com/150'}"
//              class="card-img-top plant-img"
//              style="height: 200px; object-fit: cover;"
//              alt="Plant image">
//         <div class="card-body">
//           <h5 class="card-title">${plant.common_name || 'Unknown Plant'}</h5>
//           <p class="card-text">${(plant.scientific_name || []).join(', ')}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">Water: ${plant.watering || 'N/A'}</li>
//           <li class="list-group-item">Sunlight: ${(plant.sunlight || []).join(', ') || 'N/A'}</li>
//           <li class="list-group-item">Hardiness: ${plant.hardiness || 'N/A'}</li>
//           <li class="list-group-item">Indoor: ${plant.indoor ? 'Yes' : 'No'}</li>
//         </ul>
//       </div>
//     `;

//     container.appendChild(col);
//     });
//   }
// });



//objects from an array (Plan B)


  let allPlants = data;

  document.addEventListener("DOMContentLoaded", () => {
    const indoorSelect = document.getElementById('filter-indoor');
    const sunlightSelect = document.getElementById('filter-sunlight');
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    // filters
    indoorSelect.addEventListener('change', applyFilters);
    sunlightSelect.addEventListener('change', applyFilters);

    // search form 
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();

      const filteredPlants = allPlants.filter(plant => {
        return (
          plant.common_name?.toLowerCase().includes(query) ||
          (Array.isArray(plant.scientific_name) && plant.scientific_name.join(', ').toLowerCase().includes(query))
        );
      });

      displayPlants(filteredPlants);
    });

    applyFilters();
  });

  function applyFilters() {
    const indoorValue = document.getElementById('filter-indoor').value;
    const sunlightValue = document.getElementById('filter-sunlight').value;

    let filtered = allPlants;

    if (indoorValue === 'indoor') {
      filtered = filtered.filter(p => p.indoor === true);
    } else if (indoorValue === 'outdoor') {
      filtered = filtered.filter(p => p.indoor === false);
    }

    if (sunlightValue !== 'all') {
      filtered = filtered.filter(p =>
        Array.isArray(p.sunlight) && p.sunlight.includes(sunlightValue)
      );
    }

    displayPlants(filtered);
  }

  function displayPlants(plants) {
    const container = document.getElementById('card-container');
    container.innerHTML = '';

    plants.forEach(plant => {
      const col = document.createElement('div');
      const imageSrc = plant.image_url || plant.default_image?.original_url || 'MP1_logo.png';

      col.className = 'col-12 col-sm-6 col-lg-3 mb-4';
      col.innerHTML = `
        <div class="card h-100" style="cursor: pointer;" onclick="location.href='PlantDetails.html?id=${plant.id}'">
          <img src="${imageSrc}" class="card-img-top plant-img" style="height: 200px; object-fit: cover;" alt="${plant.common_name}">
          <div class="card-body">
            <h5 class="card-title">${plant.common_name || 'Unknown Plant'}</h5>
            <p class="card-text"><em>${plant.scientific_name}</em></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Sunlight: ${(plant.sunlight || []).join(', ')}</li>
            <li class="list-group-item">Indoor: ${plant.indoor ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      `;

      container.appendChild(col);
    });
    }