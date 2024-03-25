import ArrowLeftNoStick from "@/public/icons/ArrowLeftNoStick";
import ArrowRightNoStick from "@/public/icons/ArrowRightNoStick";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSwiper } from "swiper/react";

export default function SliderPagination({ custom }) {
  const swiper = useSwiper();
  const goToFirstSlide = () => {
    if (swiper) {
      swiper.slideTo(0);
    }
  };

  const goToLastSlide = () => {
    if (swiper) {
      const lastIndex = swiper.slides.length - 1;
      swiper.slideTo(lastIndex);
    }
  };
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: -8,
        zIndex: 2,
        maxWidth: mobile
          ? "auto"
          : lang !== "ru"
          ? 200 +
            (swiper.pagination.bullets.length + 1) * 50 +
            swiper.pagination.bullets.length * 20
          : 300 +
            (swiper.pagination.bullets.length + 1) * 50 +
            swiper.pagination.bullets.length * 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "#777",
            textAlign: "center",
            fontFamily: "'RedHat-Bold', sans-serif",
            fontSize: mobile ? "16px" : "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            cursor: "pointer",
          }}
          onClick={goToFirstSlide}
        >
          {t("First")}
        </Typography>
        <Box
          sx={{
            maxWidth: mobile
              ? "auto"
              : 50 +
                (swiper.pagination.bullets.length + 1) * 50 +
                swiper.pagination.bullets.length * 20,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box onClick={() => swiper.slidePrev()} sx={{ cursor: "pointer" }}>
            <ArrowLeftNoStick
              width={mobile ? 20 : 32}
              height={mobile ? 20 : 32}
            />
          </Box>
          {custom}
          <Box onClick={() => swiper.slideNext()} sx={{ cursor: "pointer" }}>
            <ArrowRightNoStick
              width={mobile ? 20 : 32}
              height={mobile ? 20 : 32}
            />
          </Box>
        </Box>
        <Typography
          sx={{
            color: "#777",
            textAlign: "center",
            fontFamily: "'RedHat-Bold', sans-serif",
            fontSize: mobile ? "16px" : "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            cursor: "pointer",
          }}
          onClick={goToLastSlide}
        >
          {t("Last")}
        </Typography>
      </Box>
    </Box>
  );
}
