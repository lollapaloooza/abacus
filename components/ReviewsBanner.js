import ReviewsItem from "./CardItems/ReviewsItem";
import Container from "./Container";
import { Box, useMediaQuery } from "@mui/material";
import Text_with_title from "./Texts/Text_with_title";
import Image from "next/image";
import { reviews_data } from "@/public/data/reviews_data";
import Slider from "./Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function ReviewsBanner({ mb, mt }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Container>
      <Box sx={{ mb: mb || mobile ? "120px" : "208px", mt: mt || 0 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "104px",
            flexDirection: mobile ? "column" : "row",
            rowGap: "50px",
          }}
        >
          <Box>
            <Text_with_title
              title={"Testimonials"}
              title_main={"pages.main.reviews.title"}
            />
          </Box>
          <Box
            maxWidth={{
              large_monitor: 854,
              monitor: 804,
              desktop: 754,
              tablet: 704,
              mobile: 654,
            }}
            maxHeight={394}
            width={"100%"}
            height={"100vh"}
            position={"relative"}
            ml={mobile ? "0" : "60px"}
          >
            <Image
              src={"/images/reviews-banner/1.png"}
              layout="responsive"
              width={854}
              height={394}
              objectFit="cover"
              alt="reviews-banner"
              style={{ borderRadius: "32px" }}
              placeholder="blur"
              blurDataURL={url}
            />
          </Box>
        </Box>
        <Slider rows={1} slides={1}>
          {reviews_data.map((review, idx) => (
            <Box
              sx={{
                maxWidth: mobile ? 300 : "1500px",
                maxHeight: "300px",
              }}
            >
              <SwiperSlide
                style={{
                  width: mobile ? 300 : "100%",
                  height: "100%",
                }}
              >
                <ReviewsItem {...{ review }} />
              </SwiperSlide>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
