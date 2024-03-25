import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import { lawyers } from "@/public/data/lawyers";
import Text_with_title from "./Texts/Text_with_title";
import GridItem from "./CardItems/GridItem";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function LawyersGrid({
  mt,
  mb,
  width,
  height,
  mb_item,
  columnGap,
  maxWidth,
  mb_from_item,
  count,
  arr,
  button = true,
  title_main,
  title,
  desc,
}) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();
  const { push } = useRouter();
  return (
    <Container maxWidth={maxWidth || 1600}>
      <Box
        sx={{
          mt: mt ? mt : mobile ? "105px" : "145px",
          mb: mb ? mb : mobile ? "120px" : "193px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: mb_from_item || "102px",
            flexDirection: mobile ? "column" : "row",
            rowGap: "50px",
          }}
        >
          <Box sx={{ maxWidth: "786px" }}>
            <Text_with_title
              title={title || "pages.main.lawyers_grid.Lawyers"}
              title_main={title_main || "pages.main.lawyers_grid.title"}
            />
          </Box>
          {desc && (
            <Box sx={{ maxWidth: mobile ? "786px" : "455px" }}>
              <Typography
                sx={{
                  color: "#7F7F7F",
                  fontFamily: "Mont-SemiBold",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                {desc || t("pages.main.lawyers_grid.description")}
              </Typography>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            columnGap: columnGap || {
              large_monitor: "59px",
              monitor: "49px",
              desktop: "39px",
              tablet: "39px",
              mobile: "19px",
            },
            flexWrap: "wrap",
            rowGap: {
              large_monitor: "82px",
              monitor: "72px",
              desktop: "62px",
              tablet: "50px",
              mobile: "50px",
            },
            justifyContent: mobile ? "center" : "center",
          }}
        >
          {arr
            ? arr?.map((el) => (
                <GridItem {...{ el, width, height, mb: mb_item }} />
              ))
            : lawyers
                .slice(0, count || 4)
                .map((el) => (
                  <GridItem {...{ el, width, height, mb: mb_item }} />
                ))}
        </Box>
        {button && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              color="secondary"
              size="large"
              onClick={() => push("/lawyers")}
              sx={{ mt: "50px" }}
            >
              {t("Team")}
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
}
