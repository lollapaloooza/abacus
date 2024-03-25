import AttorneyBanner from "@/components/AttorneyBanner";
import CaseDetailItem from "@/components/CardItems/CaseDetailItem";
import FindingHelper from "@/components/FindingHelper";
import Layout from "@/components/Layout";
import ReviewsBanner from "@/components/ReviewsBanner";
import { cases_data } from "@/public/data/cases_data";
import { useRouter } from "next/router";

export default function CasesDetail({}) {
  const { query } = useRouter();

  const cases_detail = cases_data?.find((el) => el.id === Number(query?.slug));
  return (
    <Layout
      isntMain
      title={"About project"}
      description={"header.cases.description"}
      whiteSpace={"normal"}
    >
      <CaseDetailItem {...{ cases_detail }} />
      <AttorneyBanner />
      {/* <FindingHelper />
      <ReviewsBanner {...{ mt: "180px" }} /> */}
    </Layout>
  );
}
