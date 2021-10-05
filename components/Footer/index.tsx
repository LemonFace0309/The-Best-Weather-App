import type { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <div>
      <p className="py-8 text-sm font-light text-center dark:text-white-700 text-black-700">
        <a
          href="https://github.com/LemonFace0309/personal-website-2.0"
          target="_blank"
          className="hover:opacity-80 transition-opacity"
          rel="noreferrer">
          Crafted for Up Deck. Please hire me{' '}
          <span role="img" aria-label="heart-emoji">
            ❤️
          </span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
