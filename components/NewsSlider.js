import Slider from "@/components/Slider/Slider";
import Text_with_title from "@/components/Texts/Text_with_title";
import { news_data } from "@/public/data/news_data";
import { Box, useMediaQuery } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import NewsItem from "@/components/CardItems/NewsItem";
import Container from "@/components/Container";

export default function NewsSlider() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Container>
      <Box
        sx={{
          mt: "180px",
          mb: "89px",
          display: mobile ? "flex" : "block",
          justifyContent: mobile ? "center" : "unset",
        }}
      >
        <Box>
          <Text_with_title
            title={"News"}
            title_main={"pages.main.news.title"}
          />
        </Box>
      </Box>
      <Box mb={mobile ? "120px" : "200px"}>
        <Slider
          rows={3}
          maxWidth={mobile ? 350 : "1600px"}
          maxHeight={mobile ? 2000 : "1600px"}
          height={mobile ? 2000 : "1600px"}
          slides={mobile ? 1 : 2}
        >
          {news_data.map((el) => (
            <Box sx={{ maxWidth: "350px", maxHeight: "456px" }}>
              <SwiperSlide
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <NewsItem {...{ el }} />
              </SwiperSlide>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
