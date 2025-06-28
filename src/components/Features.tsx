import React from 'react';
import { 
  Wallet, 
  ShoppingBag, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  Coins,
  TrendingUp
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Wallet,
      title: 'Pi-Powered Payments',
      description: 'Seamlessly transact using Pi cryptocurrency for all your digital purchases and sales.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: ShoppingBag,
      title: 'Diverse Digital Products',
      description: 'From NFTs and graphics to software and domains - everything digital in one marketplace.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Users,
      title: 'Pi Network Community',
      description: 'Connect with millions of Pi Network users in a trusted, familiar ecosystem.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Secure & Decentralized',
      description: 'Built on blockchain technology ensuring transparent and secure transactions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Instant Transactions',
      description: 'Fast, efficient transactions with minimal fees powered by Pi Network.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Trade with users worldwide, breaking down geographical barriers.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Coins,
      title: 'Zero Platform Fees',
      description: 'Keep more of your earnings with our fee-free marketplace model.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Creator Economy',
      description: 'Empower digital creators with tools to monetize their work effectively.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose DigiAsset?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of digital commerce with features designed 
            specifically for the Pi Network community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;