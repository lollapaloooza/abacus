import Image from "next/image";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function WelcomBanner() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();
  const description = t("pages.about_us.welcome_banner.description").replace(
    "{br}",
    "<br/><br/>"
  );

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          columnGap: "128px",
          mt: mobile ? "50px" : "100px",
          alignItems: mobile ? "center" : "center",
          mb: mobile ? "50px" : "96px",
          flexDirection: mobile ? "column" : "unset",
          rowGap: "50px",
        }}
      >
        <Box
          maxWidth={405}
          maxHeight={418}
          width={mobile ? "100%" : "100vw"}
          height={"100vh"}
          position={"relative"}
        >
          <Image
            src={"/images/about-us/2.png"}
            alt="welcom-banner"
            objectFit="cover"
            layout="fill"
            style={{ borderRadius: "24px" }}
            placeholder="blur"
            blurDataURL={url}
          />
        </Box>
        <Box>
          <Text_with_title
            title={"Welcome Message"}
            title_main={"pages.about_us.welcome_banner.title"}
          />
        </Box>
      </Box>
      <Typography
        sx={{
          color: "rgba(30, 46, 69, 0.85)",
          fontFamily: "Mont-SemiBold",
          fontSize: mobile ? "16px" : "18px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          mb: mobile ? "80px" : "182px",
          textAlign: mobile ? "center" : "left",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Typography>
    </Container>
  );
}
