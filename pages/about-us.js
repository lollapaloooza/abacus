import AboutUsBanner from "@/components/AboutUsBanner";
import AwardsBanner from "@/components/AwardsBanner";
import FindingHelper from "@/components/FindingHelper";
import LawBanner from "@/components/LawBanner";
import Layout from "@/components/Layout";
import MissonsBanner from "@/components/MissonsBanner";
import ReviewsBanner from "@/components/ReviewsBanner";
import TeamLeadBanner from "@/components/TeamLeadBanner";
import WelcomBanner from "@/components/WelcomBanner";
import { useMediaQuery } from "@mui/material";

export default function AboutUs() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Layout
      isntMain
      title={"About Us"}
      description={"header.about_us.description"}
    >
      <LawBanner {...{ mt: "171px" }} />
      <WelcomBanner />
      {/* <FindingHelper /> */}
      <MissonsBanner />
      {/* <AwardsBanner /> */}
      {/* <TeamLeadBanner /> */}
      {/* <ReviewsBanner mb={mobile ? "120px" : "290px"} /> */}
      <AboutUsBanner />
    </Layout>
  );
}
