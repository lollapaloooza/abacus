import NewsDetailItem from "@/components/CardItems/NewsDetailItem";
import HandledCases from "@/components/HandledCases";
import Layout from "@/components/Layout";
import RelatedNews from "@/components/RelatedNews";
import { news_data } from "@/public/data/news_data";
import { useRouter } from "next/router";

export default function NewsDetail(params) {
  const { query } = useRouter();

  const news = news_data?.find((el) => el?.id === Number(query?.slug));

  return (
    <Layout
      isntMain
      title={"News Detail"}
      description={"header.news.description"}
    >
      <NewsDetailItem {...{ news }} />
      <HandledCases />
      <RelatedNews />
    </Layout>
  );
}
