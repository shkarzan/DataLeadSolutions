import React from 'react';

const GDPR = () => {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">GDPR Compliance</h1>
        <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to GDPR</h2>
            <p className="text-gray-600 mb-4">
              QLeadConnect is committed to protecting your personal data and respecting your privacy rights 
              under the General Data Protection Regulation (GDPR). This page outlines how we comply with 
              GDPR requirements and what rights you have regarding your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights Under GDPR</h2>
            <p className="text-gray-600 mb-4">
              As a data subject, you have the following rights:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Information</h3>
                <p className="text-gray-600">You have the right to know how your personal data is being processed.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Right of Access</h3>
                <p className="text-gray-600">You can request a copy of the personal data we hold about you.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Rectification</h3>
                <p className="text-gray-600">You can ask us to correct inaccurate or incomplete personal data.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Erasure</h3>
                <p className="text-gray-600">You can request deletion of your personal data under certain circumstances.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Restrict Processing</h3>
                <p className="text-gray-600">You can ask us to limit how we use your personal data.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Data Portability</h3>
                <p className="text-gray-600">You can request your data in a structured, machine-readable format.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Right to Object</h3>
                <p className="text-gray-600">You can object to certain types of processing of your personal data.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Basis for Processing</h2>
            <p className="text-gray-600 mb-4">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Consent:</strong> When you have given clear consent for specific processing activities</li>
              <li><strong>Contract:</strong> When processing is necessary for performing our services</li>
              <li><strong>Legal Obligation:</strong> When we must process data to comply with legal requirements</li>
              <li><strong>Legitimate Interest:</strong> When processing is necessary for our legitimate business interests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection Measures</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Staff training on data protection principles</li>
              <li>Incident response procedures</li>
              <li>Data minimization practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-600 mb-4">
              When we transfer your personal data outside the European Economic Area (EEA), we ensure 
              appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions for certain countries</li>
              <li>Binding Corporate Rules for intra-group transfers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes for 
              which it was collected, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Account data: Retained while your account is active and for 3 years after closure</li>
              <li>Transaction data: Retained for 7 years for accounting and legal purposes</li>
              <li>Marketing data: Retained until you withdraw consent or object to processing</li>
              <li>Support data: Retained for 2 years after the last interaction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Exercising Your Rights</h2>
            <p className="text-gray-600 mb-4">
              To exercise any of your GDPR rights, please contact us using the information below. 
              We will respond to your request within one month, or inform you if we need additional time.
            </p>
            <p className="text-gray-600 mb-4">
              You also have the right to lodge a complaint with your local data protection authority 
              if you believe we have not handled your personal data appropriately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Our Data Protection Officer</h2>
            <p className="text-gray-600 mb-4">
              For any questions about our GDPR compliance or to exercise your rights, please contact our 
              Data Protection Officer:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Data Protection Officer</strong></p>
              <p className="text-gray-600 mb-2">Email: dpo@qleadconnect.com</p>
              <p className="text-gray-600 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-600">
                Address: QLeadConnect, GDPR Compliance Team<br />
                123 Business Avenue, Suite 100<br />
                New York, NY 10001, USA
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GDPR;