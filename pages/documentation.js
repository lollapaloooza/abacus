import FindingHelper from "@/components/FindingHelper";
import Layout from "@/components/Layout";
import PhotoDocSlider from "@/components/PhotoDocSlider";
import ReviewsBanner from "@/components/ReviewsBanner";
import VideoSlider from "@/components/VideoSlider";
import { useMediaQuery } from "@mui/material";

export default function documentation() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Layout
      isntMain
      title={"Documentation"}
      description={"header.documentation.description"}
    >
      <VideoSlider />
      <PhotoDocSlider />
      {/*<FindingHelper />*/}
      {/*<ReviewsBanner {...{ mt: mobile ? "80px" : "180px" }} />*/}
    </Layout>
  );
}
