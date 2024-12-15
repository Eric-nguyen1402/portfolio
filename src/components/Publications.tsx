import React from 'react';

const Publications = () => {
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
    <div className="publications">
      <h2>Publications</h2>
      {publications.map((pub, index) => (
        <div key={index} className="publication-item" style={{ marginBottom: '20px' }}>
          <h3>{pub.title}</h3>
          {pub.journalName && <p><strong>Journal:</strong> {pub.journalName}</p>}
          {pub.conferenceName && <p><strong>Conference:</strong> {pub.conferenceName}</p>}
          <p><strong>Authors:</strong> {pub.authors}</p>
          <p>{pub.description}</p>
          <a href={pub.link} target="_blank" rel="noopener noreferrer">
            View Publication
          </a>
        </div>
      ))}
    </div>
  );
};

export default Publications;
