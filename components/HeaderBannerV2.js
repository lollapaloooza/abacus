import BannerDecorationBottom from "@/public/icons/BannerDecorationBottom";
import { blur_image_url } from "@/utils/blur_image_url";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function HeaderBannerV2() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t, i18n } = useTranslation();
  const title = t("header.main.title")
    .replace(
      "{spanStyleStart}",
      '<span style="font-weight: 800; color: #E22A34">',
    )
    .replace("{spanStyleEnd}", "</span>");


  return (
    <Box sx={{}}>
      <Box
        sx={{
          maxWidth: 1600,
          height: {
            large_monitor: 686,
            monitor: 686,
            desktop: 636,
            tablet: 586,
            mobile: 486,
          },
          width: "100%",
          // height: "100vh",
          position: "relative",
        }}
      >
        <Image
          src={"/images/main_page/2.png"}
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          blurDataURL={url}
          style={{ borderRadius: "40px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: i18n.language === "ru" ? "150px" : "64px",
            position: "absolute",
            top: mobile ? 90 : i18n.language !== "en" ? 100 : 120,
            left: mobile ? 25 : 70,
          }}
        >
          <Typography
            sx={{
              color: "#091F36",
              fontSize: {
                monitor: "90px",
                desktop: "80px",
                tablet: "70px",
                mobile: "30px",
              },
              fontWeight: 700,
              lineHeight: "normal",
              fontFamily: "'RedHat-Bold', sans-serif",
              maxWidth: mobile
                ? 270
                : i18n.language !== "ru"
                  ? {
                      large_monitor: 1007,
                      monitor: 787,
                      desktop: 687,
                      tablet: 647,
                      mobile: 647,
                    }
                  : "auto",
              width: "100%",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: title }} />
          </Typography>
          <Box>
            <Button
              size="small"
              color="secondary"
              sx={{
                fontSize: mobile ? "16px" : "24px",
                p: mobile ? "10px 35px" : "10px 63px",
              }}
            >
              {t("Get started")}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: mobile ? 30 : 56,
            right: mobile ? 30 : 56,
          }}
        >
          <BannerDecorationBottom
            width={mobile ? 60 : 128}
            height={mobile ? 60 : 128}
          />
        </Box>
      </Box>
    </Box>
  );
}
