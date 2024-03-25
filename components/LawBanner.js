import Image from "next/image";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import { useRouter } from "next/router";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function LawBanner({
  title_main,
  title,
  image,
  description,
  mt,
  button,
}) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { push } = useRouter();
  const { url } = blur_image_url();
  const { t } = useTranslation();
  const description_br = t(
    "pages.about_us.about_us_banner.description",
  ).replace("{br}", "<br/><br/>");

  return (
    <Container>
      <Box
        sx={{
          mt:
            mt || mobile
              ? "100px"
              : {
                  large_monitor: "282px",
                  monitor: "202px",
                  desktop: "182px",
                  tablet: "102px",
                  mobile: "82px",
                },
          mb: mobile ? "50px" : "80px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            columnGap: {
              large_monitor: "170px",
              monitor: "80px",
              desktop: "80px",
              tablet: "80px",
              mobile: "80px",
            },
            mb: mobile ? "50px" : "120px",
            flexDirection: mobile ? "column-reverse" : "row",
            rowGap: "50px",
          }}
        >
          <Box
            maxWidth={{
              large_monitor: 677,
              monitor: 627,
              desktop: 577,
              tablet: 527,
              mobile: 477,
            }}
            maxHeight={{
              large_monitor: 699,
              monitor: 649,
              desktop: 599,
              tablet: 549,
              mobile: 499,
            }}
            width={mobile ? "100%" : "100vw"}
            height={"100vh"}
            position={"relative"}
          >
            <Image
              src={image || "/images/law-banner/1.png"}
              layout="fill"
              objectFit="cover"
              alt="law-banner"
              style={{ borderRadius: "24px" }}
              placeholder="blur"
              blurDataURL={url}
            />
          </Box>
          <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
          }}>
            <Text_with_title
              title={title || "pages.about_us.about_us_banner.title_main"}
              title_main={title_main || "pages.about_us.about_us_banner.title"}
              {...{
                maxWidth: {
                  large_monitor: 477,
                  monitor: 407,
                  desktop: 307,
                  tablet: 207,
                  mobile: 327,
                },
              }}
            />
          </Box>
        </Box>
        <Box
          maxWidth={{
            large_monitor: 1234,
            monitor: 1114,
            desktop: 986,
            tablet: "100%",
            mobile: "100%",
          }}
          mx="auto"
        >
          <Typography
            sx={{
              color: "#5C5C5C",
              fontFamily: "Mont-Regular",
              fontSize: mobile ? "16px" : "24px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              textAlign: "center",
              mb: "66px",
            }}
          >
            {t(description) || (
              <div dangerouslySetInnerHTML={{ __html: description_br }} />
            )}
          </Typography>
          {button && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                size="large"
                color="secondary"
                onClick={() => push("/about-us")}
                sx={{
                  fontSize: mobile ? "16px" : "24px",
                  p: mobile ? "10px 35px" : "10px 63px",
                }}
              >
                {t("See details")}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
