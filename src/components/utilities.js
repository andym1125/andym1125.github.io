export function formatDate(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
;
export const sectionClasses = "bg-black/90 backdrop-blur-sm border border-cyan-500/40 rounded-lg p-6 mb-6 shadow-2xl shadow-cyan-500/20 hover:border-cyan-400 hover:shadow-cyan-400/30 hover:bg-black/95 transition-all duration-500 group";
export const headerClasses = "text-2xl font-bold text-cyan-300 mb-4 font-mono flex items-center gap-2 group-hover:text-cyan-200 transition-colors duration-300";
