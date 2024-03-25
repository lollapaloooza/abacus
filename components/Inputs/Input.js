import { Box, TextField, Typography, useMediaQuery } from "@mui/material";
import Text_with_title from "../Texts/Text_with_title";
import { useTranslation } from "react-i18next";

export default function Input({
  errors,
  touched,
  handleChange,
  handleBlur,
  values,
  name,
  type,
  label,
  placeholder,
  width,
  rows,
  maxWidth,
  multiline,
  padding,
  label_descript,
  required,
}) {
  const large_monitor = useMediaQuery((theme) =>
    theme.breakpoints.down("large_monitor")
  );
  const monitor = useMediaQuery((theme) =>
    theme.breakpoints.down("large_monitor")
  );
  const desktop = useMediaQuery((theme) => theme.breakpoints.down("monitor"));
  const tablet = useMediaQuery((theme) => theme.breakpoints.down("desktop"));
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        mb={"20px"}
        display={"flex"}
        alignItems={"center"}
        whiteSpace={"nowrap"}
      >
        <Text_with_title title={label} />
        {required && (
          <span
            style={{
              fontSize:
                large_monitor ||
                "32px" ||
                monitor ||
                "28px" ||
                desktop ||
                "24px" ||
                tablet ||
                "22px" ||
                mobile ||
                "18px",
              fontFamily: "Mont-Bold",
            }}
          >
            *
          </span>
        )}
        <span
          style={{
            color: "var(--5, #1A1A1A)",
            fontFamily: "Mont-SemiBold",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            marginLeft: 1,
          }}
        >
          {" "}
          {label_descript && `(${t(label_descript)})`}
        </span>
      </Box>
      <TextField
        color={errors && touched ? "primary" : "secondary"}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            transition: "0.3s",
          },
          "& .MuiOutlinedInput-input": {
            p: {
              large_monitor: padding || "24px 30px",
              monitor: padding || "24px 30px",
              desktop: padding || "20px 25px",
              tablet: padding || "18px 22px",
              mobile: padding || "15px 10px",
            },
            transition: "0.3s",
          },
          "&::placeholder": {
            color: "var(--5, #1A1A1A)",
            fontFamily: "Mont-SemiBold",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          },
          "&.Mui-focused fieldset": {
            transition: "0.3s",
          },
          fieldset: {
            border:
              errors && touched
                ? "1.5px solid primary.main"
                : "1.5px solid secondary.main",
            transition: "0.3s",
          },
          width: width || "100%",
          transition: "0.3s",
          // maxWidth: maxWidth || 725,
        }}
        type={type || "text"}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values}
        placeholder={t(placeholder)}
        rows={rows || 1}
        multiline={multiline}
      />
      {errors && touched && (
        <Typography
          sx={{
            color: "primary.main",
            fontFamily: "Mont-SemiBold",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
            position: "absolute",
            bottom: -30,
            transition: "0.3s",
          }}
        >
          {errors && errors}
        </Typography>
      )}
    </Box>
  );
}
