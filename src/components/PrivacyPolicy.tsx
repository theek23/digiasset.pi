import React from 'react';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  DigiAsset ("we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and share your data when you use DigiAsset.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">We may collect the following information:</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Account Data:</h3>
                    <p className="text-gray-700">Name, email address, Pi Network credentials, and other details you provide during registration.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Transaction Data:</h3>
                    <p className="text-gray-700">Details of purchases, sales, and Pi Network payment information.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Usage Data:</h3>
                    <p className="text-gray-700">IP address, browser type, device information, and log data for analytics and security.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Communications:</h3>
                    <p className="text-gray-700">Any messages or correspondence you send us.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-3">We use your information to:</p>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Provide and operate the DigiAsset marketplace.</li>
                  <li>• Process transactions and facilitate payments.</li>
                  <li>• Maintain the security and integrity of our Platform.</li>
                  <li>• Communicate with you about account updates, new features, or promotions.</li>
                  <li>• Comply with legal obligations.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Cookies & Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use cookies and similar technologies to enhance your user experience, analyze usage, and personalize content. You can adjust your browser settings to refuse cookies but some features may not function properly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                  How We Share Your Information
                </h2>
                <p className="text-gray-700 mb-3">We do not sell or rent your personal information. We may share data:</p>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• With service providers who help us operate the Platform (e.g., payment processors, hosting providers).</li>
                  <li>• To comply with applicable laws, legal processes, or enforceable governmental requests.</li>
                  <li>• To protect our rights, privacy, safety, or property.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement reasonable physical, technical, and administrative measures to protect your information from unauthorized access or disclosure. However, no online system is completely secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                  Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your information as long as your account is active or as needed to provide services, resolve disputes, and comply with legal obligations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                  Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You may access, update, or delete your account information by logging into your account or contacting us. We will respond to reasonable requests in accordance with applicable laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                  International Data Transfers
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries outside your own. By using DigiAsset, you consent to such transfers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                  Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  DigiAsset is not directed to individuals under the age of 13. We do not knowingly collect information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Please review it periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or your data, please contact us at support@digiasset.com.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;