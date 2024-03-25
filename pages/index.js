import Cases from "@/components/Cases";
import FindingHelper from "@/components/FindingHelper";
import HistoryBanner from "@/components/HistoryBanner";
import LawBanner from "@/components/LawBanner";
import LawCategoriesBanner from "@/components/LawCategoriesBanner";
import LawyersGrid from "@/components/LawyersGrid";
import Layout from "@/components/Layout";
import NewsBanner from "@/components/NewsBanner";
import ReviewsBanner from "@/components/ReviewsBanner";

export default function Home() {
  // bug fixes 1.7
  return (
    <Layout>
      <LawBanner button />
      <LawCategoriesBanner />
      <LawyersGrid
        mt={{
          large_monitor: "245px",
          monitor: "205px",
          desktop: "145px",
          tablet: "105px",
          mobile: "105px",
        }}
        mb={{
          large_monitor: "195px",
          monitor: "145px",
          desktop: "105px",
          tablet: "55px",
          mobile: "55px",
        }}
      />
      <FindingHelper />
      <Cases />
      <HistoryBanner />
      <ReviewsBanner />
      <NewsBanner />
    </Layout>
  );
}
