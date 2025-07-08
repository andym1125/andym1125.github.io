import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const SkillBar = ({ skill, index }) => {
    const [animated, setAnimated] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setAnimated(true), index * 100);
        return () => clearTimeout(timer);
    }, [index]);
    return (_jsxs("div", { className: "mb-4 group", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("span", { className: "text-cyan-300 font-mono text-sm group-hover:text-cyan-200 transition-colors duration-300", children: skill.name }), _jsxs("span", { className: "text-cyan-400 font-mono text-xs group-hover:text-cyan-300 transition-colors duration-300", children: [Math.round(skill.level * 100), "%"] })] }), _jsx("div", { className: "w-full bg-gray-900 rounded-full h-2 border border-cyan-900 group-hover:border-cyan-700 transition-all duration-300 hover:h-3 cursor-pointer", children: _jsx("div", { className: "h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-cyan-400/50 group-hover:from-cyan-300 group-hover:to-blue-300 group-hover:shadow-cyan-300/70 hover:animate-pulse", style: {
                        width: animated ? `${skill.level * 100}%` : '0%',
                        boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                    } }) })] }));
};
export default SkillBar;
