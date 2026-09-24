import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the TARGAR app and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="[pending]">
      <section>
        <h2>1. Acceptance of terms</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
      <section>
        <h2>2. Using TARGAR</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
      <section>
        <h2>3. Accounts and identity verification</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
      <section>
        <h2>4. Fees and transactions</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
      <section>
        <h2>5. Limitation of liability</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
      <section>
        <h2>6. Contact us</h2>
        <p>[Pending final legal text from TARGAR / legal counsel.]</p>
      </section>
    </LegalPage>
  );
}
