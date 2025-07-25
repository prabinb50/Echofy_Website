import React from 'react'

const AboutImage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat py-16 px-4" style={{backgroundImage: 'url(/about-bg.jpg)'}}>
      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes gentleBounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .float-animation {
          animation: float 2s ease-in-out infinite;
        }
        
        .gentle-bounce {
          animation: gentleBounce 2s ease-in-out infinite;
        }
        
        .scale-animation {
          animation: scale 2.5s ease-in-out infinite;
        }
        
        @keyframes scale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image section */}
          <div className="relative">
            {/* Background container */}
            <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 overflow-hidden">
              
          
              
              {/* Main image */}
              <div className="relative z-10 pt-8">
                <img 
                  src="/about.png" 
                  alt="Environmental sustainable future" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Award badge */}
              <div className="absolute bottom-8 left-3 text-white px-6 py-3 rounded-xl flex items-center space-x-3 z-10 gentle-bounce">
                <img 
                  src="/about-award.png" 
                  alt="Award" 
                  className="w-60 h-25"
                />
              
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="space-y-8 relative">
            
            {/* Floating shapes */}
            <img 
              src="/about-shape.png" 
              alt="About shape" 
              className="absolute bottom-0 right-0 w-16 h-auto opacity-60 float-animation z-0"
            />
            
            {/* Floating shapes */}
            <img 
              src="/about-shape-1.png" 
              alt="About shape 1" 
              className="absolute -top-16 right-12 w-14 h-auto opacity-70 scale-animation z-0"
            />
            
            {/* Title section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/sub-title-shape.png" 
                  alt="About Echofy" 
                  className="w-6 h-6"
                />
                <span className="text-green-500 font-semibold uppercase tracking-wide">About Echofy</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Environmental Sustainable<br />
                <span className="text-gray-800">Forever Green Future</span>
              </h1>
            </div>
            
            {/* Features list */}
            <div className="space-y-6">
              
              {/* Economic benefits feature */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <img 
                    src="/about-icon.png" 
                    alt="Economic benefits icon" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Economic Benefits</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Alternative innovation after ethical to network environmental 
                    whiteboard transparent growth natural done.
                  </p>
                </div>
              </div>
              
              {/* Safe environment feature */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <img 
                    src="/about-icon2.png" 
                    alt="Safe environment icon" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Environment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Alternative innovation after ethical to network environmental 
                    whiteboard transparent growth natural done.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Button */}
            <div className="pt-4 relative z-10">
              <button className="bg-green-500 hover:bg-black text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 flex items-center space-x-2 group">
                <span>More About</span>
                <img 
                  src="/button-shape-1.png" 
                  alt="Arrow" 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutImage
