// app/terms/page.jsx  (or pages/terms.jsx)
import React from "react";

const TermsPage = () => {
  return (
    <section className="text-white min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-400">
          Terms & Conditions
        </h1>
        <p className="text-gray-300 mb-6">
          Last updated: April 2026
        </p>

        <p className="mb-6 text-gray-300">
          Welcome to <span className="font-semibold">Craftedmart Agency</span>. By
          accessing or using our website and services, you agree to comply with
          these Terms & Conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-300 mb-4">
          By using our website or services, you agree to these terms. If you do
          not agree, please do not use our site or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
        <p className="text-gray-300 mb-4">
          Craftedmart Agency provides web development, digital marketing, and related
          online solutions. Services may include:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Website design & development</li>
          <li>CMS-based solutions (WordPress, Laravel, Node.js)</li>
          <li>Digital marketing services (SEO, social media, PPC)</li>
        </ul>
        <p className="text-gray-300 mb-4">
          We reserve the right to update, modify, or discontinue any service at any time.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Provide accurate information when contacting or registering with us.</li>
          <li>Not use our services for unlawful, harmful, or fraudulent purposes.</li>
          <li>Respect intellectual property rights and privacy of others.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payments and Billing</h2>
        <p className="text-gray-300 mb-4">
          All service fees are detailed in proposals or invoices. Payments must be
          made according to the agreed schedule. Craftedmart Agency reserves the right
          to suspend services if payments are overdue.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
        <p className="text-gray-300 mb-4">
          All website content, design, code, and materials developed by Craftedmart Agency
          remain our property until full payment is received. You may not copy,
          reproduce, or distribute our materials without permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Confidentiality</h2>
        <p className="text-gray-300 mb-4">
          Any confidential data shared with Craftedmart Agency will be handled responsibly
          and not shared with third parties without consent.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Links</h2>
        <p className="text-gray-300 mb-4">
          Our website may contain links to third-party sites. We are not responsible
          for the content or practices of external sites. Use them at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
        <p className="text-gray-300 mb-4">
          Craftedmart Agency is not liable for any direct or indirect damages arising
          from the use of our services or website, including delays, interruptions,
          or loss of data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
        <p className="text-gray-300 mb-4">
          We reserve the right to terminate or suspend services to any user who
          violates these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
        <p className="text-gray-300 mb-4">
          Craftedmart Agency may update these Terms & Conditions from time to time.
          Updated versions will be posted on this page with a new “last updated” date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
        <p className="text-gray-300 mb-4">
          These terms are governed by the laws of Bangladesh. Any disputes will be
          resolved in the courts of Bangladesh.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
        <p className="text-gray-300 mb-4">
          If you have questions regarding these Terms & Conditions, contact us at:
        </p>
        <ul className="list-disc list-inside text-gray-300">
          <li>Email: info@craftedmartagency.com</li>
          <li>Phone: +880 1815 149399</li>
        </ul>
      </div>
    </section>
  );
};

export default TermsPage;
