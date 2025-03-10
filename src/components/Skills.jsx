
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'SASS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'Figma']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
