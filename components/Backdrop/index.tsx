/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import type { NextPage } from 'next';

import Props from './props';

const Backdrop: NextPage<Props> = ({ show, closeSearch }: Props) => {
  return show ? (
    <div
      onClick={closeSearch}
      className="w-screen h-screen fixed z-30 top-0 left-0 opacity-80 bg-white-900 dark:bg-black-900"
    />
  ) : null;
};

export default Backdrop;
