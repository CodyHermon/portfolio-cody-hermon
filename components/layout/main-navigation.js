import Link from 'next/link';

import classes from './main-navigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href='/'>Home</Link>
      <Link href='/experience'>Experience</Link>
      <Link href='/contact'>Contact</Link>
    </header>
  );
};

export default MainNavigation;
