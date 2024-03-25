import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import { lawyer_proccess_data } from "@/public/data/lawyer_proccess_data";
import LawProccessItem from "./CardItems/LawProccessItem";
import IndicatorBottom from "@/public/icons/IndicatorBottom";
import IndicatorTop from "@/public/icons/IndicatorTop";
import ArrowBottomDash from "@/public/icons/ArrowBottomDash";
import { useTranslation } from "react-i18next";

export default function LawyerProccess() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();

  return (
    <Container maxWidth={1700}>
      <Box sx={{ mb: mobile ? "100px" : "192px" }}>
        <Box
          sx={{
            mb: mobile ? "50px" : "104px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: mobile ? "column" : "unset",
            rowGap: mobile ? "50px" : "unset",
          }}
        >
          <Box>
            <Text_with_title
              title_main={"pages.services.slug.lawyer_proccess.title"}
            />
          </Box>
          <Typography
            sx={{
              color: "#091F36",
              fontFamily: "Mont-SemiBold",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              maxWidth: 600,
              width: "100%",
            }}
          >
            {t("pages.services.slug.lawyer_proccess.description")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            columnGap: "100px",
            justifyContent: "center",
            flexDirection: mobile ? "column" : "unset",
            alignItems: mobile ? "center" : "unset",
            rowGap: mobile ? "50px" : "unset",
          }}
        >
          {lawyer_proccess_data.map((item) => (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: !mobile ? item.direction : "unset",
                  rowGap: !mobile
                    ? item.direction === "column"
                      ? "55px"
                      : "97px"
                    : "55px",
                }}
              >
                <LawProccessItem item={item} />

                {!mobile ? (
                  item.direction === "column" ? (
                    <Box
                      sx={{
                        display: "flex",
                        maxWidth: 390,
                        width: "100%",
                        justifyContent: "flex-end",
                        opacity: item.opacity || 1,
                      }}
                    >
                      <IndicatorBottom />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        maxWidth: 390,
                        width: "100%",
                        justifyContent: "flex-end",
                        opacity: item.opacity || 1,
                      }}
                    >
                      <IndicatorTop />
                    </Box>
                  )
                ) : null}
              </Box>
              {mobile && (
                <Box sx={{ transform: "rotate(90deg)" }}>
                  <ArrowBottomDash />
                </Box>
              )}
            </>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
