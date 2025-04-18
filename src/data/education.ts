import { Education } from '../types';

export const education: Education[] = [
  {
    id: 'embry-riddle',
    institution: 'Embry-Riddle Aeronautical University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2023-01',
    endDate: '2025-05', // Expected graduation
    location: 'Daytona Beach, FL',
    achievements: [
      'Currently enrolled with expected graduation in 2024/2025',
      'Focus on software development and systems engineering',
      'Pursuing relevant certifications alongside degree program'
    ]
  }
];

export default education;
