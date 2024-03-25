import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Text_with_title from "../Texts/Text_with_title";
import Location from "@/public/icons/Location";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function ClientItem({ el }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: "130px",
        rowGap: mobile ? "50px" : "130px",
        mb: mobile ? 0 : "180px",
        flexDirection: mobile ? "column" : el?.flexDirection,
        maxWidth: 1276,
      }}
    >
      <Box>
        <Image
          src={el?.image}
          width={220}
          height={220}
          objectFit="cover"
          style={{ borderRadius: "12px" }}
          placeholder="blur"
          blurDataURL={url}
        />
      </Box>
      <Box
        sx={{
          width: mobile ? 300 : "1px",
          height: mobile ? "1px" : 340,
          bgcolor: "#000",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
        }}
      >
        <Typography
          sx={{
            color: "var(--5, #1A1A1A)",
            textAlign: "center",
            fontFamily: "'RedHat-Bold', sans-serif",
            fontSize: mobile ? "34px" : "44px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          {t(el?.title)}
        </Typography>
        <Box>
          <Location />
          <Text_with_title title={el?.location} textAlign_second={"center"} />
        </Box>
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
          {t(el?.description)}
        </Typography>
      </Box>
    </Box>
  );
}
