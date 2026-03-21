export default function Private() {

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-6">
        Private & Confidential
      </h1>

      <p className="text-gray-600 mb-6">
        This page contains information that is intended solely for the
        designated recipient(s). The information may be confidential,
        proprietary, or legally privileged.
      </p>

      <div className="space-y-6 text-gray-700">

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Confidentiality Notice
          </h2>

          <p>
            The contents of this website and any associated communication
            are confidential and intended only for the person or entity
            to whom they are addressed. Unauthorized use, disclosure,
            copying, or distribution of this information is strictly
            prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Intended Recipient
          </h2>

          <p>
            If you are not the intended recipient, please notify the
            website administrator immediately and refrain from reviewing,
            copying, or distributing the content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Data Protection
          </h2>

          <p>
            We respect your privacy and handle personal information in
            accordance with applicable data protection laws, including
            the UK GDPR and other relevant regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Contact
          </h2>

          <p>
            If you have received confidential information in error,
            please contact us immediately at:
          </p>

          <p className="mt-2 font-medium">
            Email: support@yourstore.com
          </p>
        </section>

      </div>

    </div>
  );
}