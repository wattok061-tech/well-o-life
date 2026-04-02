import { Footer } from "../components/Footer";

export function Contact() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          Get in touch with us for any inquiries or support.
        </p>
        {/* Add contact form and details here */}
      </main>
      <Footer />
    </div>
  );
}
