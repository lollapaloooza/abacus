import Image from "next/image";
import Container from "./Container";
import { Box, useMediaQuery } from "@mui/material";
import Text_with_title from "./Texts/Text_with_title";
import { blur_image_url } from "@/utils/blur_image_url";

export default function AwardsBanner() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          columnGap: "85px",
          mb: mobile ? "100px" : "165px",
          flexDirection: mobile ? "column" : "unset",
          rowGap: mobile ? "50px" : "unset",
          mx: mobile ? "auto" : "0",
        }}
        maxWidth={mobile ? 450 : "auto"}
      >
        <Box
          maxWidth={mobile ? 450 : 750}
          maxHeight={mobile ? 308 : 548}
          width={"100%"}
          height={mobile ? "100vh" : "auto"}
          position={"relative"}
        >
          <Image
            src={"/images/awards/1.png"}
            layout="fill"
            alt="awards-image"
            objectFit="cover"
            style={{ borderRadius: "24px" }}
            placeholder="blur"
            blurDataURL={url}
          />
        </Box>
        <Box>
          <Text_with_title
            title={"Success Story"}
            title_main={"pages.about_us.awards_banner.title"}
          />
        </Box>
      </Box>
    </Container>
  );
}
