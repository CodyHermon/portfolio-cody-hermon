import Link from 'next/link';

import classes from './footer.module.css';

const Footer = () => {
  return (
    <section className={classes.footer}>
      <ul className={classes.links}>
        <Link href='https://www.linkedin.com/in/cody-hermon'>
          <a>
            <i className='devicon-linkedin-plain'></i>
          </a>
        </Link>
        <li>
          <Link href='https://github.com/CodyHermon'>
            <a>
              <i className='devicon-github-original'></i>
            </a>
          </Link>
        </li>
      </ul>
      <p>&copy; Cody Hermon 2022</p>
    </section>
  );
};

export default Footer;
