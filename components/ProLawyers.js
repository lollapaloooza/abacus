import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import ArrowRight from "@/public/icons/ArrowRight";
import { lawyers } from "@/public/data/lawyers";
import GridItem from "./CardItems/GridItem";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function ProLawyers() {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();

  return (
    <Container maxWidth={1600}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: mobile ? "50px" : "144px",
          flexDirection: mobile ? "column" : "unset",
          rowGap: mobile ? "50px" : "unset",
        }}
      >
        <Box>
          <Text_with_title
            maxWidth={"auto"}
            title_main={"pages.services.slug.pro_lawyers.title"}
          />
        </Box>
        <Typography
          sx={{
            color: "#091F36",
            textAlign: "center",
            fontFamily: "Mont-SemiBold",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            display: "flex",
            columnGap: "20px",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => push(`/lawyers`)}
        >
          {t("See more")}
          <ArrowRight color={"#091F36"} width={32} height={32} />
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: mobile ? "100px" : "192px",
          justifyContent: "center",
          flexDirection: mobile ? "column" : "unset",
        }}
      >
        {lawyers.slice(0, 3).map((el, ind) => (
          <Box
            sx={{
              display: "flex",
              columnGap: "80px",
              alignItems: mobile ? "center" : "flex-end",
              flexDirection: mobile ? "column" : "unset",
            }}
          >
            <GridItem
              {...{
                el,
                width: {
                  large_monitor: 426,
                  monitor: 256,
                  desktop: 256,
                  tablet: 256,
                  mobile: 256,
                },
                height: {
                  large_monitor: 521,
                  monitor: 321,
                  desktop: 321,
                  tablet: 321,
                  mobile: 321,
                },
                mb: "60px",
              }}
            />
            <Box
              sx={{
                width: mobile ? "100%" : "1px",
                maxHeight: mobile ? "1px" : 710,
                height: mobile ? "100vh" : "100%",
                bgcolor: "#091F36",
                mr: mobile ? 0 : "80px",
                mb: mobile ? "50px" : "57px",
                mt: mobile ? "50px" : "0",
                display: ind !== 2 ? "block" : "none",
                maxWidth: mobile ? "710px" : "1px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
