import React from 'react';

export const metadata = {
    title: "Relay - Privacy Policy",
    description: "Learn how we handle any data collected when using Relay extension. ",
  };

const PrivacyPolicyPage = () => {
  return (
    <>
    <div className="max-w-[520px] mt-4 mx-auto prose">
        <h1 className="text-3xl font-medium tracking-tight text-center">Privacy Policy</h1>
        <p>
          Relay is committed to protecting your privacy. This Privacy Policy describes how we handle any data collected when using the Relay Extension.
        </p>

        <h3>Data We Collect</h3>
        <h4>User ID and Preferences</h4>
        <p>We collect and use User ID and Preferences to manage onboarding and improve the user experience.</p>

        <h4>Captured Requests</h4>
        <p>
          Captured requests are stored temporarily for the user’s debugging and testing purposes. Relay does not share or transmit this data.
        </p>

        <h4>Optional Email Address</h4>
        <p>
          We only collect your email address if you choose to subscribe to updates. We use your email solely to send periodic updates and announcements. You can unsubscribe at any time.
        </p>

        <h3>Data Security</h3>
        <p>We take appropriate measures to secure any data collected. Relay does not share your data with third parties.</p>

        <h3>Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted here. We encourage you to review this policy periodically to stay informed about our data practices.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:dev@tryrelay.co">dev@tryrelay.co</a>.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
