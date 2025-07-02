import React, { useState, useEffect, useRef } from 'react';
import type { PersonalInfo } from '../types';

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const GlobalStyles = () => (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
      
      .mac-resume-container {
        /* Reset container styles to isolate from global CSS */
        color: initial;
        font-family: 'VT323', monospace;
      }

      .mac-resume-container a {
        color: #0000EE; /* Classic blue link color */
      }
      
      .mac-resume-container a:visited {
        color: #551A8B; /* Classic purple visited link color */
      }

      .font-chicago { font-family: 'VT323', monospace; }
      
      .mac-scrollbar::-webkit-scrollbar {
        width: 16px;
        background-color: #cccccc;
      }
      .mac-scrollbar::-webkit-scrollbar-track {
        background-image: repeating-conic-gradient(#bfbfbf 0% 25%, #ffffff 0% 50%);
        background-size: 2px 2px;
        border: 1px solid black;
      }
      .mac-scrollbar::-webkit-scrollbar-thumb {
        background-color: #cccccc;
        border: 1px solid black;
        box-shadow: inset 1px 1px 0px white;
      }
      .mac-scrollbar::-webkit-scrollbar-button:single-button {
        background-color: #cccccc;
        display: block;
        border: 1px solid black;
        box-shadow: inset 1px 1px 0px white;
        height: 15px;
        width: 15px;
      }
      .mac-scrollbar::-webkit-scrollbar-button:single-button:vertical:decrement {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpolygon points='5,2 2,8 8,8' fill='black'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
       .mac-scrollbar::-webkit-scrollbar-button:single-button:vertical:increment {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpolygon points='5,8 2,2 8,2' fill='black'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
    `}</style>
);

// --- SVG ICONS ---
const FolderIcon = () => (
  <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4H40V32H0V4Z" fill="white" stroke="black" strokeWidth="2"/>
    <path d="M0 4C0 1.79086 1.79086 0 4 0H16V6H38V10H2V4H0Z" fill="white" stroke="black" strokeWidth="2"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H23L31 9V39H1V1Z" fill="white" stroke="black" strokeWidth="2"/>
    <path d="M22 1V10H31" stroke="black" strokeWidth="2"/>
  </svg>
);

const TrashIcon = () => (
    <div className="flex justify-center pt-2">
        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10H31V39H5V10Z" fill="white" stroke="black" strokeWidth="2"/>
            <path d="M1 10H35" stroke="black" strokeWidth="2"/>
            <path d="M12 5C12 2.23858 14.2386 0 17 0H19C21.7614 0 24 2.23858 24 5V10H12V5Z" fill="white" stroke="black" strokeWidth="2"/>
            <path d="M12 15V33" stroke="black" strokeWidth="2"/>
            <path d="M24 15V33" stroke="black" strokeWidth="2"/>
            <path d="M18 15V33" stroke="black" strokeWidth="2"/>
        </svg>
    </div>
);


// --- DRAGGABLE WINDOW COMPONENT ---
interface WindowProps {
  title: string;
  isActive: boolean;
  initialPosition?: { x: number; y: number };
  onClose: () => void;
  children: React.ReactNode;
  zIndex: number;
  onFocus: () => void;
  onMouseDown: () => void;
}

const WindowComponent: React.FC<WindowProps> = ({ title, isActive, initialPosition = { x: 50, y: 50 }, onClose, children, zIndex, onFocus, onMouseDown: onWindowMouseDown }) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    onFocus();
    dragStartPos.current = { x: e.clientX - position.x, y: e.clientY - position.y, };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => { setPosition({ x: e.clientX - dragStartPos.current.x, y: e.clientY - dragStartPos.current.y, }); };
  const handleMouseUp = () => { setIsDragging(false); window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('mouseup', handleMouseUp); };
  
  useEffect(() => { return () => { window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('mouseup', handleMouseUp); } }, []);
  
  const titleBarLines = { backgroundImage: `repeating-linear-gradient(white 0px, white 1px, black 1px, black 2px)` };

  return (
    <div
      ref={windowRef}
      className="font-chicago absolute w-[550px] max-w-[90vw] bg-white border-2 border-black shadow-[4px_4px_0px_#000] flex flex-col text-black"
      style={{ top: `${position.y}px`, left: `${position.x}px`, zIndex, userSelect: isDragging ? 'none' : 'auto' }}
      onMouseDown={() => { onFocus(); onWindowMouseDown(); }}
    >
      <div
        className="h-7 flex items-center border-b-2 border-black px-2 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        style={isActive ? titleBarLines : {}}
      >
        <div className="flex items-center gap-1">
          <button onClick={onClose} className="w-4 h-4 border border-black bg-white"></button>
        </div>
        <div className="flex-grow text-center text-lg">{title}</div>
        <div className="w-4 h-4"></div>
      </div>
      
      <div className="p-4 text-lg leading-snug overflow-y-auto h-[300px] bg-white mac-scrollbar">
         {children}
      </div>

       <div className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize" style={{ backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 1px, black 1px, black 2px)` }}></div>
    </div>
  );
};

