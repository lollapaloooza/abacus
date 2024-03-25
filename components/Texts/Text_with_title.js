import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Text_with_title({
  title_main,
  title,
  title_main_font,
  maxWidth,
  fontsize_main,
  fontsize_second,
  textAlign_main,
  textAlign_second,
  span_style,
}) {
  const { t } = useTranslation();

  const title_span = t(title_main)
    .replace("{spanStyleStart}", `<span style="${span_style}">`)
    .replace("{spanStyleEnd}", "</span>");

  return (
    <>
      <Typography
        sx={{
          color: "#091F36",
          fontFamily: "Mont-Bold",
          fontSize: fontsize_second || {
            large_monitor: "32px",
            monitor: "28px",
            desktop: "24px",
            tablet: "22px",
            mobile: "18px",
          },
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          textAlign: textAlign_second || "unset",
        }}
      >
        {t(title)}
      </Typography>
      <Typography
        sx={{
          color: "#091F36",
          fontFamily: title_main_font || "'RedHat-Bold', sans-serif",
          fontSize: fontsize_main || {
            large_monitor: "69px",
            monitor: "59px",
            desktop: "49px",
            tablet: "39px",
            mobile: "29px",
          },
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          maxWidth: maxWidth || {
            large_monitor: "auto",
            monitor: 850,
            desktop: 636,
            tablet: 520,
            mobile: "auto",
          },
          textAlign: textAlign_main || "unset",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: title_span }} />
      </Typography>
    </>
  );
}
