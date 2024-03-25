import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "../Container";
import Image from "next/image";
import Text_with_title from "../Texts/Text_with_title";
import DateIcon from "@/public/icons/DateIcon";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";

export default function CaseDetailItem({ cases_detail }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { url } = blur_image_url();
  const { t } = useTranslation();
  const description_full_br = t(cases_detail?.description_full).replace(
    "{br}",
    "<br/></br/>"
  );

  return (
    <Container maxWidth={1600}>
      <Box sx={{ mt: "180px", mb: mobile ? "100px" : "158px" }}>
        <Box sx={{ position: "relative", mb: 10 }}>
          <Box
            sx={{
              position: "relative",
            }}
            maxWidth={1607}
            maxHeight={774}
            width={"100%"}
            height={"100%"}
          >
            <Image
              src={cases_detail?.image_big}
              layout="responsive"
              alt="cases-detail"
              objectFit="cover"
              width={1607}
              height={774}
              style={{
                borderRadius: "32px",
                boxShadow: "0px 0px 64px 0px #00000014",
              }}
              placeholder="blur"
              blurDataURL={url}
            />
            <Box
              sx={{
                background:
                  "linear-gradient(270deg, #FFF 0.37%, rgba(245, 245, 245, 0.75) 44.39%, rgba(239, 239, 239, 0.58) 79.01%, rgba(217, 217, 217, 0.00) 99.6%)",
                position: "absolute",
                top: 0,
                borderRadius: "32px",
              }}
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: mobile ? "15px" : "50%",
              top: "25%",
            }}
          >
            <Text_with_title
              maxWidth={"500px"}
              title_main={cases_detail?.title}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: mobile ? "column" : "unset",
            rowGap: mobile ? "50px" : "unset",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                columnGap: "20px",
                mb: "20px",
                alignItems: "center",
              }}
            >
              <DateIcon />
              <Text_with_title title={cases_detail?.date} />
            </Box>
            <Typography
              sx={{
                color: "rgba(9, 31, 54, 0.70)",
                fontFamily: "Mont-SemiBold",
                fontSize: mobile ? "16px" : "18px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
                maxWidth: 947,
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: description_full_br }} />
            </Typography>
          </Box>
          <Box
            sx={{ mx: "75px", position: "relative" }}
            maxWidth={296}
            maxHeight={306}
            width={"100%"}
            height={"100vh"}
            position={"relative"}
          >
            <Image
              src={cases_detail?.client_photo}
              layout="fill"
              alt="clients-image"
              objectFit="cover"
              style={{ borderRadius: "24px" }}
              placeholder="blur"
              blurDataURL={url}
            />
            <Box
              sx={{
                borderRadius: "24px",
                background:
                  "linear-gradient(180deg, rgba(30, 46, 69, 0.00) -37.33%, rgba(30, 46, 69, 0.80) 100%)",
                position: "absolute",
                top: 0,
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              maxWidth={296}
              maxHeight={306}
              width={"100%"}
              height={"100vh"}
            >
              <Box>
                <Typography
                  sx={{
                    color: "var(--4, #FFF)",
                    fontFamily: "'RedHat-Bold', sans-serif",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    mb: "50px",
                  }}
                >
                  {t("Client")}
                </Typography>
                <Typography
                  sx={{
                    color: "var(--4, #FFF)",
                    fontFamily: "Mont-SemiBold",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                  }}
                >
                  {t(cases_detail?.client_position)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
