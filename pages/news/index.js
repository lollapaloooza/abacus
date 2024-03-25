import FindingHelper from "@/components/FindingHelper";
import Layout from "@/components/Layout";
import NewsSlider from "@/components/NewsSlider";

export default function index() {
  return (
    <Layout isntMain title={"News"} description={"header.news.description"}>
      <NewsSlider />
      <FindingHelper {...{ mb: "80px", light: true }} />
    </Layout>
  );
}
