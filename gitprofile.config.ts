// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Eric-nguyen1402', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Dynamic Robotic Grasping: A Combination of Real-Time Trajectory Planning and ML-Based Novel Object Pose Detection',
          description:
            'This thesis explores integrating real-time grasping with 6-DoF pose estimation and online trajectory optimization to improve performance in challenging conditions like poor lighting and novel objects, crucial for industrial manufacturing.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://eric-nguyen1402.github.io/closedloop.github.io/',
        },
        {
          title: 'Autonomous Navigation of Mobile Robots: Integrating Lidar, RRT*,and Frontier-Based Algorithms for Path Planning, Exploration, and Motion Control',
          description:
            'A comprehensive approach that combines Lidar sensing, Rapidly-exploring Random Trees* (RRT*), and Frontier-Based algorithms to achieve enhanced path planning, exploration, and motion control for mobile robots. The integration of these techniques addresses the challenges of obstacle avoidance, real-time decision-making, and efficient exploration.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://eric-nguyen1402.github.io/autonomous-navigation.github.io/',
        },
        {
          title: 'Pose-based EKF SLAM for Robot Localization',
          description:
            'A study on pose-based SLAM using EKF for robot localization, specifically focusing on a differential drive robot equipped with Lidar, IMU, and wheel velocity sensors. The mapping algorithm utilized is the Iterative Closest Point (ICP), while the Extended Kalman filter is employed for state estimation.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://eric-nguyen1402.github.io/pose-based-EKF-slam.github.io/',
        },
        {
          title: 'Real Time 2D Pose Estimation For Robot Parts Picking',
          description:
            'This project aims to develop a real-time 2D pose estimation system for colored objects using computer vision techniques. The system utilizes a color camera to capture video of a scene with different colored objects placed on a plane.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://eric-nguyen1402.github.io/realtime-2d-pose-estimation.github.io/',
        },
        {
          title: 'Development and Implementation of a Kinematic Control System for a Mobile Manipulator',
          description:
            'The design and implementation of a kinematic control system for a mobile manipulator, specifically a differential drive robot (Kobuki Turtlebot 2) with a 4 DOF manipulator (uFactory uArm Swift Pro). The goal is to develop a task priority resolution algorithm to control the robot’s movements efficiently.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://eric-nguyen1402.github.io/kinematic-control-system.github.io/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Huy Nguyen',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'hoang-huy-eric-nguyen-6b0653199',
    GoogleScholar: 'Huy Hoang Nguyen',
    youtube: 'ericnguyen9607',
    phone: '',
    email: 'huy-hoang.nguyen@ait.ac.at',
  },
  // resume: {
  //   fileUrl:
  //     'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  // },
  skills: [
    'Python',
    'ROS',
    'ROS2',
    'C',
    'C++',
    'Pytorch',
    'Git',
    'Docker'
  ],
  experiences: [
     {
      company: 'AIT Austrian Institue of Technology',
      position: 'Junior Scientist',
      from: 'September 2024',
      to: 'Present',
      companyLink: 'https://www.ait.ac.at/ueber-das-ait/center/center-for-vision-automation-control/complex-dynamical-systems',
    },
    {
      company: 'Vienna University of Technology',
      position: 'Visiting Researcher',
      from: 'January 2024',
      to: 'August 2024',
      companyLink: 'https://www.tuwien.at/',
    },
    {
      company: 'The Construct',
      position: 'A Robotics Ambassador',
      from: 'December 2023',
      to: 'June 2024',
      companyLink: 'https://www.theconstruct.ai/',
    },
     {
      company: 'Metalmaker 3D Company',
      position: 'Embedded AI Engineer Team Leader',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://metalmaker3d.com/',
    },
     {
      company: 'MPF Drive – Unique Product & Design Company',
      position: 'Embedded Software Engineer',
      from: 'February 2020',
      to: 'February 2022',
      companyLink: 'https://www.mpfdrive.tw/public/index.php',
    },
    {
      company: 'Southern Taiwan University of Science and Technology',
      position: 'Research Assistant',
      from: 'January 2021',
      to: 'February 2022',
      companyLink: 'https://www.stust.edu.tw/en/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
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
      degree: 'Bachelor of Engineering in Mechatronic Engineering ',
      from: 'September 2015',
      to: 'June 2018',
    },
  ],
  publications: [
     {
      title: 'GraspMamba: A Mamba-based Language-driven Grasp Detection Framework with Hierarchical Feature Learning',
      conferenceName: '',
      journalName: 'arXiv',
      authors: 'Huy Hoang Nguyen, An Vuong, Anh Nguyen, Ian Reid, Minh Nhat Vu',
      link: 'https://arxiv.org/abs/2409.14403',
      description:
        'GraspMamba, a new language-driven grasp detection method that employs hierarchical feature fusion with Mamba vision to tackle these challenges',
    },
    {
      title: 'Language-Driven Closed-Loop Grasping with Model-Predictive Trajectory Replanning',
      conferenceName: '',
      journalName: 'arXiv',
      authors: 'Huy Hoang Nguyen,  Minh Nhat Vu, Florian Beck, Gerald Ebmer, Anh Nguyen, Andreas Kugi',
      link: 'https://language-driven-closed-loop-grasping.github.io/',
      description:
        'A modular zero-shot framework for language-driven manipulation of (dynamic) objects through a closed-loop control system with real-time trajectory replanning and an online 6D object pose localization',
    },
    {
      title: 'The Development of a Machine Vision System for Postharvest Processing of Achacha Fruits',
      conferenceName: 'Sriwijaya International Conference on Engineering and Technology 2021',
      journalName: '',
      authors: 'Quoc Thien Pham, Hoang Huy Nguyen and Nai-Shang Liou',
      link: 'https://pubs.aip.org/aip/acp/article-abstract/2689/1/030006/2903595/The-development-of-a-machine-vision-system-for?redirectedFrom=fulltext',
      description:
        'This study developed and integrated a machine vision-based classification apparatus into a postharvest processing system of achacha fruits.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Eric-nguyen1402/portfolio"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
