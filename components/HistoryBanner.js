import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Image from "next/image";
import Text_with_title from "./Texts/Text_with_title";
import Checked from "@/public/icons/Checked";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function HistoryBanner(params) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Container>
      <Box mb={"165px"}>
        <Box
          sx={{
            display: "flex",
            columnGap: "145px",
            alignItems: "center",
            flexDirection: mobile ? "column" : "row",
            rowGap: "50px",
          }}
        >
          <Box
            maxWidth={{
              large_monitor: 646,
              monitor: 546,
              desktop: 446,
              tablet: 446,
              mobile: 346,
            }}
            maxHeight={{
              large_monitor: 804,
              monitor: 704,
              desktop: 604,
              tablet: 604,
              mobile: 504,
            }}
            width={"100%"}
            height={"100vh"}
            sx={{ position: "relative" }}
          >
            <Image
              src={"/images/history-banner/1.png"}
              layout="responsive"
              width={646}
              height={804}
              objectFit="cover"
              style={{ borderRadius: "24px" }}
              placeholder="blur"
              blurDataURL={url}
            />
          </Box>
          <Box>
            <Box
              sx={{
                pb: "72px",
                borderBottom: "1px solid #25354F",
                mb: "60px",
                maxWidth: mobile ? 346 : "auto",
              }}
            >
              <Text_with_title title_main={"pages.main.history.title"} />
            </Box>
            {[
              "pages.main.history.descriptions.1",
              "pages.main.history.descriptions.2",
              "pages.main.history.descriptions.1",
              "pages.main.history.descriptions.2",
            ].map((el) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  mb: "30px",
                }}
              >
                <Checked />
                <Typography
                  sx={{
                    color: "#091F36",
                    fontFamily: "Mont-SemiBold",
                    fontSize: {
                      large_monitor: "32px",
                      monitor: "28px",
                      desktop: "24px",
                      tablet: "20px",
                      mobile: "18px",
                    },
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  {t(el)}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
