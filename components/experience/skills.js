import classes from './skills.module.css';

const Skills = () => {
  return (
    <section>
      <h2>Skills</h2>
      <ul className={classes.skills}>
        <li>
          <p>React</p>
          <i className='devicon-react-original'></i>
        </li>
        <li>
          <p>Nextjs</p>
          <i className='devicon-nextjs-original'></i>
        </li>
        <li>
          <p>Javascript</p>
          <i className='devicon-javascript-plain'></i>
        </li>
        <li>
          <p>HTML</p>
          <i className='devicon-html5-plain'></i>
        </li>
        <li>
          <p>CSS</p>
          <i className='devicon-css3-plain'></i>
        </li>
        <li>
          <p>C#</p>
          <i className='devicon-csharp-plain'></i>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
