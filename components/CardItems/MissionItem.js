import { Box, Typography, useMediaQuery } from "@mui/material";
import Text_with_title from "../Texts/Text_with_title";
import { useTranslation } from "react-i18next";

export default function MissionItem({ title_main, description, el }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", columnGap: "50px" }}>
        <Box
          sx={{
            maxWidth: 131,
            height: "1px",
            bgcolor: "#022A3A",
            width: "100%",
            display: mobile ? "none" : "block",
          }}
        />
        <Text_with_title title_main={title_main} />
      </Box>
      <Typography
        sx={{
          color: "rgba(30, 46, 69, 0.75)",
          fontFamily: "Mont-SemiBold",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          mt: "30px",
          // maxWidth: 485,
          ml: mobile ? 0 : "231px",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: t(description) }} />
      </Typography>
    </>
  );
}
