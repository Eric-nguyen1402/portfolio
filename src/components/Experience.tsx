import React from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Junior Scientist',
      company: 'AIT Austrian Institute of Technology',
      companyLink:
        'https://www.ait.ac.at/ueber-das-ait/center/center-for-vision-automation-control/complex-dynamical-systems',
      duration: 'September 2024 - Present',
      icon: 'fas fa-flask',
    },
    {
      title: 'Visiting Researcher',
      company: 'Vienna University of Technology',
      companyLink: 'https://www.tuwien.at/',
      duration: 'January 2024 - August 2024',
      icon: 'fas fa-university',
    },
    {
      title: 'A Robotics Ambassador',
      company: 'The Construct',
      companyLink: 'https://www.theconstruct.ai/',
      duration: 'December 2023 - June 2024',
      icon: 'fas fa-robot',
    },
    {
      title: 'Embedded AI Engineer Team Leader',
      company: 'Metalmaker 3D Company',
      companyLink: 'https://metalmaker3d.com/',
      duration: 'June 2023 - August 2023',
      icon: 'fas fa-microchip',
    },
    {
      title: 'Embedded Software Engineer',
      company: 'MPF Drive – Unique Product & Design Company',
      companyLink: 'https://www.mpfdrive.tw/public/index.php',
      duration: 'February 2020 - February 2022',
      icon: 'fas fa-code',
    },
    {
      title: 'Research Assistant',
      company: 'Southern Taiwan University of Science and Technology',
      companyLink: 'https://www.stust.edu.tw/en/',
      duration: 'January 2021 - February 2022',
      icon: 'fas fa-book-open',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.grid}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <i className={`${exp.icon} ${styles.icon}`}></i>
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{exp.title}</h3>
              <p>
                <strong>Company:</strong>{' '}
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.companyLink}
                >
                  {exp.company}
                </a>
              </p>
              <p>
                <strong>Duration:</strong> {exp.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
