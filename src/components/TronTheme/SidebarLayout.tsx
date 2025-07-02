import type { ReactNode } from "react";

const SidebarLayout = ({ children } : {children: ReactNode[]}) => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">{children[0] ?? <></>}</div>
      <div className="space-y-6">{children[1] ?? <></>}</div>
    </div>
  );
};
export default SidebarLayout;
