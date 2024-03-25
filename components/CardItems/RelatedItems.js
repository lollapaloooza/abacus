import { blur_image_url } from "@/utils/blur_image_url";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function RelatedItems({ el }) {
  const { push } = useRouter();
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: 340 }}>
      <Box
        maxWidth={340}
        maxHeight={300}
        width={"100%"}
        height={"100vh"}
        position={"relative"}
        mb={"50px"}
      >
        <Image
          src={el?.image}
          layout="fill"
          objectFit="cover"
          alt="related-image"
          style={{ borderRadius: "12px" }}
          placeholder="blur"
          blurDataURL={url}
        />
      </Box>
      <Typography
        sx={{
          color: "#25354F",
          fontFamily: "'RedHat-Bold', sans-serif",
          fontSize: "44px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          mb: 5,
          pb: 5,
          borderBottom: "1px solid #25354F",
        }}
      >
        {t(el?.title)}
      </Typography>
      <Box mb={"50px"}>
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
          {t(el?.description)?.slice(0, 80)}
        </Typography>
      </Box>
      <Box>
        <Button
          color="success"
          size="small"
          sx={{ fontSize: "24px", borderRadius: "12px" }}
          onClick={() => push(`/news/${el?.id}`)}
        >
          {t("Read now")}
        </Button>
      </Box>
    </Box>
  );
}
