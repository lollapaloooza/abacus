import { Box, useMediaQuery } from "@mui/material";
import SliderPagination from "./SliderPagination";
import { Swiper, useSwiper } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
export default function Slider({
  children,
  maxWidth,
  maxHeight,
  rows,
  height,
  slides,
  rowGap,
  flexDirection,
  isVh,
}) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));

  return (
    <Box
      sx={{
        ".swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal":
          {
            top: "initial",
            bottom: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: mobile ? "10px" : "50px",
            width: "auto",
            left: "50%",
            transform: "translateX(-50%)",
          },
        ".swiper-pagination-bullet": {
          width: mobile ? "10px" : "20px",
          height: mobile ? "10px" : "20px",
          color: "#000",
          opacity: 1,
          background: "white",
          color: "#091F36",
          textAlign: "center",
          fontFamily: "'RedHat-Bold', sans-serif",
          fontSize: mobile ? "16px" : "24px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
        },
        ".swiper-pagination-bullet-active": {
          color: "#777",
        },
        maxHeight: height || "2800px",
        height: isVh ? "100vh" : "100%",
        ".swiper-grid-column > .swiper-wrapper": {
          flexDirection: flexDirection || "unset",
          rowGap: rowGap || "80px",
        },
      }}
    >
      <Swiper
        pagination={pagination}
        modules={[Pagination, Grid]}
        grid={{
          rows: rows || 2,
        }}
        style={{
          maxWidth: maxWidth || "1600px",
          maxHeight: maxHeight || "2800px",
          width: "100%",
          height: "100%",
          position: "relative",
          paddingBottom: "120px",
        }}
        slidesPerView={slides || 2}
      >
        {children}

        <SliderPagination />
      </Swiper>
    </Box>
  );
}
