import { Box, Typography, useMediaQuery } from "@mui/material";

export default function HeaderBannerSecondary({
  title,
  description,
  whiteSpace,
}) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: mobile ? "40px" : "80px",
        pb: mobile ? "100px" : "200px",
        flexDirection: {
          large_monitor: "row",
          monitor: "row",
          desktop: "row",
          tablet: "row",
          mobile: "column",
        },
        rowGap: {
          large_monitor: "unset",
          monitor: "unset",
          desktop: "unset",
          tablet: "unset",
          mobile: mobile ? "40px" : "80px",
        },
        mb: {
          large_monitor: "0",
          monitor: "0",
          desktop: "0",
          tablet: "0",
          mobile: "-100px",
        },
      }}
    >
      <Typography
        sx={{
          color: "var(--4, #FFF)",
          fontFamily: "'RedHat-Bold', sans-serif",
          fontSize: {
            large_monitor: "94px",
            monitor: "84px",
            desktop: "74px",
            tablet: "64px",
            mobile: "50px",
          },
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "120px",
          whiteSpace: whiteSpace || "nowrap",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          height: !mobile ? 200 : "1px",
          width: !mobile ? "1px" : 200,
          bgcolor: "primary.main",
        }}
      />
      <Typography
        sx={{
          color: "var(--4, #FFF)",
          fontFamily: "Mont-SemiBold",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          textAlign: mobile ? "center" : "left",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
