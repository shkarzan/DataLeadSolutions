import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit a website. They are widely used to make websites work more efficiently and provide 
              information to website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 mb-4">
              QLeadConnect uses cookies for several purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To remember your preferences and settings</li>
              <li>To authenticate users and prevent fraudulent use</li>
              <li>To analyze how our website is used and improve performance</li>
              <li>To provide personalized content and advertisements</li>
              <li>To enable social media features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
              <p className="text-gray-600 mb-2">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation and access to secure areas.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Cookies</h3>
              <p className="text-gray-600 mb-2">
                These cookies collect information about how visitors use our website, such as which 
                pages are visited most often. This data helps us improve our website's performance.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
              <p className="text-gray-600 mb-2">
                These cookies allow the website to remember choices you make and provide enhanced, 
                more personal features.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Targeting Cookies</h3>
              <p className="text-gray-600 mb-2">
                These cookies are used to deliver advertisements more relevant to you and your interests. 
                They may be set by us or by third-party providers.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4">
              We may also use third-party cookies from services such as:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing features</li>
              <li>Advertising networks for targeted advertising</li>
              <li>Customer support tools for chat functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-600 mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Browser settings: Most browsers allow you to refuse cookies or delete existing ones</li>
              <li>Opt-out tools: Many advertising networks provide opt-out mechanisms</li>
              <li>Privacy settings: You can adjust your privacy preferences in your account settings</li>
            </ul>
            <p className="text-gray-600 mt-4">
              Please note that disabling cookies may affect the functionality of our website and your user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="mt-4 text-gray-600">
              <p>Email: privacy@qleadconnect.com</p>
              <p>Address: 123 Business Avenue, Suite 100, New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;