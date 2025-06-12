import EducationItem from "./EducationItem";
import Hero from "./Hero";
import JobItem from "./JobItem";
import Section from "./Section";

const HomePage = () => {
  const workExperience = [
    {
      title: "CSCE Peer Mentor",
      company: "UNT CSCE Department",
      dateRange: "Sep 2023 - Present",
      location: "Denton, TX",
      bulletPoints: [
        "• Tailored personalized tutoring plans for each student, adapting teaching styles to match their unique learning preferences and pace.",
        "• Supplemented communication and explanation using effective verbal skills, diagrams, analogies, and examples."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Triumph Financial",
      dateRange: "July 2023 - Sept 2023",
      location: "Dallas, TX",
      bulletPoints: [
        "• Engineered enhancements for an event sourced CQRS invoice decisioning system using C# .NET and Kafka.",
        "• Achieved over 10% increase in code coverage across two repositories, mitigating technical debt and ensuring more robust code quality.",
        "• Presented comprehensive research findings on viable Document Management System solutions to management, outlining technological methodologies and highlighting their tangible business applications, and drafted a Request for Proposal to distribute to three selected vendors."
      ]
    },
    {
      title: "Software Engineer",
      company: "Sonr Inc",
      dateRange: "July 2022 - Nov 2022",
      location: "Brooklyn, NY",
      bulletPoints: [
        "• Led Go-based internal blockchain search tool development, which utilized gRPC and REST to enhance team efficiency.",
        "• Maintained Cosmos-integrated applications, ensuring seamless functionality.",
        "• Proactively upgraded skills and stayed current with industry trends."
      ]
    }
  ];

  const leadershipExperience = [
    {
      title: "President",
      company: "HackUNT",
      dateRange: "Jan 2022 - Present",
      location: "University of North Texas",
      bulletPoints: [
        "• Led team of 10 to host competitive design & programming event with 200 participants and $20,000 in sponsorships."
      ]
    },
    {
      title: "Chair of Strategy",
      company: "Student Alumni Association",
      dateRange: "Aug 2022 - Present",
      location: "University of North Texas",
      bulletPoints: [
        "• Designed and implemented the goals of an organization of 30 students, including the integration of professional development events."
      ]
    },
    {
      title: "Member",
      company: "UNT Presidential Search Committee",
      dateRange: "Feb 2024 - Present",
      location: "University of North Texas System",
      bulletPoints: [
        "• Represented over 45,000 North Texas students, championing the student perspective in the search for UNT's next president."
      ]
    },
    {
      title: "Student Regent",
      company: "UNTS Board of Regents",
      dateRange: "May 2022 - June 2023",
      location: "University of North Texas System",
      bulletPoints: [
        "• Represented over 47,000 North Texas students, facilitating communication between student body and Board of Regents, resulting in the resolution of 3 student-related issues and the establishment of a new student-focused System-wide values culture."
      ]
    },
    {
      title: "Eagle Scout",
      company: "Boy Scouts of America",
      dateRange: "Aug 2013 - Mar 2020",
      location: "Gonzales, TX",
      bulletPoints: [
        "• Achieved Eagle Scout rank, demonstrating exceptional leadership, problem-solving, project management, and adaptability skills through years of commitment, culminating in a successful community service project and teamwork experience."
      ]
    }
  ];

  return (
    <div>
      <Hero 
        title="MICHAEL MCDOWALL" 
        subtitle="Software Engineer & Technical Leader" 
      />

      <Section title="Professional Statement">
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          Driven software engineer with 6+ years of experiential learning. Increased code tested by 10% on a real-time invoice decisioning system. 
          Represented over 45,000 students on 2 boards, contributing to the implementation and support of an organization-wide values-based culture. 
          Seeking to leverage a knowledge network to innovate new solutions for a changing digital ecosystem.
        </p>
      </Section>

      <Section title="Education">
        <EducationItem
          degree="Bachelor of Science – Computer Science"
          school="University of North Texas – Minor in Political Science"
          details="GPA 4.0 • Honors College • National Merit Scholar"
          dateRange="May 2024"
          location="Denton, TX"
        />
      </Section>

      <Section title="Work Experience">
        {workExperience.map((job, index) => (
          <JobItem
            key={`work-${index}`}
            title={job.title}
            company={job.company}
            dateRange={job.dateRange}
            location={job.location}
            bulletPoints={job.bulletPoints}
            isLast={index === workExperience.length - 1}
          />
        ))}
      </Section>

      <Section title="Leadership Experience">
        {leadershipExperience.map((job, index) => (
          <JobItem
            key={`leadership-${index}`}
            title={job.title}
            company={job.company}
            dateRange={job.dateRange}
            location={job.location}
            bulletPoints={job.bulletPoints}
            isLast={index === leadershipExperience.length - 1}
          />
        ))}
      </Section>
    </div>
  );
};
export default HomePage;