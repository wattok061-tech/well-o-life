import { Footer } from "../components/Footer";
import { WhatWeDo } from "../components/WhatWeDo";
import { PageWrapper } from "../components/PageWrapper";

export function WhatWeDoPage() {
  return (
    <>
      <PageWrapper>
        <main className="pt-32 pb-20">
          <WhatWeDo showLearnMore={false} />
        </main>
      </PageWrapper>
      <Footer />
    </>
  );
}
