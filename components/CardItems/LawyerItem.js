import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Text_with_title from "../Texts/Text_with_title";
import Container from "../Container";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function LawyerItem({ lawyer }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Container>
      <Box
        sx={{
          my: mobile ? "100px" : "180px",
          display: "flex",
          alignItems: "center",
          columnGap: "106px",
          flexDirection: mobile ? "column" : "unset",
          rowGap: mobile ? "30px" : "unset",
        }}
      >
        <Box
          // maxWidth={{
          //   large_monitor: 788,
          //   monitor: 738,
          //   desktop: 688,
          //   tablet: 638,
          //   mobile: 588,
          // }}
          // maxHeight={{
          //   large_monitor: 711,
          //   monitor: 611,
          //   desktop: 551,
          //   tablet: 551,
          //   mobile: 551,
          // }}
          position={"relative"}
          width={"50%"}
          height={"50%"}
        >
          <Image
            src={lawyer?.image}
            width={508}
            height={511}
            layout="responsive"
            alt="lawyer-senior"
            style={{ borderRadius: "24px" }}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={url}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: mobile ? "30px" : "60px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
            <Text_with_title
              title={lawyer?.position}
              title_main={lawyer?.name}
            />
          </Box>
          <Typography
            sx={{
              color: "#091F36",
              fontFamily: "Mont-SemiBold",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              maxWidth: 693,
            }}
          >
            {t(lawyer?.description)}
          </Typography>
          {/* <Box
            sx={{
              display: "flex",
              columnGap: "50px",
              flexDirection: mobile ? "column" : "unset",
              rowGap: mobile ? "30px" : "unset",
            }}
          >
            {lawyer?.experience?.map((el) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <Text_with_title
                  fontsize_second={mobile ? "18px" : "24px"}
                  title={el?.title}
                />
                <Text_with_title title_main={el?.desc} />
              </Box>
            ))}
          </Box> */}
        </Box>
      </Box>
    </Container>
  );
}
