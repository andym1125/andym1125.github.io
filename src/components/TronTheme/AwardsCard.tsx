import { Award } from "lucide-react";
import { sectionClasses, headerClasses } from "../utilities";
import type { Award as AwardType } from "../../types";

const AwardsCard = ({ awards }: { awards: AwardType[] }) => {
  return (
    <div className={sectionClasses}>
      <h2 className={headerClasses}>
        <Award className="w-6 h-6" />
        Achievements
      </h2>
      {awards.map((award, index) => (
        <div
          key={index}
          className="mb-4 last:mb-0 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg"
        >
          <h3 className="text-yellow-300 font-bold font-mono">{award.title}</h3>
          <p className="text-yellow-200 text-sm font-mono">
            {award.organization}
          </p>
          <p className="text-gray-400 text-xs mb-2">
            {award.date.toString()} • {award.location}
          </p>
          <p className="text-gray-300 text-sm">{award.description}</p>
        </div>
      ))}
    </div>
  );
};
export default AwardsCard;
