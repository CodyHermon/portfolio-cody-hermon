import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const experienceDirectory = path.join(process.cwd(), 'content/experience');

export const getExperienceFiles = () => {
  return fs.readdirSync(experienceDirectory);
};

export const getExperienceData = () => {
  const filePath = path.join(experienceDirectory, 'experience.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const experienceData = {
    ...data,
    content: content,
  };

  return experienceData;
};

export const getAllExperience = () => {
  const experienceFiles = getExperienceFiles();

  const allExperience = experienceFiles.map((experienceFile) =>
    getExperienceData(experienceFile)
  );

  return allExperience;
};
