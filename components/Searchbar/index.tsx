import type { NextPage } from 'next';

import Backdrop from '../Backdrop';
import Search from './libs/Search';
import Props from './props';

const Searchbar: NextPage<Props> = ({ show, closeSearch }: Props) => {
  return (
    <>
      <Backdrop show={show} closeSearch={closeSearch} />
      <Search show={show} closeSearch={closeSearch} />
    </>
  );
};

export default Searchbar;
