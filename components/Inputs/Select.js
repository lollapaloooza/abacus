import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import Text_with_title from "../Texts/Text_with_title";

export default function SelectInput({
  errors,
  touched,
  handleChange,
  handleBlur,
  values,
  name,
  type,
  label,
  placeholder,
  setFieldValue,
  arr,
  maxWidth,
}) {
  return (
    <Box sx={{ mb: "50px", position: "relative" }}>
      <Box mb={"20px"}>
        <Text_with_title title={label} />
      </Box>
      <FormControl
        color={errors ? "primary" : "secondary"}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            transition: "0.3s",
          },
          "& .MuiOutlinedInput-input": {
            p: "24px 30px",
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
            border: errors
              ? "1.5px solid primary.main"
              : "1.5px solid secondary.main",
            // borderColor: errors ? "primary.main" : "secondary.main",
            transition: "0.3s",
          },
          width: "100%",
          transition: "0.3s",
          maxWidth: maxWidth || 725,
          cursor: "pointer",
        }}
      >
        <Select name={name} value={values} onChange={handleChange}>
          <MenuItem
            value={""}
            onClick={(e) => setFieldValue(name, e.target.value)}
          >
            None
          </MenuItem>
          {arr &&
            arr.map((el) => (
              <MenuItem
                value={el.id}
                onClick={(e) => setFieldValue(name, e.target.value)}
              >
                {el.title}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
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
        {errors && touched && errors}
      </Typography>
    </Box>
  );
}
