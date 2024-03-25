import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import { cases_data } from "@/public/data/cases_data";
import Text_with_title from "./Texts/Text_with_title";
import CasesItem from "./CardItems/CasesItem";
import Slider from "./Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

export default function CasesSlider() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();

  return (
    <Container maxWidth={1600}>
      <Box sx={{ pt: mobile ? "0" : "180px", pb: "200px" }}>
        <Box
          mb={mobile ? "190px" : "90px"}
          mx={"auto"}
          maxWidth={mobile ? 750 : "auto"}
        >
          <Text_with_title title_main={"pages.main.cases.title"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            columnGap: "96px",
            position: "relative",
            justifyContent: mobile ? "center" : "unset",
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
              position: "absolute",
              right: mobile ? "auto" : 0,
              alignItems: "center",
              maxWidth: 448,
              top: -116,
            }}
          >
            {t("pages.cases.description")}
          </Typography>
        </Box>
        <Slider
          slides={mobile ? 1 : 2}
          maxWidth={mobile ? 750 : 1600}
          rowGap={mobile ? "0px" : "80px"}
        >
          {cases_data.map((el) => (
            <Box sx={{ maxWidth: "750px", maxHeight: "1204px" }}>
              <SwiperSlide
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box mr={mobile ? 0 : 4}>
                  <CasesItem {...{ el, mb_img: "80px", mb_text: "50px" }} />
                </Box>
              </SwiperSlide>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
