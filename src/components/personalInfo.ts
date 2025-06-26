import type { PersonalInfo } from "../types";

export const andyPersonalInfo: PersonalInfo = {
  name: "Andy McDowall",
  location: "Dallas, TX",
  github: "https://github.com/chadcyber2000",
  linkedin: "https://linkedin.com/in/chadcyberson",
  jobs: [
    {
      company: "CyberCorp Solutions",
      position: "Webmaster Supreme",
      startDate: new Date("2001-03-15"),
      endDate: new Date("2003-08-20"),
      current: false,
      location: "San Francisco, CA",
      descriptionBulletPoints: [
        "Created mind-blowing websites with animated GIFs and MIDI soundtracks",
        "Mastered the art of <marquee> tags and table-based layouts",
        "Implemented cutting-edge Flash intros that took 5 minutes to load",
        "Achieved 100% visitor retention through auto-playing music",
      ],
      technologies: ["HTML", "Flash", "Dreamweaver", "FrontPage", "JavaScript"],
    },
    {
      company: "Digital Dreams Inc",
      position: "Flash Guru",
      startDate: new Date("1999-06-01"),
      endDate: new Date("2001-02-28"),
      current: false,
      location: "Los Angeles, CA",
      descriptionBulletPoints: [
        "Developed interactive Flash animations that made visitors go WOW!",
        "Expert in ActionScript wizardry and timeline manipulation",
        "Created splash pages with more effects than The Matrix",
        "Pioneered the use of lens flares in web design",
      ],
      technologies: ["Flash", "ActionScript", "Director", "Photoshop"],
    },
    {
      company: "Millennium Tech",
      position: "Y2K Bug Hunter",
      startDate: new Date("1998-01-10"),
      endDate: new Date("1999-05-30"),
      current: false,
      location: "Austin, TX",
      descriptionBulletPoints: [
        "Saved the world from the Y2K apocalypse by fixing date formats",
        "True digital hero who prevented global computer meltdown",
        "Specialized in COBOL remediation and legacy system updates",
        "Worked 80-hour weeks to ensure civilization survived the millennium",
      ],
      technologies: ["COBOL", "FORTRAN", "Assembly", "Pascal", "BASIC"],
    },
  ],
  volunteer: [
    {
      organization: "GeoCities Neighborhood Watch",
      suborganization: "Web Ring Division",
      position: "Chief Ring Master",
      startDate: new Date("2000-01-01"),
      endDate: new Date("2002-12-31"),
      current: false,
      location: "Cyberspace",
      descriptionBulletPoints: [
        "Maintained the integrity of 47 different web rings",
        "Ensured proper animated GIF distribution across member sites",
        "Organized the first annual 'Best Under Construction Page' awards",
      ],
    },
  ],
  awards: [
    {
      title: "Webmaster of the Year 2002",
      organization: "International Society of Cyber Excellence",
      date: new Date("2002-12-15"),
      location: "Las Vegas, NV",
      description:
        "Recognized for outstanding achievement in the field of radical web design and innovative use of the <blink> tag",
    },
    {
      title: "Flash Animation Grand Prize",
      organization: "Newgrounds",
      date: "Summer 2001",
      location: "Online",
      description:
        "Winner of the most epic stick figure battle animation featuring 47 different explosion effects",
    },
  ],
  projects: [
    {
      title: "Ultimate Web Portal 3000",
      description:
        "A comprehensive web portal featuring 15 different background music options, rotating 3D text, and a visitor guestbook with ASCII art support. Achieved over 9000 hits in its first week!",
      technologies: ["HTML", "JavaScript", "Flash", "MIDI", "Java Applets"],
      link: "http://chadcyber.geocities.com/portal3000",
      image: "",
    },
    {
      title: "Cyber Chat Room Deluxe",
      description:
        "Revolutionary chat application with custom emoticons, rainbow text effects, and integrated Winamp playlist sharing. Featured advanced flood protection and ban hammer functionality.",
      technologies: ["Java", "Servlets", "MySQL", "CSS", "JavaScript"],
      link: "http://chadcyber.tripod.com/chatroom",
      image: "",
    },
    {
      title: "Matrix Rain Screensaver",
      description:
        "Authentic recreation of the falling code effect from The Matrix, but with customizable characters including wingdings and comic sans options. Downloaded over 50,000 times on Download.com!",
      technologies: ["Visual Basic", "DirectX", "Windows API"],
      link: "",
      image: "",
    },
  ],
  skills: [
    { name: "HTML", level: 0.95 },
    { name: "CSS", level: 0.9 },
    { name: "JavaScript", level: 0.85 },
    { name: "Flash", level: 1.0 },
    { name: "Photoshop", level: 0.88 },
    { name: "Dreamweaver", level: 0.92 },
    { name: "FrontPage", level: 0.87 },
    { name: "ActionScript", level: 0.93 },
    { name: "Java Applets", level: 0.75 },
    { name: "MIDI Composition", level: 0.82 },
  ],
  education: {
    degree: "Bachelor of Science in",
    degreeShort: "B.S.",
    major: "Computer Science",
    minor: "Political Science",
    certificate: "Cybersecurity",
    university: "University of North Texas",
    universityShort: "UNT",
    graduationDate: new Date("2024-05-15"),
    location: "Denton, TX",
    gpa: 4.0,
  },
};
