import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Logo from "@/public/icons/Logo";
import Facebook from "@/public/icons/Facebook";
import LinkedIn from "@/public/icons/LinkedIn";
import Twitter from "@/public/icons/Twitter";
import Instagram from "@/public/icons/Instagram";
import { footer_data } from "@/public/data/footer_data";
import { useRouter } from "next/router";
import MobileFooter from "./MobileFooter";
import FooterAccordion from "./FooterAccordion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();

  return (
    <Box sx={{ width: "100%", bgcolor: "secondary.main" }}>
      <Container>
        <Box
          sx={{ pt: mobile ? "35px" : "70px", pb: mobile ? "130px" : "70px" }}
        >
          <Box>
            <Logo />
          </Box>
          <Box
            sx={{
              bgcolor: "#FFFFFF80",
              width: "100%",
              height: "1px",
              my: mobile ? "35px" : "50px",
            }}
          />
          <Box
            sx={{
              display: mobile ? "none" : "flex",
              justifyContent: "space-between",
              columnGap: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                width: "auto",
                maxWidth: 240,
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "'RedHat-Semibold', sans-serif",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
              >
                {t("About Us")}
              </Typography>
              <Typography
                color={"#fff"}
                onClick={() => push("/about-us")}
                sx={{ cursor: "pointer" }}
              >
                {t("footer.about_us.description")}
              </Typography>
              <Box sx={{ display: "flex", columnGap: "15px" }}>
                {[<LinkedIn />].map(
                  (el) => el
                )}
              </Box>
            </Box>
            {footer_data.map((el) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "20px",
                  width: "auto",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "'RedHat-Semibold', sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  {t(el.title)}
                </Typography>
                {el.subtitle.map((e) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "15px",
                      cursor: "pointer",
                    }}
                    onClick={
                      e.link
                        ? () => push(e.link)
                        : () => {
                            return;
                          }
                    }
                  >
                    {e?.icons && e.icons}
                    <Typography color={"#fff"} dangerouslySetInnerHTML={{ __html: t(e.name) }} />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Box display={mobile ? "block" : "none"}>
            <FooterAccordion />
          </Box>
          <Box
            sx={{
              bgcolor: "#FFFFFF80",
              width: "100%",
              height: "1px",
              my: mobile ? "35px" : "50px",
            }}
          />
          <Typography color={"#fff"}>
            {t("Copyright @2024 Abacus All Right Reserved")}
          </Typography>
        </Box>
      </Container>
      <MobileFooter />
    </Box>
  );
}
