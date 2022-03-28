import Image from 'next/image';
import Link from 'next/link';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <Image
          className={classes.avatar}
          src='/images/cody.jpg'
          alt='cody'
          width={176}
          height={176}
        />
        <h1>Hello, I&apos;m Cody.</h1>
      </div>
      <div className={classes.content}>
        <p>
          I&apos;m a frontend developer based in Vancouver, BC. I graduated with
          a degree in Information Technology from Kwantlen Polytechnic
          University.
        </p>
        <p>
          I have always had a passion for the programming side of IT, so I
          decided to pursue the career of a developer.
        </p>
      </div>
      <div className={classes.buttonsContainer}>
        <Link href='/cv/Cody_Evan_Hermon_Resume.pdf'>
          <a className={classes.button}>Resume</a>
        </Link>
        <Link href='https://www.linkedin.com/in/cody-hermon'>
          <a className={classes.button}>LinkedIn</a>
        </Link>
        <Link href='https://github.com/CodyHermon'>
          <a className={classes.button}>GitHub</a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
