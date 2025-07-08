import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Gem } from "lucide-react";
import { sectionClasses, headerClasses } from "../utilities";
import Chip from "./Chip";
const AwardsCard = ({ awards }) => {
    return (_jsxs("div", { className: sectionClasses, children: [_jsxs("h2", { className: headerClasses, children: [_jsx(Gem, { className: "w-6 h-6" }), "Achievements"] }), awards.map((award, index) => (_jsxs("div", { className: "mb-4 last:mb-0 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg", children: [_jsx("h3", { className: "text-yellow-300 font-bold font-mono", children: award.title }), _jsx("p", { className: "text-yellow-200 text-sm font-mono", children: award.organization }), _jsx("div", { className: "flex justify-between items-center mt-4", children: _jsx("p", { className: "text-gray-400 text-xs mb-2", children: award.location }) }), _jsx("p", { className: "text-gray-300 text-sm", children: award.description }), _jsxs("div", { className: "flex justify-between items-center mt-4", children: [_jsx("div", {}), _jsx(Chip, { label: award.date.toLocaleString("default", {
                                    month: "long",
                                    year: "numeric",
                                }), theme: "secondary", isVisible: true })] })] }, index)))] }));
};
export default AwardsCard;
