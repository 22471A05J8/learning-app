import React from 'react';
import './Course.css';
import DashboardLayout from './Dashboard';


 const cards = [
  {
    title: 'Web Development',
    description: 'Build modern, responsive websites using HTML, CSS, JavaScript, and frameworks like Bootstrap and Tailwind.',
    link1: 'https://grotto-networking.com/WebDevTopics.html',
    link2: 'https://northell.design/wp-content/uploads/2021/11/A_Complete_Web_Development_Guide_For_Non_Technical_Startup_Founder.pdf',
  },
  {
    title: 'C Programming',
    description: 'Master the fundamentals of programming and memory management using C language.',
    link1: '',
    link2: 'https://vardhaman.org/wp-content/uploads/2021/03/CP.pdf',
  },
  {
    title: 'Java',
    description: 'Develop scalable applications with Java, OOP principles, and build GUI, console, or web apps.',
    link1: '#java-course',
    link2: 'https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf',
  },
  {
    title: 'Python',
    description: 'Learn Python programming for automation, data analysis, AI, and full-stack development.',
    link1: '#python-course',
    link2: 'https://www.bu.edu/lernet/artemis/years/2011/slides/python.pdf',
  },
  {
    title: 'Cybersecurity',
    description: 'Understand network security, ethical hacking, penetration testing, and cybersecurity protocols.',
    link1: '#cybersecurity-course',
    link2: 'https://www.ftc.gov/system/files/attachments/cybersecurity-small-business/cybersecuirty_sb_factsheets_all.pdf',
  },
  {
    title: 'Node.js',
    description: 'Build fast and scalable backend applications using Node.js, Express, and MongoDB.',
    link1: '#nodejs-course',
    link2: 'https://moscow-city.guide/upload/iblock/8ce/8ceee361e68ff14b4e2aa66575be659d.pdf',
  },
  {
    title: 'React',
    description: 'Create dynamic user interfaces using React.js with hooks, components, and state management.',
    link1: '#react-course',
    link2: 'https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf',
  },
  {
    title: 'Android Development',
    description: 'Develop mobile apps for Android using Java, Kotlin, and Android Studio.',
    link1: '#android-course',
    link2: 'https://www.tutorialspoint.com/android/android_tutorial.pdf',
  }
];



const CardGrid = () => {
  return (
    <>
      <DashboardLayout />
      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="card-links">
              <a href={card.link1} className="card-btn">topics</a>
              <a href={card.link2} className="card-btn secondary">Explore</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardGrid;
