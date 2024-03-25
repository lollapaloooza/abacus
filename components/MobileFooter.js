import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { header_data } from "@/public/data/header_data";
import { useTranslation } from "react-i18next";

export default function MobileFooter({}) {
  const { route, push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();

  return (
    <Box
      display={mobile ? "flex" : "none"}
      alignItems="center"
      height={70}
      boxShadow="0px 0px 16px rgba(0, 0, 0, 0.08)"
      mt={{ mobile: 1, desktop: 5 }}
      justifyContent={"space-around"}
      sx={{
        position: "fixed",
        bottom: -3,
        bgcolor: "white",
        width: "100%",
        zIndex: 999999,
        py: 1.5,
      }}
    >
      {header_data
        .filter((el) => el.name !== "Documentation")
        .map((item, ind) => (
          <IconButton
            key={item.id}
            onClick={() => push(item.link)}
            sx={{
              display: "flex",
              flexDirection: "column",
              path: { fill: route === item.link ? "#E22A34" : "#091F36" },
            }}
          >
            {item.icon}
            <Typography
              sx={{
                fontSize: "12px",
                color: route === item.link ? "#E22A34" : "#091F36",
              }}
            >
              {t(item.name)}
            </Typography>
          </IconButton>
        ))}
    </Box>
  );
}