// --- DESKTOP ICON COMPONENT ---

interface IconProps {
    label: string;
    onDoubleClick: () => void;
    icon: React.ReactNode;
}

const DesktopIcon: React.FC<IconProps> = ({ label, onDoubleClick, icon }) => (
    <div className="font-chicago flex flex-col items-center gap-2 w-28 h-28 p-2 cursor-pointer select-none" onDoubleClick={onDoubleClick}>
        <div className="w-12 h-12 flex items-center justify-center">{icon}</div>
        <span className="text-center text-lg bg-white px-1 text-black">{label}</span>
    </div>
);


// --- MENU BAR COMPONENT ---
interface MenuItem { label: string; onClick: () => void; disabled?: boolean; }
interface MenuProps { title: string; items: MenuItem[]; isOpen: boolean; onClick: () => void; }

const Menu: React.FC<MenuProps> = ({ title, items, isOpen, onClick }) => (
    <div className="relative" onMouseDown={(e) => e.stopPropagation()}>
        <span onClick={onClick} className={`px-3 py-1 cursor-default ${isOpen ? 'bg-black text-white' : 'text-black'}`}>{title}</span>
        {isOpen && (
            <div className="absolute left-0 mt-1 w-56 bg-white border-2 border-black shadow-[2px_2px_0px_#000] py-1 z-50">
                {items.map((item, index) => (<div key={index} onMouseDown={item.disabled ? undefined : item.onClick} className={`px-3 py-1 cursor-default text-black ${item.disabled ? 'text-gray-400' : 'hover:bg-black hover:text-white'}`}>{item.label}</div>))}
            </div>
        )}
    </div>
);

// --- MAIN RESUME COMPONENT ---

interface MacintoshResumeProps { personalInfo: PersonalInfo; }

