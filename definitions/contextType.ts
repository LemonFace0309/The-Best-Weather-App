import cityData from './cityData';

type contextType = {
  currentCity: cityData;
  setCurrentCity: (data: cityData) => void;
  cities: cityData[];
  setCities: (data: cityData[]) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export default contextType;
