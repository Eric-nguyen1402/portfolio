import React from 'react';
import styles from '../styles/MainSection.module.css';

const MainSection = () => {
    const skills = [
        'Python',
        'ROS',
        'ROS2',
        'C',
        'C++',
        'Pytorch',
        'Git',
        'Docker',
      ];
  const experiences = [
    {
      title: 'Visiting Researcher',
      company: 'Vienna University of Technology',
      duration: 'January 2024 - Present',
    },
    {
      title: 'A Robotics Ambassador',
      company: 'The Construct',
      duration: 'December 2023 - June 2024',
    },
    {
      title: 'Embedded AI Engineer Team Leader',
      company: 'Metalmaker 3D Company',
      duration: 'June 2023 - August 2023',
    },
    {
      title: 'Embedded Software Engineer',
      company: 'MPF Drive – Unique Product & Design Company',
      duration: 'February 2020 - February 2022',
    },
    {
      title: 'Research Assistant',
      company: 'Southern Taiwan University of Science and Technology',
      duration: 'January 2021 - February 2022',
    },
  ];

  const education = [
    {
      institution: 'Eötvös Loránd University',
      degree: 'ERASMUS MUNDUS JOINT MASTER Degree',
      from: 'September 2023',
      to: 'June 2024',
    },
    {
      institution: 'University of Girona',
      degree: 'ERASMUS MUNDUS JOINT MASTER Degree',
      from: 'September 2022',
      to: 'June 2023',
    },
    {
      institution: 'Southern Taiwan University of Science and Technology',
      degree: 'Bachelor of Science in Electrical Engineering',
      from: 'September 2018',
      to: 'January 2020',
    },
    {
      institution: 'HCMC University of Technology and Education',
      degree: 'Bachelor of Engineering in Mechatronic Engineering',
      from: 'September 2015',
      to: 'June 2018',
    },
  ];

  const publications = [
    {
      title: 'GraspMamba: A Mamba-based Language-driven Grasp Detection Framework with Hierarchical Feature Learning',
      journalName: 'arXiv',
      authors: 'Huy Hoang Nguyen, An Vuong, Anh Nguyen, Ian Reid, Minh Nhat Vu',
      link: 'https://arxiv.org/abs/2409.14403',
      description:
        'GraspMamba, a new language-driven grasp detection method that employs hierarchical feature fusion with Mamba vision to tackle these challenges.',
    },
    {
      title: 'Language-Driven Closed-Loop Grasping with Model-Predictive Trajectory Replanning',
      journalName: 'arXiv',
      authors: 'Huy Hoang Nguyen, Minh Nhat Vu, Florian Beck, Gerald Ebmer, Anh Nguyen, Andreas Kugi',
      link: 'https://language-driven-closed-loop-grasping.github.io/',
      description:
        'A modular zero-shot framework for language-driven manipulation of (dynamic) objects through a closed-loop control system with real-time trajectory replanning and an online 6D object pose localization.',
    },
    {
      title: 'The Development of a Machine Vision System for Postharvest Processing of Achacha Fruits',
      conferenceName: 'Sriwijaya International Conference on Engineering and Technology 2021',
      authors: 'Quoc Thien Pham, Hoang Huy Nguyen, and Nai-Shang Liou',
      link: 'https://pubs.aip.org/aip/acp/article-abstract/2689/1/030006/2903595/The-development-of-a-machine-vision-system-for?redirectedFrom=fulltext',
      description:
        'This study developed and integrated a machine vision-based classification apparatus into a postharvest processing system of achacha fruits.',
    },
  ];


  return (
    <div className={styles.container}>
      {/* Left Side */}
      <div className={styles.leftSection}>
         {/* Tech Stack */}
         <div className={styles.skillsSection}>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
            <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                <span key={index} className={styles.skillBadge}>
                    {skill}
                </span>
                ))}
            </div>
        </div>
        
        <div className={styles.experience}>
          <h2>Experience</h2>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.item}>
              <p className={styles.duration}>{exp.duration}</p>
              <h3 className={styles.title}>{exp.title}</h3>
              <p className={styles.company}>{exp.company}</p>
            </div>
          ))}
        </div>

        <div className={styles.education}>
            <h2>Education</h2>
            {education.map((edu, index) => (
                <div key={index} className={styles.item}>
                <p className={styles.duration}>
                    {edu.from} - {edu.to}
                </p>
                <h3 className={styles.title}>{edu.degree}</h3>
                <p className={styles.company}>{edu.institution}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.rightSection}>
        <h2 className={styles.sectionTitle}>Publications</h2>
        {publications.map((pub, index) => (
            <div key={index} className={styles.card}>
            {/* Title */}
            <h3 className={styles.pubTitle}>{pub.title}</h3>

            {/* Authors */}
            <p className={styles.pubAuthors}>
                <strong>Authors:</strong> {pub.authors}
            </p>

            {/* Journal or Conference */}
            {pub.journalName && (
                <p className={styles.pubJournal}>
                <strong>Journal:</strong> {pub.journalName}
                </p>
            )}
            {pub.conferenceName && (
                <p className={styles.pubJournal}>
                <strong>Conference:</strong> {pub.conferenceName}
                </p>
            )}

            {/* Description */}
            <p className={styles.pubDescription}>{pub.description}</p>

            {/* Read More Link */}
            <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.readMore}
            >
                Read More
            </a>
            </div>
        ))}
        </div>

    </div>
  );
};

export default MainSection;
