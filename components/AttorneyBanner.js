import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import { lawyers } from "@/public/data/lawyers";
import GridItem from "./CardItems/GridItem";
import { useTranslation } from "react-i18next";

export default function AttorneyBanner() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();

  return (
    <Container maxWidth={1600}>
      <Box sx={{ mb: mobile ? "100px" : "210px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: mobile ? "50px" : "97px",
            alignItems: "center",
            flexDirection: mobile ? "column" : "unset",
            rowGap: mobile ? "50px" : "unset",
          }}
        >
          <Box>
            <Text_with_title
              title_main={"pages.cases.slug.attorney_banner.title"}
            />
          </Box>
          {/* <Box sx={{ maxWidth: 526, width: "100%" }}>
            <Typography
              sx={{
                color: "#091F36",
                fontFamily: "Mont-SemiBold",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              {t("pages.cases.slug.attorney_banner.description")}
            </Typography>
          </Box> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            columnGap: "100px",
            justifyContent: "center",
            flexDirection: mobile ? "column" : "unset",
            rowGap: mobile ? "30px" : "unset",
            alignItems: mobile ? "center" : "unset",
          }}
        >
          {lawyers.slice(0, 3).map((el) => (
            <GridItem
              {...{
                el,
                width: {
                  large_monitor: 465,
                  monitor: 405,
                  desktop: 365,
                  tablet: 265,
                  mobile: 265,
                },
                height: {
                  large_monitor: 500,
                  monitor: 450,
                  desktop: 400,
                  tablet: 300,
                  mobile: 300,
                },
                mb: "100px",
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
