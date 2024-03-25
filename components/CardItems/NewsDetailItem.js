import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { news_data } from "@/public/data/news_data";
import RecommendationItem from "./RecommendationItem";
import Container from "../Container";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function NewsDetailItem({ news }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const [recommendedArr, setRecommendedArr] = useState([]);
  const { url } = blur_image_url();
  const { t } = useTranslation();
  const description_full_br = t(news?.description_full).replaceAll(
    "{br}",
    "<br/><br/>"
  );

  useEffect(() => {
    const randomArray = [...news_data];

    for (let i = randomArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
    }

    setRecommendedArr(randomArray.slice(0, 4));
  }, []);

  return (
    <Container>
      <Box mb={mobile ? "80px" : "125px"}>
        <Box
          sx={{
            mt: "180px",
            mb: mobile ? "50px" : "80px",
            mx: mobile ? "auto" : 0,
          }}
          maxWidth={mobile ? 650 : 1600}
          maxHeight={{
            large_monitor: 650,
            monitor: 600,
            desktop: 550,
            tablet: 500,
            mobile: 200,
          }}
          position={"relative"}
          width={"100%"}
          height={"100vh"}
        >
          <Image
            src={news?.image_second}
            layout="fill"
            alt="news-detail-image"
            objectFit="cover"
            style={{ borderRadius: "32px" }}
            placeholder="blur"
            blurDataURL={url}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: mobile ? "80px" : "127px",
            rowGap: mobile ? "80px" : "127px",
            flexWrap: {
              large_monitor: "nowrap",
              monitor: "nowrap",
              desktop: "nowrap",
              tablet: "wrap",
              mobile: "wrap",
            },
            justifyContent: mobile ? "center" : "unset",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#25354F",
                fontFamily: "'RedHat-Bold', sans-serif",
                fontSize: mobile ? "40px" : "64px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                mb: "32px",
                textAlign: mobile ? "center" : "unset",
              }}
            >
              {t(news?.title)}
            </Typography>
            <Box sx={{ maxWidth: 1028 }}>
              <Typography
                sx={{
                  color: "#091F36",
                  fontFamily: "Mont-SemiBold",
                  fontSize: mobile ? "16px" : "18px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textAlign: mobile ? "center" : "unset",
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: description_full_br }}
                />
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#25354F",
                fontFamily: "'RedHat-Bold', sans-serif",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                mb: "50px",
                textAlign: mobile ? "center" : "unset",
              }}
            >
              {t("Recommendation News")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  large_monitor: "column",
                  monitor: "column",
                  desktop: "column",
                  tablet: "row",
                  mobile: "row",
                },
                rowGap: "50px",
                columnGap: "50px",
                flexWrap: "wrap",
                justifyContent: mobile ? "center" : "unset",
              }}
            >
              {recommendedArr?.map((el) => (
                <RecommendationItem {...{ el }} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
