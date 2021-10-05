import clsx from 'clsx';
import type { NextPage } from 'next';

import DetailedWeatherTable from '../DetailedWeatherTable';
import WeatherCard from '../WeatherCard';
import Props from './props';

const DetailedWeatherCard: NextPage<Props> = ({ classes, data }: Props) => {
  return (
    <div className={clsx('flex flex-col justify-center items-center', classes)}>
      <WeatherCard classes="mb-12" data={data} />
      <DetailedWeatherTable classes="mb-12" data={data} />
    </div>
  );
};

export default DetailedWeatherCard;
