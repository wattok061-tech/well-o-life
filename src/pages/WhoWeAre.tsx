import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageWrapper } from "../components/PageWrapper";

export function WhoWeAre() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-5xl font-bold mb-8">Who We Are</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Well of Life is dedicated to providing hope and practical support during challenging times. We believe in the power of community to make a real difference in the lives of those battling cancer.
            </p>
          </div>
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
