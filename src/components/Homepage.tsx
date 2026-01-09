export function Homepage() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black">
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl mb-6">Kyle Gossage</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Software Engineer Specializing in Computer Vision and Fullstack Development
        </p>
        <button 
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          View Portfolio
        </button>
      </div>
    </section>
  );
}