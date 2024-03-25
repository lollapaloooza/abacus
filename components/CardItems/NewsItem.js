import { blur_image_url } from "@/utils/blur_image_url";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function NewsItem({ el }) {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const { url } = blur_image_url();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        columnGap: {
          large_monitor: "50px",
          monitor: "40px",
          desktop: "30px",
          tablet: "20px",
          mobile: "20px",
        },
        rowGap: "25px",
        flexDirection: mobile ? "column" : "unset",
        alignItems: "center",
        justifyContent: "center",
          height: "100%",
      }}
    >
      <Box
        maxWidth={{
          large_monitor: 350,
          monitor: 330,
          desktop: 310,
          tablet: 300,
          mobile: 300,
        }}
        width={"100vw"}
        position={"relative"}
        display={"block"}
      >
        <Image
          src={el?.image}
          layout="responsive"
          width={350}
          height={456}
          objectFit="cover"
          alt="news-banner"
          style={{ borderRadius: "24px" }}
          placeholder="blur"
          blurDataURL={url}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: mobile ? "center" : "unset",
          height: "100%",
            justifyContent: 'space-between'
        }}
      >
        <Box>
            <Typography
            sx={{
                color: "#091F36",
                fontFamily: "'RedHat-Bold', sans-serif",
                fontSize: {
                    large_monitor: "40px",
                    monitor: "35px",
                    desktop: "30px",
                    tablet: "25px",
                    mobile: "20px",
                },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                borderBottom: "1px solid #091F36",
                pb: {
                    large_monitor: 5,
                    monitor: 4,
                    desktop: 3,
                    tablet: 2,
                    mobile: 5,
                },
                mb: {
                    large_monitor: 5,
                    monitor: 4,
                    desktop: 3,
                    tablet: 2,
                    mobile: 5,
                },
            }}
        >
            {t(el?.title)}
        </Typography>
            <Typography
                sx={{
                    color: "#091F36",
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
                    mb: 5,
                }}
            >
                {t(el?.description)}
            </Typography>
        </Box>
        <Box>
          <Button
            size="large"
            color="secondary"
            onClick={() => push(`/news/${el?.id}`)}
            sx={{
              fontSize: mobile ? "16px" : "24px",
              p: mobile ? "10px 35px" : "10px 63px",
            }}
          >
            {t("See details")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
