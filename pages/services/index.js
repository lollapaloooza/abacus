import FindingHelper from "@/components/FindingHelper";
import HistoryBanner from "@/components/HistoryBanner";
import LawyerCategories from "@/components/LawyerCategories";
import Layout from "@/components/Layout";
import ReviewsBanner from "@/components/ReviewsBanner";

export default function index(params) {
  return (
    <Layout
      {...{
        isntMain: true,
        title: "Practices",
        description: "header.services.description",
      }}
    >
      <LawyerCategories />
      {/*<HistoryBanner />*/}
      {/*<FindingHelper />*/}
      {/*<ReviewsBanner mt={"180px"} />*/}
    </Layout>
  );
}
