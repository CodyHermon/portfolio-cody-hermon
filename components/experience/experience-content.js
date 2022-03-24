import ExperienceItem from './experience-item';
import Skills from './skills';
import classes from './experience-content.module.css';

const ExperienceContent = (props) => {
  const { experience } = props;
  return (
    <section className={classes.container}>
      <Skills />
      <h2>Experience</h2>
      {experience.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </section>
  );
};

export default ExperienceContent;
