import type { NextPage } from 'next';

import Meta from './libs/Meta';
import Props from './props';

const Layout: NextPage<Props> = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <main className="min-h-screen font-sans bg-lightTheme dark:bg-darkTheme transition-colors flex flex-col">
        {children}
      </main>
    </>
  );
};

export default Layout;
