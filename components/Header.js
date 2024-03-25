import Logo from "@/public/icons/Logo";
import Container from "./Container";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { header_data } from "@/public/data/header_data";
import Link from "next/link";
import HeaderBannerSecondary from "./HeaderBannerSecondary";
import { useEffect, useState } from "react";
import HeaderBannerV2 from "./HeaderBannerV2";
import LogoLight from "@/public/icons/LogoLight";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import ChangeLangButton from "./ChangeLangButton";

export default function Header({ isntMain, title, description, whiteSpace }) {
  const [hideAshow, setHideAshow] = useState(null);
  const [top, setTop] = useState(true);
  const { route } = useRouter();
  const { t } = useTranslation();
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));

  console.log(route, 'route||')
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const scrollAction = () => {
      const scrollY = window.pageYOffset;

      if (scrollY > 100) {
        setTop(false);
      } else {
        setTop(true);
      }

      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== hideAshow &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setHideAshow(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", scrollAction);

    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, [hideAshow]);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: hideAshow === "down" ? -243 : 0,
          right: 0,
          left: 0,
          height: {
            large_monitor: 120,
            monitor: 100,
            desktop: 90,
            tablet: 80,
            mobile: 70,
          },
          background:
            isntMain && top
              ? "transparent"
              : !isntMain && top
              ? "transparent"
              : "#091F36",
          zIndex: 111,
          transition: "0.3s",
          width: "100%",
          display: {
            large_monitor: "block",
            monitor: "block",
            desktop: "block",
            tablet: "block",
            mobile: "none",
          },
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top:
              hideAshow === "down"
                ? -243
                : {
                    large_monitor: top ? 86 : 40,
                    monitor: top ? 70 : 30,
                    desktop: top ? 60 : 25,
                    tablet: top ? 50 : 20,
                    mobile: top ? 40 : 15,
                  },
            left: "50%",
            zIndex: 1111,
            maxWidth: 1820,
            transition: "0.3s",
            transform: "translateX(-50%)",
            width: "100%",
          }}
        >
          <Box
            sx={{
              px: {
                large_monitor: "162px",
                monitor: "102px",
                desktop: "82px",
                tablet: "82px",
                mobile: "82px",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "0.3s",
            }}
          >
            <Link href={"/"}>
              {!isntMain && top ? <LogoLight /> : <Logo />}
            </Link>
            <Box sx={{ display: "flex", columnGap: 4 }}>
              {header_data?.map((el) => (
                <Link
                  href={el.link}
                  style={{
                    textDecoration: "none",
                    color: !isntMain && top ? "#091F36" : "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: !isntMain && top ? "#091F36" : "white",
                      fontFamily: route === el.route ? 'Mont-Bold' : "Mont-Medium",
                      fontSize: {
                        large_monitor: "22px",
                        monitor: "20px",
                        desktop: "18px",
                        tablet: "16px",
                        mobile: "14px",
                      },
                      fontStyle: "normal",
                      lineHeight: "normal",
                    }}
                  >
                    {t(el.name)}
                  </Typography>
                </Link>
              ))}
              <ChangeLangButton {...{ top, mobile }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: isntMain
            ? "linear-gradient(to right, rgba(29, 48, 70) 50%, rgba(11, 31, 50) 50%)"
            : "white",
          backdropFilter: "blur(5px)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            background: isntMain
              ? "url(/images/header/2.png) 50% no-repeat"
              : "unset",
            height: "100%",
            mb: {
              large_monitor: 0,
              monitor: 0,
              desktop: 0,
              tablet: 0,
              mobile: route !== "/" ? "200px" : 0,
            },
          }}
        >
          <Container position={"relative"}>
            <Box
              pt={{
                large_monitor: "203px",
                monitor: "193px",
                desktop: "183px",
                tablet: "173px",
                mobile: "43px",
              }}
            >
              {mobile && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 10,
                    zIndex: 1111111,
                  }}
                >
                  <ChangeLangButton {...{ top, mobile }} />
                </Box>
              )}
              {isntMain ? (
                <HeaderBannerSecondary
                  title={t(title)}
                  whiteSpace={whiteSpace}
                  description={t(description)}
                />
              ) : (
                <HeaderBannerV2 />
              )}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
