import LawyerItem from "@/components/CardItems/LawyerItem";
import FindingHelper from "@/components/FindingHelper";
import HistoryBanner from "@/components/HistoryBanner";
import LatestCases from "@/components/LatestCases";
import Layout from "@/components/Layout";
import ReviewsBanner from "@/components/ReviewsBanner";
import { lawyers } from "@/public/data/lawyers";
import { lawyersOriginal } from "@/public/data/lawyersOriginal";
import { useRouter } from "next/router";

export default function LawyerDetail() {
  const { query } = useRouter();
  const lawyer_data = lawyersOriginal.find(
    (el) => Number(query?.slug) === el.id
  );
  return (
    <Layout
      isntMain
      title={"Lawyers"}
      description={"header.lawyers.description"}
    >
      <LawyerItem {...{ lawyer: lawyer_data }} />
      {/* <LatestCases />
      <HistoryBanner />
      <FindingHelper />
      <ReviewsBanner mt={"180px"} /> */}
    </Layout>
  );
}
