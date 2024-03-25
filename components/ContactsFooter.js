import Text_with_title from "@/components/Texts/Text_with_title";
import { contacts_data } from "@/public/data/contacts_data";
import Container from "@/components/Container";
import { Box, Typography, useMediaQuery } from "@mui/material";

export default function ContactsFooter() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Container maxWidth={1600}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: mobile ? "80px" : "180px",
          flexWrap: "wrap",
          rowGap: "50px",
          columnGap: "50px",
        }}
      >
        {contacts_data.map((el, ind) => (
          <Box
            key={el.id}
            sx={{ display: "flex", columnGap: "15px", alignItems: "center" }}
          >
            {el.icon}{" "}
            <Box>
              <Typography
                sx={{
                  color: "var(--5, #1A1A1A)",
                  textAlign: "center",
                  fontFamily: "'RedHat-Bold', sans-serif",
                  fontSize: {
                    large_monitor: "24px",
                    monitor: "22px",
                    desktop: "20px",
                    tablet: "18px",
                    mobile: "18px",
                  },
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                {el.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
