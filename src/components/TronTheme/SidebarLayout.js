import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SidebarLayout = ({ children }) => {
    return (_jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [_jsx("div", { className: "lg:col-span-2", children: children[0] ?? _jsx(_Fragment, {}) }), _jsx("div", { className: "space-y-6", children: children[1] ?? _jsx(_Fragment, {}) })] }));
};
export default SidebarLayout;
