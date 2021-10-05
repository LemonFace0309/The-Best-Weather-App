import clsx from 'clsx';
import type { NextPage } from 'next';

import Props from './props';

const DetailedWeatherTable: NextPage<Props> = ({ classes, data }: Props) => {
  return (
    <table className={clsx('table-fixed w-5/6', classes)}>
      <thead>
        <tr>
          <th className="w-9/12 md:w-7/12">Metric</th>
          <th className="w-3/12 md:w-5/12">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>City</td>
          <td className="text-center">{data?.name}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td className="text-center">{data?.country}</td>
        </tr>
        <tr>
          <td>Weather Title</td>
          <td className="text-center">{data?.weather?.summary?.title}</td>
        </tr>
        <tr>
          <td>Weather Description</td>
          <td className="text-center">{data?.weather?.summary?.description}</td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td className="text-center">{data?.weather?.temperature?.actual} °C</td>
        </tr>
        <tr>
          <td>Feels Like</td>
          <td className="text-center">{data?.weather?.temperature?.feelsLike} °C</td>
        </tr>
        <tr>
          <td>Maximum Temperature</td>
          <td className="text-center">{data?.weather?.temperature?.max} °C</td>
        </tr>
        <tr>
          <td>Minimum Temperature</td>
          <td className="text-center">{data?.weather?.temperature?.min} °C</td>
        </tr>
        <tr>
          <td>Wind Speed</td>
          <td className="text-center">{data?.weather?.wind?.speed} m/s</td>
        </tr>
        <tr>
          <td>Wind Degrees</td>
          <td className="text-center">{data?.weather?.wind?.deg}</td>
        </tr>
        <tr>
          <td>Cloudiness</td>
          <td className="text-center">{data?.weather?.clouds?.all}%</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td className="text-center">{data?.weather?.clouds?.visibility}</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td className="text-center">{data?.weather?.clouds?.humidity}%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailedWeatherTable;
