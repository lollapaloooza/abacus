import Quote from "@/public/icons/Quote";
import Image from "next/image";
import { Box, Typography, useMediaQuery } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useEffect } from "react";
import { useState } from "react";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function ReviewsItem({ review }) {
  const [rating, setRating] = useState([]);
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  useEffect(() => {
    const newRating = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= review?.review_ball) {
        newRating.push(<StarIcon color="primary" key={`f${i}`} />);
      } else if (i - review?.review_ball <= 0.5) {
        newRating.push(<StarHalfIcon color="primary" key={`h${i}`} />);
      } else {
        newRating.push(<StarBorderIcon color="primary" key={`b${i}`} />);
      }
    }
    setRating(newRating);
  }, [review]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        columnGap: "268px",
        flexDirection: mobile ? "column" : "row",
        rowGap: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: mobile ? "50%" : 527,
          top: mobile ? 300 : 0,
          zIndex: -1,
          transform: mobile ? "translateX(-50%)" : "unset",
        }}
      >
        <Quote />
      </Box>
      <Box
        maxWidth={10}
        maxHeight={300}
        width={"100%"}
        height={"100vh"}
        position={"relative"}
        // border={"1px solid #E5E5E5"}
        // borderRadius={"50%"}
      >
        {/*<Image*/}
        {/*  // src={review?.image}*/}
        {/*  layout="fill"*/}
        {/*  style={{ borderRadius: "300px" }}*/}
        {/*  objectFit="cover"*/}
        {/*  placeholder="blur"*/}
        {/*  blurDataURL={url}*/}
        {/*/>*/}
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#091F36",
            fontFamily: "Mont-SemiBold",
            fontSize: mobile ? "14px" : "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            maxWidth: mobile ? 300 : 936,
            mb: "20px",
            zIndex: 2,
          }}
        >
          {t(review?.description)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "20px",
            flexDirection: mobile ? "column" : "unset",
            rowGap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: mobile ? "10px" : "20px",
            }}
          >
            <Typography
              sx={{
                color: "#091F36",
                fontFamily: "'RedHat-Bold', sans-serif",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              {t(review?.name)}
            </Typography>
            <Box sx={{ display: "flex", columnGap: mobile ? "5px" : "10px" }}>
              {rating?.map((el) => el)}
            </Box>
          </Box>
          <Typography
            sx={{
              color: "#091F36",
              fontFamily: "Mont-SemiBold",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {review?.review_ball}/5 - {review?.count} Reviewed
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
