import { Box } from "@mui/material";
import Image from "next/image";

export default function ArrowBottomDash() {
  return (
    <Box
      sx={{
        position: "relative",
        width: 180,
        height: 180,
        transform: "rotate(-90deg)",
      }}
    >
      <Image
        src={"/icons/arrow-bottom.png"}
        layout="fill"
        objectFit="cover"
        alt="arrow-bottom"
      />
    </Box>
  );
}
