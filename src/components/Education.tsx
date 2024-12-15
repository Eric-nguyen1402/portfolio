import React from 'react';

const Education = () => {
  const educations = [
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

  return (
    <div className="education" style={{ padding: '20px' }}>
      <h2>Education</h2>
      {educations.map((edu, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <h3>{edu.degree}</h3>
          <p>
            <strong>Institution:</strong> {edu.institution}
          </p>
          <p>
            <strong>Duration:</strong> {edu.from} - {edu.to}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
