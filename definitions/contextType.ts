import cityData from './cityData';

type contextType = {
  currentCity: cityData;
  setCurrentCity: (data: cityData) => void;
};

export default contextType;
