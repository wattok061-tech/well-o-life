import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatWeDo } from "../components/WhatWeDo";
import { PageWrapper } from "../components/PageWrapper";

export function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="pt-24 md:pt-32 pb-12 md:pb-20">
          <WhatWeDo showLearnMore={false} />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
