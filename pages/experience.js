import Head from 'next/head';
import { Fragment } from 'react';
import ExperienceContent from '../components/experience/experience-content';
import { getAllExperience } from '../lib/experience-util';

const ExperiencePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>My experience</title>
        <meta name='description' content='My experience and skills' />
      </Head>
      <ExperienceContent experience={props.experience} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allExperience = getAllExperience();

  return {
    props: {
      experience: allExperience,
    },
  };
};

export default ExperiencePage;
