import { Box } from "@mui/material";
import Image from "next/image";

export default function Uzb() {
  return (
    <Box sx={{ position: "relative", width: 20, height: 15 }}>
      <Image
        src={"/icons/flags/Uzbekistan.png"}
        objectFit="cover"
        layout="fill"
        alt="uzb"
      />
    </Box>
  );
}
