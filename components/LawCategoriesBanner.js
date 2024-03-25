import Image from "next/image";
import Container from "./Container";
import { Box, Typography, useMediaQuery } from "@mui/material";
import ArrowRight from "@/public/icons/ArrowRight";
import BannerDecoration from "@/public/icons/BannerDecoration";
import { services_data } from "@/public/data/services_data";
import { useRouter } from "next/router";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function LawCategoriesBanner() {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Box sx={{ width: "100%", bgcolor: "secondary.main" }}>
      <Container maxWidth={1600} position={"relative"}>
        <Box
          sx={{
            py: {
              large_monitor: "162px",
              monitor: "142px",
              desktop: "122px",
              tablet: "102px",
              mobile: "82px",
            },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: mobile ? "column" : "row",
            rowGap: "50px",
            columnGap: "50px",
          }}
        >
          <Box
            sx={{ position: "relative", display: "block" }}
            maxWidth={{
              large_monitor: 900,
              monitor: 850,
              desktop: 780,
              tablet: 680,
              mobile: 650,
            }}
            // maxHeight={{
            //   large_monitor: 476,
            //   monitor: 426,
            //   desktop: 376,
            //   tablet: 326,
            //   mobile: 206,
            // }}
            width={"100%"}
            // height={"100vh"}
          >
            <Image
              src={"/images/law-banner/2.png"}
              layout="responsive"
              width={900}
              height={476}
              alt="law-banner-categories"
              objectFit="cover"
              style={{ borderRadius: "24px" }}
              placeholder="blur"
              blurDataURL={url}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: "24px",
                bgcolor: "#80808080",
              }}
            />
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "'RedHat-Bold', sans-serif",
                fontSize: {
                  large_monitor: "69px",
                  monitor: "69px",
                  desktop: "57px",
                  tablet: "43px",
                  mobile: "27px",
                },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "capitalize",
                position: "absolute",
                maxWidth: {
                  large_monitor: 740,
                  monitor: 740,
                  desktop: 640,
                  tablet: 600,
                  mobile: 340,
                },
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                zIndex: 1,
                width: "100%",
                ml: 2,
                pr: 2,
              }}
            >
              {t("pages.main.categories_banner.title")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "block",
              maxWidth: {
                large_monitor: 665,
                monitor: 615,
                desktop: 565,
                tablet: 515,
                mobile: 465,
              },
              // width: "100%",
            }}
          >
            {services_data.slice(0, 4).map((el, ind) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: ind < 3 && "1px solid #fff",
                  mb: ind < 3 && {
                    large_monitor: "34px",
                    monitor: "34px",
                    desktop: "30px",
                    tablet: "24px",
                    mobile: "24px",
                  },
                  pb: ind < 3 && {
                    large_monitor: "34px",
                    monitor: "34px",
                    desktop: "30px",
                    tablet: "24px",
                    mobile: "24px",
                  },
                  cursor: "pointer",
                  width: "100%",
                }}
                // onClick={() => push(`/services/${el?.id}`)}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Mont-Bold",
                    fontSize: {
                      large_monitor: "30px",
                      monitor: "26px",
                      desktop: "22px",
                      tablet: "18px",
                      mobile: "14px",
                    },
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    whiteSpace: "nowrap",
                    width: "100%",
                    mr: mobile ? 0 : "46px",
                  }}
                >
                  {t(el?.title)}
                </Typography>
                <ArrowRight
                  {...{ width: mobile ? 28 : 48, height: mobile ? 28 : 48 }}
                />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: tablet || mobile ? 20 : 38,
              right: tablet || mobile ? 20 : 38,
            }}
          >
            <BannerDecoration
              width={mobile ? 40 : tablet ? 62 : 72}
              height={mobile ? 40 : tablet ? 62 : 72}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
