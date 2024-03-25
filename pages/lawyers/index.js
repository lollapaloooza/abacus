import FindingHelper from "@/components/FindingHelper";
import LawyersGrid from "@/components/LawyersGrid";
import Layout from "@/components/Layout";
import ReviewsBanner from "@/components/ReviewsBanner";
import { lawyersOriginal } from "@/public/data/lawyersOriginal";
import { useMediaQuery } from "@mui/material";

export default function index() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Layout
      isntMain
      title={"Lawyers"}
      description={"header.lawyers.description"}
    >
      <LawyersGrid
        {...{
          width: {
            large_monitor: 405,
            monitor: 405,
            desktop: 365,
            tablet: 265,
            mobile: 265,
          },
          height: {
            large_monitor: 500,
            monitor: 450,
            desktop: 400,
            tablet: 300,
            mobile: 300,
          },
          maxWidth: 1400,
          count: 9,
          arr: lawyersOriginal,
          button: false,
          title_main: "профессионалы — ваша правовая опора",
          title: "Команда",
          desc: "Стремимся к успешным решениям, гармонии с законом и уверенности для наших клиентов. Познакомьтесь с нами ближе – ваша надежная поддержка в мире юриспруденции",
        }}
      />
      {/*<FindingHelper />*/}
      {/*<ReviewsBanner mt={mobile ? "80px" : "180px"} />*/}
    </Layout>
  );
}
