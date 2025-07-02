const TronBackground: React.FC = () => {
  return (
	<div className="fixed inset-0 overflow-hidden pointer-events-none">
	  {/* Grid overlay */}
	  <div className="absolute inset-0 opacity-20">
		<div className="w-full h-full" style={{
		  backgroundImage: `
			linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
		  `,
		  backgroundSize: '50px 50px'
		}} />
	  </div>
	  
	  {/* Animated lightbikes */}
	  <div className="absolute inset-0">
		<div className="animate-pulse absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" 
			 style={{ animation: 'lightbike-horizontal 8s linear infinite' }} />
		<div className="animate-pulse absolute top-3/4 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60" 
			 style={{ animation: 'lightbike-horizontal-reverse 10s linear infinite' }} />
		<div className="animate-pulse absolute left-1/4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-60" 
			 style={{ animation: 'lightbike-vertical 12s linear infinite' }} />
	  </div>
	  
	  {/* Floating particles */}
	  <div className="absolute inset-0">
		{[...Array(20)].map((_, i) => (
		  <div
			key={i}
			className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
			style={{
			  left: `${Math.random() * 100}%`,
			  top: `${Math.random() * 100}%`,
			  animationDelay: `${Math.random() * 5}s`,
			  animationDuration: `${2 + Math.random() * 3}s`
			}}
		  />
		))}
	  </div>
	</div>
  );
};
export default TronBackground;