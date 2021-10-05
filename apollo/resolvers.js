const axios = require('axios');

const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.KEY}`;

const resolvers = {
  Query: {
    getCityByName: async (obj, args, context, info) => {
      // name is required | country and config are optional
      const { name, country, config } = args;
      let url = `${WEATHER_API}&q=${name}`;

      if (country) url = url + `,${country}`;
      url = url + `&units=${config?.units ?? 'metric'}`;
      if (config?.lang) url = url + `&lang=${config.lang}`;

      try {
        const { data } = await axios.get(url);

        if (country && country.toUpperCase() !== data.sys.country) {
          throw new Error(`Country code was invalid: ${country}`);
        }

        return {
          id: data.id,
          name: data.name,
          country: data.sys.country,
          coord: data.coord,
          weather: {
            summary: {
              title: data.weather[0].main,
              description: data.weather[0].description,
              icon: data.weather[0].icon,
            },
            temperature: {
              actual: data.main.temp,
              feelsLike: data.main.feels_like,
              min: data.main.temp_min,
              max: data.main.temp_max,
            },
            wind: {
              speed: data.wind.speed,
              deg: data.wind.deg,
            },
            clouds: {
              all: data.clouds.all,
              visibility: data.visibility,
              humidity: data.main.humidity,
            },
            timestamp: data.dt,
          },
        };
      } catch (e) {
        return null;
      }
    },
  },
};

export default resolvers;
