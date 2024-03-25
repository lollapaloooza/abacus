import { Box } from "@mui/material";
import Image from "next/image";

export default function Rus() {
  return (
    <Box sx={{ position: "relative", width: 20, height: 15 }}>
      <Image
        src={"/icons/flags/russia.png"}
        objectFit="cover"
        layout="fill"
        alt="uzb"
      />
    </Box>
  );
}
