import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Smart Food Monitoring System Using Cameras and AI',
    description: 'This project detects spoilage in packed and unpacked food using a camera powered by the YOLOv8 model. A custom-trained dataset was used to identify visual signs of spoilage. The backend was developed using Python (Flask), while OpenCV and PIL were used for image processing. Real-time results were transmitted to a ReactJS frontend for instant display. The system enhances food safety and helps in reducing food wastage through timely alerts.',
    image: '/api/placeholder/400/250',
    techStack: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'PIL', 'ReactJS', 'AI/ML'],
    githubUrl: 'https://github.com/yourusername/food-monitoring-system',
    demoUrl: 'https://food-monitoring-demo.netlify.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Dairy Farm Monitoring System Using Solar Panels and IoT Sensors',
    description: 'This system monitors ambient temperature in dairy farms using IoT sensors and automatically activates a cooling system to protect cattle from heat stress. The entire setup is powered by solar panels to ensure energy efficiency and sustainability. Built using Arduino, embedded programming in C, and various IoT modules, the system improves cattle comfort and ultimately enhances milk productivity.',
    image: '/api/placeholder/400/250',
    techStack: ['Arduino', 'C Programming', 'IoT Sensors', 'Solar Panels', 'Embedded Systems'],
    githubUrl: 'https://github.com/yourusername/dairy-monitoring-system',
    demoUrl: 'https://dairy-monitoring-demo.netlify.app',
    featured: true,
  },
];

