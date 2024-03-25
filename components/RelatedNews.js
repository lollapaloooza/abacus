import { Box, useMediaQuery } from "@mui/material";
import Container from "./Container";
import Text_with_title from "./Texts/Text_with_title";
import { useEffect, useState } from "react";
import RelatedItems from "./CardItems/RelatedItems";
import { news_data } from "@/public/data/news_data";

export default function RelatedNews() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    const randomArray = [...news_data];

    for (let i = randomArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
    }

    setRelatedNews(randomArray.slice(0, 4));
  }, []);
  return (
    <Container maxWidth={1600}>
      <Box mb={"136px"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "84px",
          }}
        >
          <Text_with_title title_main={"Related News"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            columnGap: "80px",
            rowGap: "80px",
            flexWrap: "wrap",
            justifyContent: mobile ? "center" : "unset",
          }}
        >
          {relatedNews?.map((el) => (
            <RelatedItems {...{ el }} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
