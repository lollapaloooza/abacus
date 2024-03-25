import { Box } from "@mui/material";

export default function Container({ children, bgcolor, maxWidth, position }) {
  return (
    <Box
      sx={{
        maxWidth: maxWidth || 1500,
        mx: "auto",
        px: {
          large_monitor: "162px",
          monitor: "142px",
          desktop: "122px",
          tablet: "102px",
          mobile: "35px",
        },
        bgcolor: bgcolor || "unset",
        position: position || "unset",
      }}
    >
      {children}
    </Box>
  );
}
