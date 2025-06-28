import React from 'react';
import { ArrowLeft, Shield, FileText, Scale } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
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
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing, browsing, or using DigiAsset ("the Platform"), you agree to comply with and be legally bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use DigiAsset.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                  About DigiAsset
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  DigiAsset is an online marketplace that enables registered users ("Sellers") to list and sell digital products and registered users ("Buyers") to browse and purchase such products using the Pi Network ecosystem. DigiAsset acts only as a facilitator and is not a party to any transaction between Buyers and Sellers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Eligibility
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To use DigiAsset, you must be at least 18 years old or have reached the age of majority in your jurisdiction. By using the Platform, you represent and warrant that you have the legal capacity to enter into this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Account Registration & Security
                </h2>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• You are required to create an account linked to your Pi Network credentials to use certain features. You agree to provide accurate, current, and complete information during registration and to update your information as needed.</li>
                  <li>• You are solely responsible for safeguarding your account credentials. DigiAsset is not liable for any loss or damage resulting from unauthorized use of your account.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                  Marketplace Conduct
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Seller Obligations:</h3>
                    <p className="text-gray-700">Sellers must ensure that all digital products listed comply with applicable intellectual property laws and do not infringe on third-party rights.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Buyer Responsibilities:</h3>
                    <p className="text-gray-700">Buyers must carefully review product descriptions before purchase. DigiAsset does not guarantee the quality, legality, or authenticity of listed products.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Prohibited Content:</h3>
                    <p className="text-gray-700">You may not sell or distribute illegal, offensive, or harmful content, including but not limited to malware, pirated software, or prohibited digital goods.</p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                  Payment & Fees
                </h2>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• All payments must be made exclusively in Pi cryptocurrency through the Pi Network ecosystem.</li>
                  <li>• DigiAsset may charge transaction or service fees, which will be clearly disclosed before checkout.</li>
                  <li>• DigiAsset is not responsible for currency volatility or delays caused by the Pi Network infrastructure.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                  Refund Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All sales are final unless otherwise stated by the Seller. Sellers may offer refunds at their sole discretion. DigiAsset does not mediate disputes but may provide general guidance to Buyers and Sellers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                  Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All digital products remain the intellectual property of the respective Sellers or their licensors. By listing a product, Sellers grant DigiAsset a non-exclusive, worldwide, royalty-free license to use, display, and promote the product within the Platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                  Prohibited Activities
                </h2>
                <p className="text-gray-700 mb-3">You agree not to:</p>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Violate any applicable laws, regulations, or third-party rights.</li>
                  <li>• Circumvent or attempt to bypass Platform security.</li>
                  <li>• Use DigiAsset to distribute viruses, spam, or other malicious code.</li>
                  <li>• Interfere with or disrupt the integrity of DigiAsset or its services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                  Termination & Suspension
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to suspend or terminate your account at our sole discretion if you breach these Terms or engage in any fraudulent or abusive activities. You may terminate your account at any time by contacting support@digiasset.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                  Disclaimer of Warranties
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  DigiAsset is provided "as is" and "as available" without warranty of any kind. We do not guarantee that the Platform will be uninterrupted, error-free, or free from harmful components.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by law, DigiAsset and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">13</span>
                  Indemnification
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold DigiAsset, its officers, partners, and affiliates harmless from any claims, liabilities, damages, and expenses arising out of your use of the Platform or your violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">14</span>
                  Changes to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  DigiAsset may revise these Terms at any time. Updated versions will be posted on our website. Continued use of the Platform after any changes constitutes your acceptance of the revised Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">15</span>
                  Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">16</span>
                  Contact
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms, please contact us at support@digiasset.com.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;