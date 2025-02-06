"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
    { name: "Frankfurt", lat: 50.1109, lng: 8.6821 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-poppins">
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#00ff88]">
                GameHost
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="hover:text-[#00ff88] transition-colors"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="hover:text-[#00ff88] transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#support"
                  className="hover:text-[#00ff88] transition-colors"
                >
                  Support
                </a>
                <button className="bg-[#00ff88] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#00dd77] transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white"
              >
                <i
                  className={`fas ${
                    isMenuOpen ? "fa-times" : "fa-bars"
                  } text-2xl`}
                ></i>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-[#2a2a2a]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 hover:text-[#00ff88] transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 hover:text-[#00ff88] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#support"
                className="block px-3 py-2 hover:text-[#00ff88] transition-colors"
              >
                Support
              </a>
              <button className="w-full text-center bg-[#00ff88] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#00dd77] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="relative">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Level Up Your <span className="text-[#00ff88]">Game Server</span>{" "}
              Experience
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              High-performance, low-latency game hosting with 99.9% uptime.
              Start your server in seconds.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#00ff88] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#00dd77] transition-colors">
                Deploy Server Now
              </button>
              <button className="border border-[#00ff88] text-[#00ff88] px-8 py-3 rounded-full font-semibold hover:bg-[#00ff88]/10 transition-colors">
                View Plans
              </button>
            </div>
          </div>
        </section>
        <section id="features" className="py-20 px-4 bg-[#111111]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <i className="fas fa-server text-[#00ff88] text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">Instant Deployment</h3>
              <p className="text-gray-400">
                Get your game server up and running in less than 60 seconds
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <i className="fas fa-shield-alt text-[#00ff88] text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">DDoS Protection</h3>
              <p className="text-gray-400">
                Enterprise-grade protection against attacks, included free
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
              <i className="fas fa-globe text-[#00ff88] text-3xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-3">Global Network</h3>
              <p className="text-gray-400">
                20+ locations worldwide for the lowest possible latency
              </p>
            </div>
          </div>
        </section>
        <section id="locations" className="py-20 px-4 bg-[#111111]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Our Global Network
            </h2>
            <div className="relative w-full h-[400px] md:h-[600px] bg-[#1a1a1a] rounded-xl overflow-hidden">
              <div className="absolute inset-0">
                <div className="world-map-container">
                  {locations.map((location) => (
                    <div
                      key={location.name}
                      className="location-marker"
                      style={{
                        left: `${((location.lng + 180) / 360) * 100}%`,
                        top: `${((90 - location.lat) / 180) * 100}%`,
                      }}
                      onMouseEnter={() => setSelectedLocation(location.name)}
                      onMouseLeave={() => setSelectedLocation(null)}
                    >
                      <div className="marker-dot"></div>
                      <div className="marker-pulse"></div>
                      {selectedLocation === location.name && (
                        <div className="location-tooltip">
                          <span>{location.name}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]"
                style={{ animation: "fadeIn 1s ease-out 0.2s backwards" }}
              >
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <div className="text-3xl font-bold mb-4">
                  $9.99<span className="text-sm text-gray-400">/mo</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li>
                    <i className="fas fa-check text-[#00ff88] mr-2"></i>2GB RAM
                  </li>
                  <li>
                    <i className="fas fa-check text-[#00ff88] mr-2"></i>2 CPU
                    Cores
                  </li>
                  <li>
                    <i className="fas fa-check text-[#00ff88] mr-2"></i>30GB SSD
                    Storage
                  </li>
                </ul>
                <button className="w-full bg-[#00ff88] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#00dd77] transition-colors">
                  Select Plan
                </button>
              </div>
              <div
                className="p-6 rounded-xl bg-[#1a1a1a] border-2 border-[#00ff88]"
                style={{ animation: "fadeIn 1s ease-out 0.4s backwards" }}
              >
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <div className="text-3xl font-bold mb-4">
                  $24.99<span className="text-sm text-gray-400">/mo</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li>
                    <i className="fas fa-check text-[#00ff88] mr-2"></i>8GB RAM
                  </li>
                  <li>
                    <i className="fas fa-check text-[#00ff88] mr-2"></i>4 CPU
                    Cores
                  </li>
                  <li>
                    <i className="fas fa-check text-[#00ff88] mr-2"></i>100GB
                    SSD Storage
                  </li>
                </ul>
                <button className="w-full bg-[#00ff88] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#00dd77] transition-colors">
                  Select Plan
                </button>
              </div>
              <div
                className="p-6 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]"
                style={{ animation: "fadeIn 1s ease-out 0.6s backwards" }}
              >
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-4">
                  $99.99<span className="text-sm text-gray-400">/mo</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li>
                    <i className="fas fa-check text-[#00ff88] mr-2"></i>32GB RAM
                  </li>
                  <li>
                    <i className="fas fa-check text-[#00ff88] mr-2"></i>8 CPU
                    Cores
                  </li>
                  <li>
                    <i className="fas fa-check text-[#00ff88] mr-2"></i>500GB
                    SSD Storage
                  </li>
                </ul>
                <button className="w-full bg-[#00ff88] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#00dd77] transition-colors">
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="py-20 px-4 bg-[#111111]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Need Help?</h2>
            <p className="text-lg text-gray-400 mb-8">
              Our support team is available 24/7 to assist you
            </p>
            <button className="bg-[#00ff88] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#00dd77] transition-colors">
              Contact Support
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-[#00ff88]">
              <i className="fab fa-discord text-xl"></i>
            </a>
            <a href="#" className="hover:text-[#00ff88]">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="hover:text-[#00ff88]">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
          <p>© 2025 GameHost. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        .world-map-container {
          position: relative;
          width: 100%;
          height: 100%;
          background-image: url('/world-map.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          background-color: #1a1a1a;
        }

        .location-marker {
          position: absolute;
          transform: translate(-50%, -50%);
          z-index: 10;
        }

        .marker-dot {
          width: 8px;
          height: 8px;
          background: #00ff88;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }

        .marker-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          background: rgba(0, 255, 136, 0.3);
          border-radius: 50%;
        }

        .location-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(26, 26, 26, 0.95);
          border: 1px solid #00ff88;
          border-radius: 8px;
          padding: 8px 12px;
          white-space: nowrap;
          color: #fff;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .location-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: #00ff88;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;