import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Container from "../Container";
import Image from "next/image";
import Text_with_title from "../Texts/Text_with_title";
import BannerDecoration from "@/public/icons/BannerDecoration";
import { useRouter } from "next/router";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function ServicesItem({ service_data }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { push } = useRouter();
  const { url } = blur_image_url();
  const { t } = useTranslation();
  const description = t(service_data?.description).replace(
    "{br}",
    "<br/><br/>"
  );

  return (
    <Container maxWidth={1700}>
      <Box sx={{ mt: "180px", mb: mobile ? "80px" : "137px" }}>
        <Box
          sx={{
            display: "flex",
            columnGap: "106px",
            mb: mobile ? "50px" : "87px",
            flexDirection: mobile ? "column" : "unset",
            rowGap: mobile ? "50px" : "unset",
            alignItems: mobile ? "center" : "unset",
          }}
        >
          <Box
            maxWidth={
              mobile
                ? 488
                : {
                    large_monitor: 705,
                    monitor: 655,
                    desktop: 605,
                    tablet: 555,
                    mobile: 505,
                  }
            }
            maxHeight={
              mobile
                ? 350
                : {
                    large_monitor: 670,
                    monitor: 620,
                    desktop: 570,
                    tablet: 520,
                    mobile: 470,
                  }
            }
            width={"100%"}
            height={"100vh"}
            position={"relative"}
          >
            <Image
              src={service_data?.image_first}
              layout="fill"
              alt={"service-image"}
              objectFit="cover"
              style={{ borderRadius: "24px" }}
              placeholder="blur"
              blurDataURL={url}
            />
          </Box>
          <Box>
            <Box
              sx={{ position: "relative", mb: mobile ? "40px" : "87px" }}
              width={"100%"}
              position={"relative"}
              height={"100vh"}
              maxWidth={
                mobile
                  ? 488
                  : {
                      large_monitor: 788,
                      monitor: 738,
                      desktop: 688,
                      tablet: 638,
                      mobile: 588,
                    }
              }
              maxHeight={
                mobile
                  ? 350
                  : {
                      large_monitor: 393,
                      monitor: 343,
                      desktop: 293,
                      tablet: 243,
                      mobile: 193,
                    }
              }
            >
              <Box sx={{ position: "absolute", top: 20, right: 20 }}>
                <BannerDecoration />
              </Box>
              <Image
                src={service_data?.image_second}
                layout="fill"
                alt={"service-image"}
                objectFit="cover"
                style={{ borderRadius: "24px", aspectRatio: "16 / 9" }}
                placeholder="blur"
                blurDataURL={url}
              />
            </Box>
            <Box>
              <Text_with_title title_main={service_data?.title} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: 6 }}>
          <Typography
            sx={{
              color: "#091F36",
              fontFamily: "Mont-SemiBold",
              fontSize: mobile ? "16px" : "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </Typography>
          <Box>
            <Text_with_title
              title_main_font={"'RedHat-Semibold', sans-serif"}
              title_main={service_data?.price}
              span_style={"font-size:24px;"}
            />
          </Box>
          <Box sx={{ width: 260, height: 64 }}>
            <Button
              sx={{ width: "100%", borderRadius: "12px", fontSize: "24px" }}
              color="secondary"
              onClick={() => push(`/appointment`)}
            >
              {t("Make Appointment")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
