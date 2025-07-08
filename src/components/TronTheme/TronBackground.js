import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TronBackground = () => {
    return (_jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [_jsx("div", { className: "absolute inset-0 opacity-20", children: _jsx("div", { className: "w-full h-full", style: {
                        backgroundImage: `
			linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
		  `,
                        backgroundSize: '50px 50px'
                    } }) }), _jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "animate-pulse absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60", style: { animation: 'lightbike-horizontal 8s linear infinite' } }), _jsx("div", { className: "animate-pulse absolute top-3/4 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60", style: { animation: 'lightbike-horizontal-reverse 10s linear infinite' } }), _jsx("div", { className: "animate-pulse absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60", style: { animation: 'lightbike-vertical 12s linear infinite' } })] }), _jsx("div", { className: "absolute inset-0", children: [...Array(20)].map((_, i) => (_jsx("div", { className: "absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse", style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                    } }, i))) })] }));
};
export default TronBackground;
