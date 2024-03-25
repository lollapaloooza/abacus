import Eng from "@/public/icons/flags/Eng";
import Rus from "@/public/icons/flags/Rus";
import Uzb from "@/public/icons/flags/Uzb";
import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLangButton({ top, mobile }) {
  const { t, i18n } = useTranslation();

  const [activeLang, setActiveLang] = useState({
    name: "ru",
    icon: <Rus />,
  });
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang?.name);
    setActiveLang(lang);
  };

  const languages = [
    { name: "ru", icon: <Rus /> },
    { name: "uz", icon: <Uzb /> },
    // { name: "en", icon: <Eng /> },
  ];
  return (
    <Box
      sx={{
        ":hover": {
          "#lang-options": {
            display: "block",
          },
          transition: "0.3s",
          position: "relative",
          zIndex: 9999,
          height: mobile ? 78 : "auto",
        },
      }}
    >
      <Box
        id="lang-button"
        onClick={() => handleChangeLang(activeLang)}
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
          color: !top ? "secondary.main" : "white",
          bgcolor: !top ? "white" : "secondary.main",
          fontFamily: "Mont-SemiBold",
          p: 1,
          borderRadius: "8px",
          my: 1,
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: !top
            ? "0px 0px 23px -7px rgba(9,31,54,1)"
            : "0px 0px 23px -7px white",
          ":hover": {
            bgcolor: !top ? "secondary.main" : "white",
            color: !top ? "white" : "secondary.main",
            boxShadow: !top
              ? "0px 0px 23px -7px white"
              : "0px 0px 23px -7px rgba(9,31,54,1)",
          },
        }}
      >
        {!mobile && t(activeLang?.name)} {activeLang?.icon}
      </Box>
      <Box
        id={"lang-options"}
        sx={{
          display: "none",
          transition: "0.3s",
          position: "absolute",
        }}
      >
        {languages
          ?.filter((el) => el.name !== activeLang?.name)
          ?.map((el) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                color: !top ? "secondary.main" : "white",
                bgcolor: !top ? "white" : "secondary.main",
                fontFamily: "Mont-SemiBold",
                p: 1,
                borderRadius: "8px",
                mb: 1,
                cursor: "pointer",
                transition: "0.3s",
                boxShadow: !top
                  ? "0px 0px 23px -7px rgba(9,31,54,1)"
                  : "0px 0px 23px -7px white",
                ":hover": {
                  bgcolor: !top ? "secondary.main" : "white",
                  color: !top ? "white" : "secondary.main",
                  boxShadow: !top
                    ? "0px 0px 23px -7px white"
                    : "0px 0px 23px -7px rgba(9,31,54,1)",
                },
              }}
              onClick={() => handleChangeLang(el)}
            >
              {!mobile && t(el?.name)} {el?.icon}
            </Box>
          ))}
      </Box>
    </Box>
  );
}
