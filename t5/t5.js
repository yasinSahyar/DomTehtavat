const restaurants = [
  {
    location: {type: 'Point', coordinates: [25.018456, 60.228982]},
    _id: '6470d38ecb12107db6fe24c1',
    companyId: 68,
    name: 'Ravintola Ladonlukko',
    address: 'Latokartanonkaari 9 A',
    postalCode: '00790',
    city: 'Helsinki',
    phone: '+358 50 4653899 Ravintolan esimies +358 50 435 8072 Kokoustarjoilut /ravintola',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.903147, 60.221729]},
    _id: '6470d38ecb12107db6fe24c2',
    companyId: 1580536,
    name: 'Ravintola Stadin AO Ilkantie',
    address: 'Ilkantie 3',
    postalCode: '00400',
    city: 'Helsinki',
    phone: '+358 (0) 50 4710 211',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.95576, 60.196672]},
    _id: '6470d38ecb12107db6fe24c3',
    companyId: 85,
    name: 'Stadin AO - Hattulantie 2',
    address: 'Hattulantie 2',
    postalCode: '00550',
    city: 'Helsinki',
    phone: '050 401 6867',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.94886, 60.218638]},
    _id: '6470d38ecb12107db6fe24c4',
    companyId: 179,
    name: 'Stadin AO Kullervonkatu',
    address: 'Kullervonkatu 11',
    postalCode: '00610',
    city: 'Helsinki',
    phone: '+358 50 472 4652',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.946847, 60.194701]},
    _id: '6470d38ecb12107db6fe24c5',
    companyId: 157,
    name: 'Stadin AO TK 23',
    address: 'Teollisuuskatu 23-25',
    postalCode: '00510',
    city: 'Helsinki',
    phone: '0503274920',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.950631, 60.169096]},
    _id: '6470d38ecb12107db6fe24bf',
    companyId: 1045996,
    name: 'Helsingin yliopisto Päärakennus',
    address: 'Aleksanterinkatu 5',
    postalCode: '00170',
    city: 'Helsinki',
    phone: '+358 50 411 8325 Kokous- ja juhlapalvelut ',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.479222, 60.977511]},
    _id: '6470d38ecb12107db6fe24be',
    companyId: 10229,
    name: 'Ravintola Visis - HAMK Hämeenlinna',
    address: 'Visamäentie 35, D-rakennus',
    postalCode: '13500',
    city: 'Hämeenlinna',
    phone: '0504776779',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.856847, 61.449716]},
    _id: '6470d38ecb12107db6fe24cb',
    companyId: 111,
    name: 'Ravintola Hertsi',
    address: 'Korkeakoulunkatu 1',
    postalCode: '33720',
    city: 'Tampere',
    phone: '+358503581648',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.826006, 62.788814]},
    _id: '6470d38ecb12107db6fe24ca',
    companyId: 109,
    name: 'Ravintola ja kahvila Kampustalo ',
    address: 'Kalevankatu 35',
    postalCode: '60100',
    city: 'Seinäjoki',
    phone: '050 4776 688 Sodexo keittiö',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.821736, 62.790536]},
    _id: '6470d38ecb12107db6fe24c9',
    companyId: 108,
    name: 'Ravintola Frami',
    address: 'Kampusranta 11',
    postalCode: '60320',
    city: 'Seinäjoki',
    phone: '050 3763 386',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.160741, 63.833899]},
    _id: '6470d38ecb12107db6fe24c8',
    companyId: 129,
    name: 'Campusravintola',
    address: 'Talonpojankatu 2',
    postalCode: '67100',
    city: 'Kokkola',
    phone: '+358 50  560 9064',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.778004, 61.495009]},
    _id: '6470d38ecb12107db6fe24cc',
    companyId: 116,
    name: 'Ravintola Linna',
    address: 'Kalevantie 5',
    postalCode: '33100',
    city: 'Tampere',
    phone: '050 3185 913',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.22723, 60.4396]},
    _id: '6470d38ecb12107db6fe24ce',
    companyId: 100,
    name: 'Ravintola Fiskarholmen - Auriga Business Center',
    address: 'Juhana Herttuan Puistokatu 21',
    postalCode: '20100',
    city: 'Turku',
    phone: 'Aulapalvelu: 050 437 0998 ',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.292545, 60.451904]},
    _id: '6470d38ecb12107db6fe24cd',
    companyId: 102,
    name: 'Flavoria Medisiina D',
    address: 'Kiinamyllynkatu 10 D',
    postalCode: '20520',
    city: 'Turku',
    phone: '0504358013',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [22.300353, 60.452543]},
    _id: '6470d38ecb12107db6fe24cf',
    companyId: 98,
    name: 'Ravintola Old Mill',
    address: 'Ruukinkatu 2-4',
    postalCode: '20540',
    city: 'Turku',
    phone: '02 6510 0200',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [23.997606, 61.279413]},
    _id: '6470d38ecb12107db6fe24d0',
    companyId: 117,
    name: 'Ravintola Koski - HAMK Valkeakoski',
    address: 'Lotilantie 16',
    postalCode: '37630',
    city: 'Valkeakoski',
    phone: '050 4525146',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.062493, 61.494155]},
    _id: '6470d38ecb12107db6fe24d1',
    companyId: 143,
    name: 'Ravintola VIP',
    address: 'Työväenpuistonkatu 10',
    postalCode: '17100',
    city: 'Jyvaskyla',
    phone: '040 829 7484',
    company: 'Sodexo',
    __v: 0,
  }
];



// Filter by City
function filterByCity(city) {
  return restaurants.filter(restaurant => restaurant.city === city);
}

// Calculate Distance Between Two Points
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Find Nearby Restaurants
function findNearbyRestaurants(lat, lon, maxDistanceKm) {
  return restaurants
    .map(restaurant => ({
      ...restaurant,
      distance: calculateDistance(lat, lon, restaurant.location.coordinates[1], restaurant.location.coordinates[0])
    }))
    .filter(restaurant => restaurant.distance <= maxDistanceKm)
    .sort((a, b) => a.distance - b.distance);
}

// Group by Company
function groupByCompany() {
  return restaurants.reduce((acc, restaurant) => {
    if (!acc[restaurant.company]) {
      acc[restaurant.company] = [];
    }
    acc[restaurant.company].push(restaurant);
    return acc;
  }, {});
}

// Initialize the map
const map = L.map('map').setView([60.228982, 25.018456], 12); // Center map on Helsinki

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to add markers for each restaurant
function addRestaurantMarkers(restaurants) {
  restaurants.forEach(restaurant => {
    L.marker([restaurant.location.coordinates[1], restaurant.location.coordinates[0]])
      .bindPopup(`<b>${restaurant.name}</b><br>${restaurant.address}<br>${restaurant.phone}`)
      .addTo(map);
  });
}

// Example Usage
const helsinkiRestaurants = filterByCity('Helsinki');
addRestaurantMarkers(helsinkiRestaurants);

// Optional: add markers for nearby restaurants if needed
const nearbyRestaurants = findNearbyRestaurants(60.228982, 25.018456, 10); // Find restaurants within 10 km
addRestaurantMarkers(nearbyRestaurants);

// Log grouped restaurants by company to the console
console.log('Restaurants Grouped by Company:', groupByCompany());
