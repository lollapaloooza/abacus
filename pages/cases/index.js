import CasesSlider from "@/components/CasesSlider";
import FindingHelper from "@/components/FindingHelper";
import Layout from "@/components/Layout";
import ReviewsBanner from "@/components/ReviewsBanner";

export default function index(params) {
  return (
    <Layout isntMain title={"Cases"} description={"header.cases.description"}>
      <CasesSlider />
      <FindingHelper />
      <ReviewsBanner {...{ mt: "180px" }} />
    </Layout>
  );
}