const MacintoshResume: React.FC<MacintoshResumeProps> = ({ personalInfo }) => {
    const [openWindows, setOpenWindows] = useState<Record<string, boolean>>({ 'About Me': true, 'Experience': false, 'Education': false, 'Skills & Projects': false });
    const [windowZ, setWindowZ] = useState<Record<string, number>>({ 'About Me': 2, 'Experience': 1, 'Education': 1, 'Skills & Projects': 1 });
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const openWindow = (title: string) => { setOpenWindows(prev => ({...prev, [title]: true})); focusWindow(title); };
    const closeWindow = (title: string) => { setOpenWindows(prev => ({...prev, [title]: false})); };
    const focusWindow = (title: string) => { const maxZ = Math.max(...Object.values(windowZ)) + 1; setWindowZ(prev => ({...prev, [title]: maxZ})); };
    
    const getActiveWindow = (): string | null => {
        const openWindowTitles = Object.keys(openWindows).filter(title => openWindows[title]);
        if (openWindowTitles.length === 0) return null;
        return openWindowTitles.reduce((active, current) => windowZ[current] > windowZ[active] ? current : active);
    };
    
    const activeWindowTitle = getActiveWindow();

    const handleMenuClick = (title: string) => { setActiveMenu(activeMenu === title ? null : title); };
    const closeAllMenus = () => setActiveMenu(null);
    
    const fileMenuItems: MenuItem[] = [
        { label: "About This Resume", onClick: () => { openWindow("About Me"); closeAllMenus(); }},
        { label: "Close Window", onClick: () => { if(activeWindowTitle) closeWindow(activeWindowTitle); closeAllMenus(); }, disabled: !activeWindowTitle},
        { label: "Quit", onClick: () => { Object.keys(openWindows).forEach(title => closeWindow(title)); closeAllMenus(); }}
    ];

    const viewMenuItems: MenuItem[] = [
        { label: "Experience", onClick: () => { openWindow('Experience'); closeAllMenus(); }},
        { label: "Education", onClick: () => { openWindow('Education'); closeAllMenus(); }},
        { label: "Skills & Projects", onClick: () => { openWindow('Skills & Projects'); closeAllMenus(); }},
    ];

    useEffect(() => { const handleClickOutside = () => closeAllMenus(); window.addEventListener('mousedown', handleClickOutside); return () => window.removeEventListener('mousedown', handleClickOutside); }, []);
    
    const ditheredBg = { backgroundImage: `repeating-conic-gradient(#808080 0% 25%, #FFFFFF 0% 50%)`, backgroundSize: '2px 2px'};

  return (
    <div className="mac-resume-container">
      <GlobalStyles />
      <div className="font-chicago w-full h-screen overflow-hidden flex flex-col" style={ditheredBg}>
        <header className="h-8 bg-white border-b-2 border-black flex items-center px-2 text-xl z-30 select-none shrink-0">
           <div className="flex items-center text-black">
                <span className="text-2xl px-2"></span>
                <Menu title="File" items={fileMenuItems} isOpen={activeMenu === 'File'} onClick={() => handleMenuClick('File')} />
                <Menu title="View" items={viewMenuItems} isOpen={activeMenu === 'View'} onClick={() => handleMenuClick('View')} />
                <span className="px-3 py-1 cursor-default text-gray-500">Edit</span>
                <span className="px-3 py-1 cursor-default text-gray-500">Special</span>
           </div>
           <div className="flex-grow"></div>
           <div className="text-black">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
        </header>

        <main className="flex-grow p-5 relative select-none" onMouseDown={closeAllMenus}>
            <div className="flex flex-col items-end absolute top-5 right-5 gap-4">
                <DesktopIcon label="Trash" onDoubleClick={() => {}} icon={<TrashIcon />} />
            </div>
            <div className="flex flex-col gap-4">
               <DesktopIcon label="About Me" icon={<DocumentIcon />} onDoubleClick={() => openWindow('About Me')} />
               <DesktopIcon label="Experience" icon={<FolderIcon />} onDoubleClick={() => openWindow('Experience')} />
               <DesktopIcon label="Education" icon={<FolderIcon />} onDoubleClick={() => openWindow('Education')} />
               <DesktopIcon label="Projects" icon={<FolderIcon />} onDoubleClick={() => openWindow('Skills & Projects')} />
            </div>

            {openWindows['About Me'] && (
                <WindowComponent title="README.txt" isActive={activeWindowTitle === 'About Me'} onClose={() => closeWindow('About Me')} zIndex={windowZ['About Me']} onFocus={() => focusWindow('About Me')} initialPosition={{x: 150, y: 40}} onMouseDown={closeAllMenus}>
                    <h1 className="text-2xl font-bold mb-2">{personalInfo.name}</h1>
                    <p>{personalInfo.location}</p>
                    <p className="mt-4">
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a> | <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>
                    </p>
                    <p className="mt-6">Welcome to my interactive resume. Double-click the icons on the desktop or use the 'View' menu to learn more about me.</p>
                </WindowComponent>
            )}

            {openWindows['Experience'] && (
                <WindowComponent title="Experience.log" isActive={activeWindowTitle === 'Experience'} onClose={() => closeWindow('Experience')} zIndex={windowZ['Experience']} onFocus={() => focusWindow('Experience')} initialPosition={{x: 250, y: 100}} onMouseDown={closeAllMenus}>
                   {personalInfo.jobs.map((job, index) => (
                       <div key={index} className="mb-4 last:mb-0">
                           <h2 className="text-xl font-bold">{job.position}</h2>
                           <p className="italic">{job.company} / {job.location}</p>
                           <p className="text-gray-600">{formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}</p>
                           <ul className="list-disc list-inside mt-2">
                               {job.descriptionBulletPoints.map((point, i) => <li key={i}>{point}</li>)}
                           </ul>
                           <p className="mt-1 text-sm">
                               <span className="font-bold">Technologies:</span> {job.technologies.join(', ')}
                           </p>
                       </div>
                   ))}
                </WindowComponent>
            )}

            {openWindows['Education'] && (
                <WindowComponent title="Education.rtf" isActive={activeWindowTitle === 'Education'} onClose={() => closeWindow('Education')} zIndex={windowZ['Education']} onFocus={() => focusWindow('Education')} initialPosition={{x: 350, y: 150}} onMouseDown={closeAllMenus}>
                    <h2 className="text-xl font-bold">{personalInfo.education.university}</h2>
                    <p>{personalInfo.education.degree} {personalInfo.education.major}</p>
                    {personalInfo.education.minor && <p>Minor in {personalInfo.education.minor}</p>}
                    <p className="text-gray-600 mt-2">Graduated: {formatDate(personalInfo.education.graduationDate)}</p>
                    <p>GPA: {personalInfo.education.gpa.toFixed(1)}</p>
                </WindowComponent>
            )}

            {openWindows['Skills & Projects'] && (
                <WindowComponent title="Skills_&_Projects" isActive={activeWindowTitle === 'Skills & Projects'} onClose={() => closeWindow('Skills & Projects')} zIndex={windowZ['Skills & Projects']} onFocus={() => focusWindow('Skills & Projects')} initialPosition={{x: 450, y: 200}} onMouseDown={closeAllMenus}>
                    <h2 className="text-xl font-bold mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                        {personalInfo.skills.map(skill => (
                            <div key={skill.name} className="flex items-center gap-2">
                                <span>{skill.name}</span>
                                <div className="w-24 h-4 bg-gray-300 border border-black">
                                    <div className="h-full bg-black" style={{width: `${skill.level * 100}%`}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-xl font-bold mb-2">Projects</h2>
                    {personalInfo.projects.map((project, i) =>(
                        <div key={i} className="mb-4 last:mb-0">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-bold underline">{project.title}</a>
                            <p>{project.description}</p>
                            <p className="text-sm"><span className="font-bold">Built with:</span> {project.technologies.join(', ')}</p>
                        </div>
                    ))}
                </WindowComponent>
            )}
        </main>
      </div>
    </div>
  );
};
export default MacintoshResume;