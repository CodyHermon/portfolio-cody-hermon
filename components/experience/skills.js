import classes from './skills.module.css';

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      <ul className={classes.skills}>
        <li>
          <i className='devicon-react-original'></i>
        </li>
        <li>
          <i className='devicon-nextjs-original'></i>
        </li>
        <li>
          <i className='devicon-javascript-plain'></i>
        </li>
        <li>
          <i className='devicon-html5-plain'></i>
        </li>
        <li>
          <i className='devicon-css3-plain'></i>
        </li>
        <li>
          <i className='devicon-csharp-plain'></i>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
