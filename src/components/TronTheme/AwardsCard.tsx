import { Gem } from "lucide-react";
import { sectionClasses, headerClasses } from "../utilities";
import type { Award as AwardType } from "../../types";
import Chip from "./Chip";

const AwardsCard = ({ awards }: { awards: AwardType[] }) => {
  return (
    <div className={sectionClasses}>
      <h2 className={headerClasses}>
        <Gem className="w-6 h-6" />
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
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-400 text-xs mb-2">{award.location}</p>
          </div>

          <p className="text-gray-300 text-sm">{award.description}</p>
          <div className="flex justify-between items-center mt-4">
            <div/>
            <Chip
              label={award.date.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
              theme="secondary"
              isVisible={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default AwardsCard;
