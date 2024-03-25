import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandIcon from "@/public/icons/ExpandIcon";
import { useRouter } from "next/router";

export default function FooterAccordionItem({ el }) {
  const { push } = useRouter();
  return (
    <Accordion
      sx={{
        "&.MuiAccordion-root": {
          boxShadow: "none",
          border: "none",
          position: "unset",
          bgcolor: "#091F36",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandIcon width={20} height={20} color={"white"} />}
      >
        <Typography
          sx={{
            color: "white",
            fontFamily: "'RedHat-Bold', sans-serif",
            fontSize: {
              large_monitor: "54px",
              monitor: "48px",
              desktop: "46px",
              tablet: "42px",
              mobile: "22px",
            },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          {el?.title}
        </Typography>
      </AccordionSummary>
      {el?.subtitle?.map((e, ind) => (
        <AccordionDetails key={ind}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "Mont-SemiBold",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
            onClick={() => push(e.link)}
          >
            {e?.name}
          </Typography>
        </AccordionDetails>
      ))}
    </Accordion>
  );
}
