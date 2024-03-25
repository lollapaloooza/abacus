import { Box, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import Slider from "./Slider/Slider";
import { clients_data } from "@/public/data/clients_data";
import ClientItem from "./CardItems/ClientItem";
import { SwiperSlide } from "swiper/react";

export default function ClientSlider() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Container>
      <Box sx={{ mt: "180px", mb: mobile ? "150px" : "300px" }}>
        <Box sx={{ textAlign: "center", mb: mobile ? "50px" : "100px" }}>
          <Text_with_title
            title_main={"pages.our_client.title"}
            maxWidth={"auto"}
          />
        </Box>
        <Slider
          maxWidth={mobile ? 320 : "auto"}
          slides={1}
          rows={mobile ? 1 : 3}
          maxHeight={mobile ? "auto" : "1560px"}
          height={mobile ? "auto" : "1560px"}
        >
          {clients_data.map((el) => (
            <SwiperSlide
              style={{
                width: "100%",
                height: "100%",
                maxHeight: mobile ? "850px" : "396px",
                // overflowY: mobile ? "hidden" : "unset",
              }}
            >
              <ClientItem {...{ el }} />
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
