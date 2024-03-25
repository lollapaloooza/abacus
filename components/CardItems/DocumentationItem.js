import CalendarIcon from "@/public/icons/CalendarIcon";
import { Box, Typography, useMediaQuery } from "@mui/material";
import DateIcon from "@/public/icons/DateIcon";
import Clock from "@/public/icons/Clock";
import { useTranslation } from "react-i18next";

export default function DocumentationItem({ el, mb_img, mb_text }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        maxWidth: "750px",
        mt: !mobile ? (el?.isLower ? "135px" : "0") : 0,
        mr: mobile ? "auto" : "25px",
        ml: mobile ? "auto" : "25px",
      }}
    >
      <Box
        sx={{ position: "relative", mb: mb_img || "60px" }}
        maxWidth={750}
        maxHeight={{
          large_monitor: 630,
          monitor: 580,
          desktop: 530,
          tablet: 480,
          mobile: 430,
        }}
        width={"100%"}
        height={"100%"}
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "32px",
          }}
          placeholder="blur"
          controls
        >
          <source src={el?.video} />
        </video>
      </Box>
      <Box
        sx={{
          mb: "30px",
          display: "flex",
          columnGap: mobile ? "20px" : "100px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "15px" }}>
          <Clock width={26} height={26} />
          <Typography
            sx={{
              color: "#091F36",
              fontFamily: "Mont-SemiBold",
              fontSize: mobile ? "16px" : "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {t(el?.date)}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "15px" }}>
          <DateIcon />
          <Typography
            sx={{
              color: "#091F36",
              fontFamily: "Mont-SemiBold",
              fontSize: mobile ? "16px" : "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {t(el?.minute)}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          color: "#091F36",
          fontFamily: "'RedHat-Bold', sans-serif",
          fontSize: mobile ? "30px" : "44px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          mb: mb_text || 5,
        }}
      >
        {t(el?.title)}
      </Typography>
    </Box>
  );
}
