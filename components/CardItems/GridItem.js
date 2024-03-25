import { blur_image_url } from "@/utils/blur_image_url";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function GridItem({ width, height, mb, el }) {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      maxWidth={
        width || {
          large_monitor: 348,
          monitor: 308,
          desktop: 248,
          tablet: 208,
          mobile: 148,
        }
      }
      onClick={() => push(`/lawyers/${el.id}`)}
      height={"100%"}
    >
      <Box
        mb={
          mb || {
            large_monitor: "50px",
            monitor: "45px",
            desktop: "40px",
            tablet: "35px",
            mobile: "30px",
          }
        }
        sx={{ position: "relative" }}
        maxWidth={
          width || {
            large_monitor: 348,
            monitor: 308,
            desktop: 248,
            tablet: 208,
            mobile: 148,
          }
        }
        height={
          height || {
            large_monitor: 457,
            monitor: 407,
            desktop: 357,
            tablet: 307,
            mobile: 207,
          }
        }
        width={mobile ? "100%" : "100vw"}
        // height={"100vh"}
      >
        <Image
          src={el?.image}
          layout="responsive"
          width={348}
          height={457}
          objectFit="cover"
          style={{ borderRadius: "24px", aspectRatio: "3 / 4 !important" }}
          placeholder="blur"
          blurDataURL={url}
        />
      </Box>
      <Typography
        sx={{
          color: "var(--6, #3A3A38)",
          fontFamily: "'RedHat-Bold', sans-serif",
          fontSize: {
            large_monitor: "44px",
            monitor: "40px",
            desktop: "34px",
            tablet: "30px",
            mobile: "24px",
          },
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          mb: {
            large_monitor: "20px",
            monitor: "18px",
            desktop: "16px",
            tablet: "14px",
            mobile: "12px",
          },
          textAlign: "center",
          maxWidth: 200,
          mx: "auto",
        }}
      >
        {t(el?.name)}
      </Typography>
      <Typography
        sx={{
          color: "var(--6, #3A3A38)",
          fontFamily: "Mont-SemiBold",
          fontSize: {
            large_monitor: "18px",
            monitor: "17px",
            desktop: "16px",
            tablet: "15px",
            mobile: "14px",
          },
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          textAlign: "center",
        }}
      >
        {t(el.position)}
      </Typography>
    </Box>
  );
}
