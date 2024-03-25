import { Box } from "@mui/material";
import AccordionItem from "./Accordion/AccordionItem";
import Container from "./Container";
import { accordion_data } from "@/public/data/accordion_data";
import Text_with_title from "./Texts/Text_with_title";

export default function FaqAccordion() {
  return (
    <Container>
      <Box
        sx={{
          my: "180px",
        }}
      >
        <Text_with_title
          maxWidth={"auto"}
          title_main={"Frequently Asked Question"}
        />
        <Box
          sx={{
            mt: "80px",
            display: "flex",
            flexDirection: "column",
            rowGap: "60px",
          }}
        >
          {accordion_data.map((el) => (
            <AccordionItem {...{ el }} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
