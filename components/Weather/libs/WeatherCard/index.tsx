import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { BsClouds } from 'react-icons/bs';

import Props from './props';
import WindIcon from './WindIcon';

const WeatherCard: NextPage<Props> = ({ data, custom = 0, controls = false, classes, onClick = () => null }: Props) => {
  return (
    <motion.div
      className={clsx('flex justify-center m-2 cursor-pointer', classes)}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
        hover: {
          y: -3,
        },
      }}
      animate={controls || 'visible'}
      custom={custom}
      onClick={() => onClick(custom)}>
      <div className="card min-w-sm max-w-sm border border-gray-100 bg-gray-50 transition-shadow shadow-lg hover:shadow-shadow-xl w-full bg-green-600 text-purple-50 rounded-md">
        <h2 className="text-md mb-2 px-4 pt-4">
          <div className="flex justify-between">
            <div className="badge relative top-0">
              <span className="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4">
                {data?.name}
              </span>
            </div>
            <span className="text-lg font-bold ">{data?.weather?.summary?.title}</span>
          </div>
        </h2>

        <div className="flex items-center p-4">
          <div className="flex justify-center items-center w-96">
            <svg height="20" width="20" viewBox="0 0 32 32" className="fill-current h-32 w-32 text-yellow-300">
              <path
                d="M21.743,18.6872A6.05,6.05,0,0,0,22.8,17.6006a5.9977,5.9977,0,1,0-10.7334-4.4444,7.5568,7.5568,0,0,0-5.7158,5.0879A5.9926,5.9926,0,0,0,8,30H19a5.9854,5.9854,0,0,0,2.743-11.3128ZM18,10a4.0042,4.0042,0,0,1,4,4,3.9613,3.9613,0,0,1-.8,2.3994,4.0122,4.0122,0,0,1-.94.8917,7.5416,7.5416,0,0,0-6.1339-4.2395A3.9985,3.9985,0,0,1,18,10Zm1,18H8a3.9928,3.9928,0,0,1-.6729-7.93L7.99,19.958l.1456-.6562a5.4958,5.4958,0,0,1,10.729,0l.1464.6562.6622.1123A3.9928,3.9928,0,0,1,19,28Z"
                transform="translate(0 .005)"></path>
              <path d="M26 13.005H30V15.005H26z"></path>
              <path d="M23.071 5.929H27.071V7.929H23.071z" transform="rotate(-45 25.077 6.931)"></path>
              <path d="M17 2.005H19V6.005H17z"></path>
              <path d="M9.929 4.929H11.929V8.929H9.929z" transform="rotate(-45 10.935 6.931)"></path>
            </svg>
          </div>
        </div>
        <div className="text-md pt-4 pb-4 px-4">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <span className="flex space-x-2 items-center">
                <abbr title="Wind Speed">
                  <WindIcon />
                </abbr>
                <span>{data?.weather?.wind?.speed} m/s</span>
              </span>
              <span className="flex space-x-2 items-center">
                <abbr title="Cloudiness">
                  <BsClouds style={{ width: '20', height: '20' }} />
                </abbr>
                <span>{data?.weather?.clouds?.all}%</span>
              </span>
            </div>
            <div>
              <h1 className="text-6xl"> {Math.round(data?.weather?.temperature?.actual)}°C </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
