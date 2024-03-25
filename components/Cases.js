import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import { cases_data } from "@/public/data/cases_data";
import ArrowRight from "@/public/icons/ArrowRight";
import CasesItem from "./CardItems/CasesItem";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Cases(params) {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();
  return (
    <Container maxWidth={1600}>
      <Box sx={{ py: mobile ? "80px" : "180px" }}>
        <Box mb="180px" mx={mobile ? "auto" : 0} maxWidth={mobile ? 340 : 786}>
          <Text_with_title
            title={"Cases"}
            title_main={"pages.main.cases.title"}
          />
        </Box>
          <Box display='flex' justifyContent='flex-end' mb='32px'>
              <Typography
                  sx={{
                      color: "#091F36",
                      textAlign: "center",
                      fontFamily: "Mont-SemiBold",
                      fontSize: mobile ? "16px" : "24px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal",
                      display: "flex",
                      columnGap: "20px",
                      alignItems: "center",
                      cursor: "pointer",
                  }}
                  onClick={() => push("/cases")}
              >
                  {t("See more")}
                  <ArrowRight color={"#091F36"} width={32} height={32} />
              </Typography>
          </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            flexDirection: mobile ? "column" : "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: mobile ? "column" : "unset",
              columnGap: mobile ? "15px" : "96px",
              alignItems: mobile ? "center" : "unset",
              justifyContent: mobile ? "center" : "unset",
                height: '100%'
            }}
          >
            {cases_data.slice(0, 2).map((el) => (
              <CasesItem {...{ el, decoration: true }} />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
