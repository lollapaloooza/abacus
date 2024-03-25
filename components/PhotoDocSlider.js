import { Box, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import Slider from "./Slider/Slider";
import { SwiperSlide } from "swiper/react";
import PhotosItem from "./CardItems/PhotosItem";
import { photos_doc_data } from "@/public/data/photos_doc_data";

export default function PhotoDocSlider() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Container maxWidth={1600}>
      <Box sx={{ mt: mobile ? 0 : "180px", mb: mobile ? "120px" : "300px" }}>
        <Box sx={{ textAlign: "center", mb: mobile ? "50px" : "100px" }}>
          <Text_with_title
            title_main={"Photo Documentation"}
            maxWidth={"auto"}
          />
        </Box>
        <Slider
          maxWidth={mobile ? "505px" : 1600}
          slides={mobile ? 1 : 3}
          rows={2}
          maxHeight={"1000px"}
          height={"1000px"}
          rowGap={"40px"}
        >
          {photos_doc_data.map((el) => (
            <Box sx={{ maxWidth: mobile ? 400 : "505px", maxHeight: "479px" }}>
              <SwiperSlide
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <PhotosItem {...{ el }} />
              </SwiperSlide>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
