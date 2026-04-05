import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function AboutUs() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Who We Are</h1>
        <p className="text-lg text-gray-600 mb-6">
          Well Of Life Int. Ministry is a dedicated charity committed to bringing hope and assistance to those in need. 
          Our mission is to provide sustainable solutions for clean water, medical aid, and community development.
        </p>
        {/* Add more content here */}
      </main>
      <Footer />
    </div>
  );
}
