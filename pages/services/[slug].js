import ServicesItem from "@/components/CardItems/ServicesItem";
import FindingHelper from "@/components/FindingHelper";
import LawyerProccess from "@/components/LawyerProccess";
import Layout from "@/components/Layout";
import ProLawyers from "@/components/ProLawyers";
import ReviewsBanner from "@/components/ReviewsBanner";
import { services_data } from "@/public/data/services_data";
import { useRouter } from "next/router";

export default function ServicesDetail() {
  const { query } = useRouter();
  const service_data = services_data.find(
    (el) => el.id === Number(query?.slug)
  );

  return (
    <Layout
      {...{
        isntMain: true,
        title: "Services Detail",
        description: "header.services.description",
      }}
    >
      <ServicesItem {...{ service_data }} />
      <LawyerProccess />
      <ProLawyers />
      <FindingHelper />
      <ReviewsBanner mt={"180px"} />
    </Layout>
  );
}
