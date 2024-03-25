import { Box, useMediaQuery } from "@mui/material";
import Container from "./Container";
import MissionItem from "./CardItems/MissionItem";
import { mission_data } from "@/public/data/mission_data";

export default function MissonsBanner() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  return (
    <Container maxWidth={1700}>
      <Box
        sx={{
          mt: mobile ? "120px" : "200px",
          mb: mobile ? "120px" : "330px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: mobile ? "50px" : "164px",
            columnGap: mobile ? "50px" : "unset",
            justifyContent: mobile ? "center" : "unset",
          }}
        >
          {mission_data.map((el) => (
            <Box>
              <MissionItem
                el={el}
                title_main={el.title_main}
                description={el.description}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
