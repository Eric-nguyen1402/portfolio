import React, { useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const githubUsername = 'Eric-nguyen1402'; // Replace with your GitHub username

  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    // Fetch avatar from GitHub API
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((response) => response.json())
      .then((data) => {
        setAvatarUrl(data.avatar_url); // Set the avatar URL dynamically
      })
      .catch((error) => console.error('Error fetching GitHub avatar:', error));
  }, []);

  const profile = {
    name: 'Huy (Eric) Nguyen',
    title: 'Junior Scientist with a great passion for Vision Language Model and Robotics',
    location: 'Vienna',
    organization: 'AIT Austrian Institute of Technology',
    github: githubUsername,
    linkedin: 'hoang-huy-eric-nguyen-6b0653199',
    youtube: '@ericnguyen9607',
    email: 'huy-hoang.nguyen@ait.ac.at',
  };

  return (
    <div className={styles.container}>
      {/* Profile Section */}
      <div className={styles.profileCard}>
        <img
          src={avatarUrl || 'https://via.placeholder.com/150'} // Fallback in case of fetch error
          alt="Profile"
          className={styles.profileImage}
        />
        <h1 className={styles.profileName}>{profile.name}</h1>
        <p className={styles.profileTitle}>{profile.title}</p>
      </div>

      {/* Contact Info Section */}
      <div className={styles.infoCard}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>📍 Based in:</span>
          <span>{profile.location}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>🏢 Organization:</span>
          <span>{profile.organization}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>🐙 GitHub:</span>
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.github}
          </a>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>🔗 LinkedIn:</span>
          <a
            href={`https://www.linkedin.com/in/${profile.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.linkedin}
          </a>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>📺 YouTube:</span>
          <a
            href={`https://youtube.com/${profile.youtube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.youtube}
          </a>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>📧 Email:</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
