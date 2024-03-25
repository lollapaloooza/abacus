import { blur_image_url } from "@/utils/blur_image_url";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function LawProccessItem({ item }) {
  const { t } = useTranslation();
  const { url } = blur_image_url();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        maxWidth: 390,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
          alignItems: "center",
        }}
      >
        <Box
          maxWidth={{
            large_monitor: 200,
            monitor: 160,
            desktop: 160,
            tablet: 160,
            mobile: 160,
          }}
          maxHeight={{
            large_monitor: 200,
            monitor: 160,
            desktop: 160,
            tablet: 160,
            mobile: 160,
          }}
          width={"100%"}
          height={"100vh"}
          position={"relative"}
        >
          <Image
            src={item?.image}
            layout="fill"
            objectFit="cover"
            alt="law-progress-image"
            placeholder="blur"
            blurDataURL={url}
          />
        </Box>
        <Typography
          sx={{
            color: "#091F36",
            fontFamily: "'RedHat-Bold', sans-serif",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          {t(item?.name)}
        </Typography>
      </Box>
    </Box>
  );
}
