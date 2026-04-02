import { Footer } from "../components/Footer";

export function Programs() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">What We Do</h1>
        <p className="text-lg text-gray-600 mb-6">
          We focus on sustainable programs that create lasting change.
        </p>
        {/* Add detailed program descriptions here */}
      </main>
      <Footer />
    </div>
  );
}
