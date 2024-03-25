import { blur_image_url } from "@/utils/blur_image_url";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function HeaderBannerMain() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  return (
    <Box
      sx={{
        display: "flex",
        pb: "222px",
        position: "relative",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "72px" }}>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: {
                large_monitor: "100px",
                monitor: "80px",
                desktop: "65px",
                tablet: "60px",
                mobile: "40px",
              },
              fontWeight: 700,
              lineHeight: "normal",
              fontFamily: "'RedHat-Bold', sans-serif",
              maxWidth: {
                large_monitor: 1007,
                monitor: 787,
                desktop: 687,
                tablet: 647,
                mobile: 647,
              },
              width: "100%",
            }}
          >
            Uphold truth for justice With
            <span style={{ fontWeight: 800 }}>“Abacus”</span> Law Firm
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: {
              large_monitor: 465,
              monitor: 365,
              desktop: 365,
              tablet: 365,
              mobile: 365,
            },
            width: "100%",
            height: "1px",
            bgcolor: "#fff",
          }}
        />
        <Box>
          <Button
            size="small"
            color="secondary"
            sx={{ fontFamily: "Mont-Regular", fontSize: "24px" }}
          >
            Get started
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: {
            large_monitor: "block",
            monitor: "block",
            desktop: "block",
            tablet: "block",
            mobile: "none",
          },
        }}
      >
        <Typography
          sx={{
            width: "100%",
            maxWidth: {
              large_monitor: 462,
              monitor: 362,
              desktop: 362,
              tablet: 362,
              mobile: 362,
            },
            color: "#FFF",
            textAlign: "right",
            fontFamily: "Mont-SemiBold",
            fontSize: {
              large_monitor: "18px",
              monitor: "16px",
              desktop: "16px",
              tablet: "16px",
              mobile: "16px",
            },
            fontStyle: "normal",
            fonWeight: 600,
            lineHeight: "normal",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie
          pellentesque urna libero velit porta. Velit pellentesque hac gravida
          pellentesque est semper. Duis lectus gravida ultricies eleifend.
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: {
            large_monitor: 0,
            monitor: 0,
            desktop: 0,
            tablet: 0,
            mobile: "auto",
          },
          bottom: {
            large_monitor: -141,
            monitor: -128,
            desktop: -88,
            tablet: -70,
            mobile: -400,
          },
          left: mobile ? "50%" : "auto",
          transform: mobile ? "translateX(-50%)" : "unset",
          display: "none",
        }}
        width={"100vw"}
        height={"100vh"}
        maxWidth={{
          large_monitor: 997,
          monitor: 897,
          desktop: 797,
          tablet: 730,
          mobile: 600,
        }}
        maxHeight={{
          large_monitor: 610,
          monitor: 540,
          desktop: 490,
          tablet: 460,
          mobile: 500,
        }}
      >
        <Box
          position={"relative"}
          width={"100vw"}
          height={"100vh"}
          maxWidth={{
            large_monitor: 997,
            monitor: 897,
            desktop: 797,
            tablet: 730,
            mobile: 600,
          }}
          maxHeight={{
            large_monitor: 610,
            monitor: 540,
            desktop: 490,
            tablet: 460,
            mobile: 500,
          }}
          sx={{ mx: "35px" }}
        >
          <Image
            src={"/images/main_page/1.png"}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "24px" }}
            placeholder="blur"
            blurDataURL={url}
          />
        </Box>
      </Box>
    </Box>
  );
}
