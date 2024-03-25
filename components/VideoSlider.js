import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import Slider from "./Slider/Slider";
import { SwiperSlide } from "swiper/react";
import DocumentationItem from "./CardItems/DocumentationItem";
import { documentation_data } from "@/public/data/documentation_data";
import { useTranslation } from "react-i18next";

export default function VideoSlider() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();

  return (
    <Container maxWidth={1600}>
      <Box sx={{ pt: mobile ? 0 : "180px", pb: mobile ? "120px" : "0" }}>
        <Box>
          <Box
            mb={mobile ? "50px" : "90px"}
            display={mobile ? "flex" : "block"}
            alignItems={mobile ? "center" : "unset"}
            justifyContent={mobile ? "center" : "unset"}
          >
            <Box>
              <Text_with_title title_main={"Video Documentation"} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              columnGap: "96px",
              position: "relative",
              mb: mobile ? "50px" : 0,
            }}
          >
            <Typography
              sx={{
                color: "#091F36",
                fontFamily: "Mont-Medium",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
                display: "flex",
                columnGap: "20px",
                position: mobile ? "unset" : "absolute",
                right: 0,
                alignItems: "center",
                width: mobile ? "auto" : 448,
                top: -116,
                textAlign: mobile ? "center" : "unset",
              }}
            >
              {t("pages.documentation.description")}
            </Typography>
          </Box>
        </Box>
        <Slider
          rows={1}
          slides={mobile ? 1 : 2}
          maxHeight={mobile ? "650px" : 1050}
          height={mobile ? "650px" : 1050}
        >
          {documentation_data.map((el) => (
            <Box
              sx={{
                maxWidth: "750px",
                maxHeight: "1204px",
              }}
            >
              <SwiperSlide
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box>
                  <DocumentationItem
                    {...{
                      el,
                      mb_img: mobile ? "50px" : "80px",
                      mb_text: "50px",
                    }}
                  />
                </Box>
              </SwiperSlide>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
