import { Typography } from "@mui/material";

export default function Usual_text({ text, color }) {
  return (
    <Typography
      sx={{
        color: color || "#091F36",
        fontFamily: "Mont-SemiBold",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
      }}
    >
      {text}
    </Typography>
  );
}
