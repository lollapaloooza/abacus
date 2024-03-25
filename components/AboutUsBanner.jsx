import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Text_with_title from "./Texts/Text_with_title";
import Container from "./Container";

export default (params) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "100px",
          mb: mobile ? "50px" : "156px",
        }}
      >
        <Box sx={{ width: "100vw", maxWidth: 750 }}>
          <Image
            src={"/images/about-us/1.png"}
            width={750}
            height={340}
            layout="responsive"
          />
        </Box>
        <Box>
          <Text_with_title
            title={"Наш успех"}
            title_main={
              "Юридическая фирма Abacus вошла в рейтинг IFLR1000 на 2023 год"
            }
          />
        </Box>
      </Box>
    </Container>
  );
};
