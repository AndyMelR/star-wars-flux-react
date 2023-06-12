const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		characters: [],
		planets: [],
		vehicles: [],
		favorites: []
	  },
  
	  actions: {
		getAllCharacters: async () => {
		  try {
			const response = await fetch("https://www.swapi.tech/api/people");
			const data = await response.json();
  
			const characters = data.results.map(character => ({
			  uid: character.uid,
			  name: character.name
			}));
			console.log(characters)
  
			setStore(prevState => ({
			  ...prevState,
			  characters: characters
			}));

			console.log (store.characters)
		  } catch (error) {
			console.error("Error fetching characters:", error);
		  }
		},
  
		getAllPlanets: async () => {
		  try {
			const response = await fetch("https://swapi.dev/api/planets/");
			const data = await response.json();
  
			const planets = data.results.map(planet => ({
			  uid: planet.url.split("/").slice(-2, -1)[0],
			  name: planet.name
			}));
  
			setStore(prevState => ({
			  ...prevState,
			  planets: planets
			}));
		  } catch (error) {
			console.error("Error fetching planets:", error);
		  }
		},
  
		getAllVehicles: async () => {
		  try {
			const response = await fetch("https://swapi.dev/api/vehicles/");
			const data = await response.json();
  
			const vehicles = data.results.map(vehicle => ({
			  uid: vehicle.url.split("/").slice(-2, -1)[0],
			  name: vehicle.name
			}));
  
			setStore(prevState => ({
			  ...prevState,
			  vehicles: vehicles
			}));
		  } catch (error) {
			console.error("Error fetching vehicles:", error);
		  }
		},
  
		setFavorites: name => {
		  const store = getStore();
		  setStore(prevState => ({
			...prevState,
			favorites: [...store.favorites, name]
		  }));
		},
  
		deleteFavorites: name => {
		  const store = getStore();
		  let newFavorites = store.favorites.filter(item => item !== name);
		  setStore(prevState => ({
			...prevState,
			favorites: newFavorites
		  }));
		}
	  }
	};
  };
  
  export default getState;
  