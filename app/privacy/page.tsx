import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TARGAR collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="[pending]">
      <section>
        <h2>1. Information we collect</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
      <section>
        <h2>2. How we use your information</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
      <section>
        <h2>3. How we protect your information</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
      <section>
        <h2>4. Your rights</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
      <section>
        <h2>5. Contact us</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
    </LegalPage>
  );
}
