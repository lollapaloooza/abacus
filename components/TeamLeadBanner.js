import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Image from "next/image";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function TeamLeadBanner() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();
  const description = t("pages.about_us.awards_banner.description").replace(
    "{br}",
    "<br/><br/>"
  );

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: mobile ? "center" : "flex-end",
          columnGap: {
            large_monitor: "250px",
            monitor: "200px",
            desktop: "150px",
            tablet: "50px",
            mobile: "50px",
          },
          mb: mobile ? "120px" : "245px",
          flexDirection: mobile ? "column-reverse" : "unset",
          rowGap: mobile ? "50px" : "unset",
        }}
      >
        <Box
          sx={{
            maxWidth: {
              large_monitor: 878,
              monitor: 828,
              desktop: 778,
              tablet: 728,
              mobile: 678,
            },
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <Typography
            sx={{
              color: "#1E2E45",
              fontFamily: "Mont-SemiBold",
              fontSize: mobile ? "16px" : "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              textAlign: mobile ? "center" : "left",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Typography>
          <Typography
            sx={{
              color: "#1E2E45",
              fontFamily: "'RedHat-Bold', sans-serif",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              textAlign: mobile ? "center" : "left",
            }}
          >
            {t("pages.about_us.awards_banner.team_leader")}
          </Typography>
        </Box>
        <Box
          maxWidth={485}
          maxHeight={392}
          width={mobile ? "100%" : "100vw"}
          height={"100vh"}
          position={"relative"}
        >
          <Image
            src={"/images/team-lead/1.png"}
            layout="fill"
            alt="team-lead-image"
            objectFit="cover"
            style={{ borderRadius: "24px" }}
            placeholder="blur"
            blurDataURL={url}
          />
        </Box>
      </Box>
    </Container>
  );
}
