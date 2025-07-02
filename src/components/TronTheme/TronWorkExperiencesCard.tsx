import { Briefcase, Calendar, MapPin } from "lucide-react";
import type { WorkExperience } from "../../types";
import { formatDate, headerClasses, sectionClasses } from "../utilities";

const TronWorkExperiencesCard = ({ jobs }: { jobs: WorkExperience[] }) => {
  return <div className={sectionClasses}>
    <h2 className={headerClasses}>
      <Briefcase className="w-6 h-6" />
      Work Experience
    </h2>
    {jobs.map((job, index) => (
      <div
        key={index}
        className="mb-6 last:mb-0 border-l-2 border-cyan-500/40 pl-6 relative hover:border-cyan-300 transition-all duration-300 group cursor-pointer hover:pl-8"
      >
        <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 group-hover:w-5 group-hover:h-5 group-hover:-left-2.5 group-hover:shadow-cyan-300/70 transition-all duration-300" />
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-cyan-300 font-mono group-hover:text-cyan-200 transition-colors duration-300">
              {job.position}
            </h3>
            <p className="text-lg text-blue-300 font-mono group-hover:text-blue-200 transition-colors duration-300">
              {job.company}
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-1 group-hover:text-gray-300 transition-colors duration-300">
              <MapPin className="w-3 h-3" />
              {job.location}
            </p>
          </div>
          <div className="text-right text-sm text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(job.startDate)} -{" "}
              {job.current ? "Present" : formatDate(job.endDate)}
            </div>
          </div>
        </div>
        <ul className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
          {job.descriptionBulletPoints.map((point, idx) => (
            <li
              key={idx}
              className="mb-2 font-mono text-sm hover:text-cyan-200 transition-colors duration-200"
            >
              • {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-cyan-400/20 border border-cyan-400/60 rounded-full text-xs font-mono text-cyan-300 tech-tag hover:bg-cyan-300/30 hover:border-cyan-300 hover:text-cyan-200 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>;
};
export default TronWorkExperiencesCard;
