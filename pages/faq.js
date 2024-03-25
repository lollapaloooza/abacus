import FaqAccordion from "@/components/FaqAccordion";
import FindingHelper from "@/components/FindingHelper";
import Layout from "@/components/Layout";
import ReviewsBanner from "@/components/ReviewsBanner";

export default function Faq() {
  return (
    <Layout isntMain title={"FaQ"} description={"header.faq.description"}>
      <FaqAccordion />
      <FindingHelper />
      <ReviewsBanner {...{ mt: "180px" }} />
    </Layout>
  );
}
