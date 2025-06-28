import React, { useState } from 'react';
import { Mail, Bell, Calendar, Users } from 'lucide-react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="coming-soon" className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Be Among the First to Experience DigiAsset
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Join thousands of Pi Network users waiting for the launch of the most innovative 
            digital marketplace. Get exclusive early access and updates.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center text-white">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Q2 2024 Launch</h3>
              <p className="text-purple-100">Beta version coming soon</p>
            </div>
            <div className="text-center text-white">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">10,000+</h3>
              <p className="text-purple-100">Users on waitlist</p>
            </div>
            <div className="text-center text-white">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Bell className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
              <p className="text-purple-100">Early adopter benefits</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Get Notified When We Launch
                </h3>
                <p className="text-purple-100 mb-8 text-center">
                  Be the first to know when DigiAsset goes live and receive exclusive launch bonuses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Join Waitlist</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">You're All Set!</h3>
                <p className="text-purple-100 text-lg">
                  Thank you for joining our waitlist. We'll notify you as soon as DigiAsset launches.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;