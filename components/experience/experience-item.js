import ReactMarkdown from 'react-markdown';

import classes from './experience-item.module.css';

const ExperienceItem = (props) => {
  const { title, date, role, content } = props.experience;
  return (
    <section className={classes.container}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{role}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  );
};

export default ExperienceItem;
