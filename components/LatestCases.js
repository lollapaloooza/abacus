import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Image from "next/image";
import Text_with_title from "./Texts/Text_with_title";
import { useRouter } from "next/router";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function LatestCases() {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Container>
      <Box>
        <Box mb={""}>
          <Box
            sx={{
              mb: mobile ? "60px" : "84px",
              display: "flex",
              alignItems: mobile ? "center" : "unset",
              flexDirection: mobile ? "column" : "unset",
              rowGap: mobile ? "50px" : "unset",
            }}
          >
            <Box>
              <Text_with_title
                title_main={"Latest Lawyered Cases"}
                maxWidth={"auto"}
                textAlign_main={"center"}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#091F36",
                  fontFamily: "Mont-SemiBold",
                  fontSize: mobile ? "16px" : "18px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  maxWidth: mobile ? 646 : 803,
                  textAlign: mobile ? "center" : "unset",
                  display: mobile ? "block" : "none",
                }}
              >
                {t("pages.lawyers.slug.latest_cases.description")}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              columnGap: "120px",
              mb: mobile ? "100px" : "123px",
              flexDirection: mobile ? "column" : "unset",
              rowGap: mobile ? "50px" : "unset",
              alignItems: mobile ? "center" : "unset",
            }}
          >
            <Box>
              <Box
                sx={{ mb: mobile ? "50px" : "80px" }}
                maxWidth={mobile ? 654 : 646}
                maxHeight={mobile ? 400 : 667}
                position={"relative"}
                width={"100%"}
                height={"100vh"}
              >
                <Image
                  src={"/images/latest-cases/1.png"}
                  layout="fill"
                  alt="latets-cases"
                  objectFit="cover"
                  style={{ borderRadius: "24px" }}
                  placeholder="blur"
                  blurDataURL={url}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: mobile ? "30px" : "50px",
                  maxWidth: 654,
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#091F36",
                    fontFamily: "'RedHat-Bold', sans-serif",
                    fontSize: mobile ? "34px" : "44px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}
                >
                  {t("pages.lawyers.slug.latest_cases.items.1.title")}
                </Typography>
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
                  {t("pages.lawyers.slug.latest_cases.items.1.description")}
                </Typography>
                <Box>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => push(`/cases`)}
                  >
                    {t("See details")}
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#091F36",
                  fontFamily: "Mont-SemiBold",
                  fontSize: mobile ? "16px" : "18px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  maxWidth: mobile ? 646 : 803,
                  textAlign: mobile ? "center" : "unset",
                  mb: "57px",
                  display: mobile ? "none" : "block",
                }}
              >
                {t("pages.lawyers.slug.latest_cases.description")}
              </Typography>
              <Box
                sx={{ mb: mobile ? "50px" : "80px" }}
                maxWidth={mobile ? 654 : 832}
                maxHeight={mobile ? 400 : 667}
                width={"100%"}
                height={"100vh"}
                position={"relative"}
              >
                <Image
                  src={"/images/latest-cases/2.png"}
                  layout="fill"
                  alt="latets-cases"
                  objectFit="cover"
                  style={{ borderRadius: "24px" }}
                  placeholder="blur"
                  blurDataURL={url}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: mobile ? "30px" : "50px",
                  maxWidth: 654,
                }}
              >
                <Typography
                  sx={{
                    color: "#091F36",
                    fontFamily: "'RedHat-Bold', sans-serif",
                    fontSize: mobile ? "34px" : "44px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}
                >
                  {t("pages.lawyers.slug.latest_cases.items.1.title")}
                </Typography>
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
                  {t("pages.lawyers.slug.latest_cases.items.1.description")}
                </Typography>
                <Box>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => push(`/cases`)}
                  >
                    {t("See details")}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
