import { Heart } from "lucide-react";
import type { VolunteerExperience } from "../../types";
import { sectionClasses, headerClasses, formatDate } from "../utilities";

const VolunteerExperiences = ({
  volunteer,
}: {
  volunteer: VolunteerExperience[];
}) => {
  if (!volunteer || volunteer.length === 0) return <></>;
  return (
    <div className={sectionClasses}>
      <h2 className={headerClasses}>
        <Heart className="w-6 h-6" />
        Volunteer Experience
      </h2>
      {volunteer.map((vol, index) => (
        <div
          key={index}
          className="mb-4 last:mb-0 border-l-2 border-purple-500/40 pl-6 relative group hover:border-purple-300 transition-all duration-300 cursor-pointer hover:pl-8"
        >
          <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 group-hover:w-5 group-hover:h-5 group-hover:-left-2.5 group-hover:shadow-purple-300/70 transition-all duration-300" />
          <h3 className="text-lg font-bold text-purple-300 font-mono group-hover:text-purple-200 transition-colors duration-300">
            {vol.position}
          </h3>
          <p className="text-purple-200 font-mono group-hover:text-purple-100 transition-colors duration-300">
            {vol.organization}{" "}
            {vol.suborganization && `- ${vol.suborganization}`}
          </p>
          <p className="text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
            {formatDate(vol.startDate)} -{" "}
            {vol.current ? "Present" : formatDate(vol.endDate)}
          </p>
          <ul className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
            {vol.descriptionBulletPoints.map((point, idx) => (
              <li
                key={idx}
                className="mb-1 font-mono text-sm hover:text-purple-200 transition-colors duration-200"
              >
                • {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default VolunteerExperiences;
