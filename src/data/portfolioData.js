// Projects data
export const projects = [
    { 
      id: 1, 
      title: 'student portal app', 
      category: 'Web Development', 
      image: '/api/studentportal.png', 
      description: 'A full-stack plattform with MERN stack' 
    },
    { 
      id: 2, 
      title: 'portfolio App', 
      category: 'UI/UX Design', 
      image: '/api/portfolio.png', 
      description: 'A full responsive portfolio website with Next.js with some dependencies' 
    },
    { 
      id: 3, 
      title: 'CRUD App', 
      category: 'mern stack proejcts', 
      image: '/api/crudapp.png', 
      description: 'An application where you can perfom CRUD operations with mern stack' 
    },
    { 
      id: 4, 
      title: 'Adverts', 
      category: 'UI/UX Design', 
      image: '/api/poster.ppg', 
      description: 'A job advert poster using vite/React with some dependencies' 
    }
  ];
  
  // Skills data
  export const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'MERN stack', level: 75 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'python', level: 70 }
  ];
  
  // Experience data
  export const experiences = [
    { 
      position: 'junior Frontend Developer', 
      company: 'Tech Expo', 
      period: '2023 - Present',
      description: 'Leading the frontend team in developing cutting-edge web applications'
    },
    { 
      position: 'UI/UX Designer', 
      company: 'Designcamp', 
      period: '2022 - 2024',
      description: 'Created user-centered designs for various web and mobile platforms'
    },
    { 
      position: 'Junior Developer', 
      company: 'Tech map', 
      period: '2023 - 2024',
      description: 'Worked on full-stack development for early-stage startups'
    }
  ];
  
  // Page transitions
  export const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };