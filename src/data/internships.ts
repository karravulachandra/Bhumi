export interface Internship {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  image: string;
  certificate?: string;
  skills: string[];
  achievements: string[];
}

export const internships: Internship[] = [
  {
    id: '1',
    title: 'Cloud Virtual Internship',
    company: 'AWS Academy',
    duration: 'July 2024 - September 2024',
    description: 'Successfully completed a 10-week Cloud Virtual Internship through AICTE and EduSkills National Internship Portal. Gained hands-on experience with AWS cloud technologies and services.',
    image: './images/aws-cloud-certificate.jpg',
    certificate: './images/aws-cloud-certificate.jpg',
    skills: ['AWS Cloud', 'Cloud Computing', 'Virtual Internship', 'AICTE Portal'],
    achievements: [
      'Completed 10 weeks of intensive cloud training',
      'Received official certification from AICTE and EduSkills',
      'Gained practical knowledge of AWS cloud services',
      'Achieved Grade B in the internship program'
    ]
  },
  {
    id: '2',
    title: 'Networking Virtual Internship',
    company: 'Zscaler',
    duration: 'April 2025 - June 2025',
    description: 'Successfully completed a 10-week Networking Virtual Internship supported by Zscaler through the National Internship Portal. Focused on network security and platform enablement.',
    image: './images/zscaler-networking-certificate.jpg',
    certificate: './images/zscaler-networking-certificate.jpg',
    skills: ['Network Security', 'Zscaler Platform', 'Virtual Internship', 'Platform Enablement'],
    achievements: [
      'Completed 10 weeks of networking internship',
      'Worked with Zscaler security platform',
      'Received certification from AICTE and EduSkills',
      'Achieved Grade P (Pass) in the program'
    ]
  },
  {
    id: '3',
    title: 'Java Full Stack Developer Virtual Internship',
    company: 'EduSkills Academy',
    duration: 'October 2024 - December 2024',
    description: 'Successfully completed a 10-week Java Full Stack Developer Virtual Internship through AICTE and EduSkills. Gained comprehensive knowledge of front-end and back-end development technologies.',
    image: './images/java-fullstack-certificate.jpg',
    certificate: './images/java-fullstack-certificate.jpg',
    skills: ['Java', 'Spring Boot', 'React', 'Full Stack Development', 'Database Management'],
    achievements: [
      'Completed 10 weeks of full-stack development training',
      'Developed complete web applications',
      'Received AICTE certification',
      'Achieved Grade C in the program'
    ]
  },
  {
    id: '4',
    title: 'Cloud Virtual Internship (Second)',
    company: 'AWS Academy',
    duration: 'July 2024 - September 2024',
    description: 'Another successful completion of a 10-week Cloud Virtual Internship through AICTE and EduSkills National Internship Portal. Enhanced skills in cloud computing and AWS services.',
    image: './images/aws-cloud-certificate-2.jpg',
    certificate: './images/aws-cloud-certificate-2.jpg',
    skills: ['AWS Cloud', 'Cloud Computing', 'Virtual Internship', 'AICTE Portal'],
    achievements: [
      'Completed 10 weeks of advanced cloud training',
      'Received official certification from AICTE and EduSkills',
      'Enhanced cloud computing expertise',
      'Achieved Grade B in the internship program'
    ]
  },
  {
    id: '5',
    title: 'Additional Virtual Internship',
    company: 'Professional Academy',
    duration: 'January 2025 - March 2025',
    description: 'Successfully completed an additional virtual internship program focusing on professional development and industry skills enhancement.',
    image: './images/internship5.jpg',
    certificate: './images/internship5.jpg',
    skills: ['Professional Development', 'Industry Skills', 'Virtual Internship', 'Career Growth'],
    achievements: [
      'Completed comprehensive professional training',
      'Enhanced industry-specific skills',
      'Received professional certification',
      'Achieved excellent performance rating'
    ]
  }
];
