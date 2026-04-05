import { Footer } from "../components/Footer";
import { DonationForm } from "../components/DonationForm";

export function DonatePage() {
  return (
    <>
      <main className="pt-24 md:pt-32 pb-12 md:pb-20">
        <DonationForm />
      </main>
      <Footer />
    </>
  );
}
