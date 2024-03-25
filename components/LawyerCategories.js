import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "./Container";
import { services_data } from "@/public/data/services_data";
import ArrowRightBold from "@/public/icons/ArrowRightBold";
import Text_with_title from "./Texts/Text_with_title";
import Image from "next/image";
import { useRouter } from "next/router";
import { blur_image_url } from "@/utils/blur_image_url";
import { useTranslation } from "react-i18next";
import { theme } from "@/public/theme";

export default function LawyerCategories() {
  const { push } = useRouter();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  const isTablet = useMediaQuery(theme.breakpoints.down("desktop"));
  const gridTemplateColumns = isMobile ? "1fr" : "1fr 1fr";
  const { url } = blur_image_url();
  const { t } = useTranslation();
  return (
    <Container>
      <Box sx={{ mt: "114px", mb: "100px" }}>
        <Box
          sx={{
            display: "flex",
            columnGap: "80px",
            alignItems: "center",
            mb: mobile ? "80px" : "125px",
            flexDirection: mobile ? "column" : "unset",
            rowGap: mobile ? "50px" : "unset",
          }}
        >
          <Box
            maxWidth={{
              large_monitor: 791,
              monitor: 701,
              desktop: 691,
              tablet: 601,
              mobile: 591,
            }}
            maxHeight={452}
            position={"relative"}
            width={"100%"}
            // height={"100vh"}
          >
            <Image
              src={"/images/services/1.png"}
              layout="responsive"
              width={791}
              height={452}
              alt="services-image"
              objectFit="cover"
              style={{ borderRadius: "24px" }}
              placeholder="blur"
              blurDataURL={url}
            />
          </Box>
          <Box>
            <Text_with_title
              title_main={"pages.services.lawyer_categories.title"}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: gridTemplateColumns,
            gap: isTablet ? "25px" : "40px",
          }}
        >
          {services_data.slice(0, 10).map((el, ind) => (
            <Box
              key={el.id}
              sx={{
                display: "flex",
                alignItems: isMobile ? "center" : "center",
                borderBottom: `1px solid #091F36`,
                paddingBottom: "30px",
                marginBottom: "30px",
                cursor: "pointer",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#091F36",
                  fontFamily: "'RedHat-Bold', sans-serif",
                  fontSize: isMobile ? "24px" : isTablet ? "25px" : "28px",
                  fontWeight: 600,
                }}
              >
                {t(el.title)}
              </Typography>
              <Box width={34} sx={{ alignSelf: "flex-end" }}>
                <ArrowRightBold />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
