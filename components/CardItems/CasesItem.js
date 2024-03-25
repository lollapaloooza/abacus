import BannerDecoration from "@/public/icons/BannerDecoration";
import { blur_image_url } from "@/utils/blur_image_url";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function CasesItem({ el, mb_img, mb_text, decoration }) {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        mt: 10,
        mx: mobile ? "auto" : 0,
        display: "flex",
        flexDirection: "column",
          justifyContent: "space-between",
      }}
      maxWidth={
        mobile
          ? 300
          : {
              large_monitor: 750,
              monitor: 700,
              desktop: 650,
              tablet: 600,
              mobile: 550,
            }
      }
    >
      <Box>
          <Box
          sx={{ position: "relative", mb: mb_img || mobile ? 3 : "60px" }}
          maxWidth={
              mobile
                  ? 300
                  : {
                      large_monitor: 750,
                      monitor: 650,
                      desktop: 550,
                      tablet: 500,
                      mobile: 450,
                  }
          }
          maxHeight={{
              large_monitor: 774,
              monitor: 674,
              desktop: 574,
              tablet: 474,
              mobile: 320,
          }}
          width={"100vw"}
          height={"100vh"}
      >
          <Image
              src={el?.image}
              layout="responsive"
              width={750}
              height={774}
              objectFit="cover"
              alt="cases-image"
              style={{ borderRadius: "24px" }}
              placeholder="blur"
              blurDataURL={url}
          />
          {decoration && (
              <Box
                  sx={{
                      position: "absolute",
                      top: tablet || mobile ? 20 : 25,
                      right: tablet || mobile ? 20 : 25,
                  }}
              >
                  <BannerDecoration
                      width={mobile ? 40 : tablet ? 62 : 72}
                      height={mobile ? 40 : tablet ? 62 : 72}
                  />
              </Box>
          )}
      </Box>
          <Typography
              sx={{
                  color: "#091F36",
                  fontFamily: "'RedHat-Bold', sans-serif",
                  fontSize: {
                      large_monitor: "44px",
                      monitor: "40px",
                      desktop: "34px",
                      tablet: "30px",
                      mobile: "28px",
                  },
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  mb: mb_text || mobile ? 2 : 5,
              }}
          >
              {t(el?.title)}
          </Typography>
          <Typography
              sx={{
                  color: "#5C5C5C",
                  fontFamily: "Mont-SemiBold",
                  fontSize: mobile ? "16px" : "18px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  mb: mb_text || 5,
              }}
          >
              {t(el?.description)}
          </Typography>
      </Box>
      <Button
        size="small"
        color="secondary"
        // onClick={() => push(`/cases/${el?.id}`)}
        sx={{
          fontSize: mobile ? "16px" : "24px",
          p: mobile ? "10px 35px" : "10px 63px",
        }}
      >
        {t("See details")}
      </Button>
    </Box>
  );
}
