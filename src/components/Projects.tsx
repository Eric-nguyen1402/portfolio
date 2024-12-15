import React from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'Dynamic Robotic Grasping',
      description:
        'Integrating real-time trajectory planning and 6-DoF pose estimation for grasping in poor lighting conditions.',
      imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      link: 'https://eric-nguyen1402.github.io/closedloop.github.io/',
    },
    {
      title: 'Autonomous Navigation of Mobile Robots',
      description:
        'Combines Lidar sensing, RRT*, and Frontier-Based algorithms for enhanced path planning and exploration.',
      imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      link: 'https://eric-nguyen1402.github.io/autonomous-navigation.github.io/',
    },
    {
      title: 'Pose-based EKF SLAM for Robot Localization',
      description:
        'Uses EKF and ICP for pose-based localization with Lidar, IMU, and wheel sensors.',
      imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      link: 'https://eric-nguyen1402.github.io/pose-based-EKF-slam.github.io/',
    },
    {
      title: 'Real-Time 2D Pose Estimation',
      description:
        'A system for real-time colored object pose estimation using computer vision techniques.',
      imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      link: 'https://eric-nguyen1402.github.io/realtime-2d-pose-estimation.github.io/',
    },
    {
      title: 'Kinematic Control for Mobile Manipulator',
      description:
        'Task priority resolution for a mobile manipulator with a differential drive and 4-DOF manipulator.',
      imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
      link: 'https://eric-nguyen1402.github.io/kinematic-control-system.github.io/',
    },
  ];

  console.log('Projects data:', projects); // Debugging data

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.imageUrl} alt={project.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <a
                href={project.link}
                className={styles.cardLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
