import { blur_image_url } from "@/utils/blur_image_url";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function PhotosItem({ el }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();

  return (
    <Box
      sx={{
        mr: mobile ? "auto" : "20px",
        ml: mobile ? "auto" : "20px",
        maxWidth: mobile ? 300 : "auto",
      }}
    >
      <Box
        sx={{
          position: "relative",
          ":hover": {
            "#title": {
              opacity: 1,
            },
            "#backdrop": {
              backdropFilter: "blur(15px)",
              opacity: 1,
            },
            cursor: "pointer",
          },
        }}
        maxWidth={mobile ? 300 : 505}
        maxHeight={{
          large_monitor: 480,
          monitor: 430,
          desktop: 380,
          tablet: 330,
          mobile: 280,
        }}
        width={"100%"}
        height={"100vh"}
      >
        <Image
          src={el?.image}
          layout="fill"
          objectFit="cover"
          alt="doc-image"
          style={{
            borderRadius: "24px",
            transition: "0.3s",
          }}
          placeholder="blur"
          blurDataURL={url}
        />
        <Box
          id="backdrop"
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0,
            zIndex: 1,
            transition: "0.3s",
            borderRadius: "24px",
            width: "100%",
            height: "100%",
          }}
          maxWidth={mobile ? 300 : 505}
          maxHeight={479}
        />
        <Typography
          id={"title"}
          sx={{
            color: "var(--4, #FFF)",
            fontFamily: "'RedHat-Bold', sans-serif",
            fontSize: "44px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            maxWidth: 298,
            textAlign: "center",
            transition: "0.3s",
            opacity: 0,
            zIndex: 2,
            width: "100%",
          }}
        >
          {el?.title}
        </Typography>
      </Box>
    </Box>
  );
}
