import { GraduationCap } from "lucide-react";
import { sectionClasses, headerClasses, formatDate } from "../utilities";

const EducationCard = ({ education }: { education: any }) => {
  return (
    <div className={sectionClasses}>
      <h2 className={headerClasses}>
        <GraduationCap className="w-6 h-6" />
        Education
      </h2>
      <div className="border-l-2 border-blue-500/40 pl-6 relative group hover:border-blue-300 transition-all duration-300 cursor-pointer hover:pl-8">
        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 group-hover:w-5 group-hover:h-5 group-hover:-left-2.5 group-hover:shadow-blue-300/70 transition-all duration-300" />
        <h3 className="text-xl font-bold text-blue-300 font-mono group-hover:text-blue-200 transition-colors duration-300">
          {education.degree} {education.major}
        </h3>
        <p className="text-lg text-blue-200 font-mono group-hover:text-blue-100 transition-colors duration-300">
          {education.university}
        </p>
        <p className="text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
          Minor: {education.minor} | Certificate: {education.certificate}
        </p>
        <p className="text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
          Graduated: {formatDate(education.graduationDate)} | GPA:{" "}
          {education.gpa}
        </p>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {education.location}
        </p>
      </div>
    </div>
  );
};
export default EducationCard;
