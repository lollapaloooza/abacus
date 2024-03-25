import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Text_with_title from "../Texts/Text_with_title";
import { useRouter } from "next/router";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function RecommendationItem({ el }) {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "50px",
        alignItems: "center",
        flexDirection: mobile ? "column" : "unset",
        rowGap: mobile ? "30px" : "unset",
      }}
      onClick={() => push(`/news/${el?.id}`)}
    >
      <Box
        sx={{ cursor: "pointer" }}
        maxWidth={200}
        maxHeight={200}
        width={"100vw"}
        height={"100vh"}
        position={"relative"}
      >
        <Image
          src={el?.image}
          layout="fill"
          alt="recommendation-image"
          objectFit="cover"
          style={{ borderRadius: "12px" }}
          placeholder="blur"
          blurDataURL={url}
        />
      </Box>
      <Box sx={{ width: 200, cursor: "pointer" }}>
        <Box sx={{ mb: "20px", pb: "20px", borderBottom: "1px solid #25354F" }}>
          <Text_with_title title={el?.title} fontsize_second={"24px"} />
        </Box>
        <Typography
          sx={{
            color: "#091F36",
            fontFamily: "Mont-SemiBold",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          {t(el?.description).slice(0, 30)}{" "}
          <span
            style={{
              color: "#E22A34",
              fontStyle: "italic",
              cursor: "pointer",
            }}
          >
            {t("read more")}
          </span>
        </Typography>
      </Box>
    </Box>
  );
}
