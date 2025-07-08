import { Binary, MapPin } from "lucide-react";
import type { WorkExperience } from "../../types";
import { formatDate, headerClasses, sectionClasses } from "../utilities";
import Chip from "./Chip";

const TronWorkExperiencesCard = ({ jobs }: { jobs: WorkExperience[] }) => {
  return <div className={sectionClasses}>
    <h2 className={headerClasses}>
      <Binary className="w-6 h-6" />
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
          <Chip
            label={`${formatDate(job.startDate)} - ${job.current ? "Present" : formatDate(job.endDate)}`}
            theme="primary"
            isVisible={true}
          />
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
            <Chip
              key={idx}
              label={tech}
              theme="secondary"
              isVisible={true}
            />
          ))}
        </div>
      </div>
    ))}
  </div>;
};
export default TronWorkExperiencesCard;
