import ClientSlider from "@/components/ClientSlider";
import FindingHelper from "@/components/FindingHelper";
import HistoryBanner from "@/components/HistoryBanner";
import Layout from "@/components/Layout";
import ReviewsBanner from "@/components/ReviewsBanner";

export default function OurClient(params) {
  return (
    <Layout
      isntMain
      title={"Our Client"}
      description={"header.our_client.description"}
    >
      <ClientSlider />
      <HistoryBanner />
      <FindingHelper />
      <ReviewsBanner {...{ mt: "180px" }} />
    </Layout>
  );
}
