import Link from 'next/link';
import { useRouter } from 'next/router';

import classes from './main-navigation.module.css';

const MainNavigation = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <Link href='/'>
        <a className={router.pathname === '/' ? `${classes.activeTab}` : ''}>
          Home
        </a>
      </Link>
      <Link href='/experience'>
        <a
          className={
            router.pathname === '/experience' ? `${classes.activeTab}` : ''
          }
        >
          Experience
        </a>
      </Link>
      <Link href='/contact'>
        <a
          className={
            router.pathname === '/contact' ? `${classes.activeTab}` : ''
          }
        >
          Contact
        </a>
      </Link>
    </header>
  );
};

export default MainNavigation;
