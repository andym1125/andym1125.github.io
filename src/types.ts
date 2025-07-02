//All strings may be empty

//Themes may optionally not use all of these fields, but they should be present in the interface
export interface PersonalInfo {
  name: string;
  location: string; // e.g., "City, State"
  about: string; // A brief description about the person
  github: string; // Optional GitHub profile link
  linkedin: string; // Optional LinkedIn profile link
  jobs: WorkExperience[]; // Array of work experiences
  volunteer: VolunteerExperience[]; // Array of volunteer experiences
  awards: Award[]; // Array of awards
  projects: Project[]; // Array of projects
  skills: Skill[]; // Array of skills
  education: {
    degree: "Bachelor of Science in";
    degreeShort: "B.S.";
    major: "Computer Science";
    minor: "Political Science";
    certificate: "Cybersecurity";
    university: "University of North Texas";
    universityShort: "UNT";
    graduationDate: Date;
    location: "Denton, TX";
    gpa: 4.0;
  };
}

export interface Skill {
  name: string; // Name of the skill
  level: number; // Proficiency level, between 0.0 and 1.0
}

export interface WorkExperience {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date; // Ignored for current positions
  current: boolean;
  location: string;
  descriptionBulletPoints: string[]; // Does not necessarily need to be presented as a bullet list
  technologies: string[];
}

export interface VolunteerExperience {
  organization: string;
  suborganization: string; //May be empty
  position: string;
  startDate: Date;
  endDate: Date; // Ignored for current positions
  current: boolean;
  location: string;
  descriptionBulletPoints: string[]; // Does not necessarily need to be presented as a bullet list
}

export interface Award {
  title: string;
  organization: string;
  date: string | Date; //May be a date, or a month/year, or a semester/year
  location: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  started: Date; // When the project was started
  isUnderDevelopment: boolean; // Whether the project is under development
  link: string; // Optional link to the project
  image: string; // Optional image URL for the project
}
