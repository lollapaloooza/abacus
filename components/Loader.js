import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        bgcolor: "rgba(9, 31, 54,0.3)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 111,
        transition: "0.3s",
      }}
    >
      <CircularProgress sx={{ zIndex: 1111 }} />
    </Box>
  );
}
