import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import BannerDecoration from "@/public/icons/BannerDecoration";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function FindingHelper({ mb, light }) {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const { t } = useTranslation();


  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: light ? "white" : "secondary.main",
        mb: mb || 0,
      }}
    >
      <Container position={"relative"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            py: "90px",
          }}
        >
          <Box sx={{ position: "absolute", top: 38, right: 38 }}>
            <BannerDecoration
              width={mobile ? 40 : tablet ? 62 : 72}
              height={mobile ? 40 : tablet ? 62 : 72}
            />
          </Box>
          <Typography
            sx={{
              color: light ? "secondary.main" : "#FFF",
              fontFamily: "'RedHat-Bold', sans-serif",
              fontSize: {
                large_monitor: "72px",
                monitor: "72px",
                desktop: "60px",
                tablet: "56px",
                mobile: "32px",
              },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              mb: "32px",
              textAlign: "center",
            }}
          >
            {t("pages.main.finding_helper.title")}
          </Typography>
          <Typography
            sx={{
              color: light
                ? "rgba(9, 31, 54, 0.8)"
                : "rgba(255, 255, 255, 0.80)",
              textAlign: "center",
              fontFamily: "Mont-SemiBold",
              fontSize: {
                large_monitor: "28px",
                monitor: "27px",
                desktop: "26px",
                tablet: "25px",
                mobile: "20px",
              },
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              mb: "56px",
            }}
          >
            {t("pages.main.finding_helper.description")}
          </Typography>
          <Button
            size="small"
            color={light ? "primary" : "custom"}
            sx={{
              fontSize: mobile ? "16px" : "24px",
              p: mobile ? "10px 35px" : "10px 63px",
            }}
            onClick={() => push(`/lawyers`)}
          >
            {t("Get started")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
