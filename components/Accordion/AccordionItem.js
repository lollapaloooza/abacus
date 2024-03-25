import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExpandIcon from "@/public/icons/ExpandIcon";
import { useTranslation } from "react-i18next";

export default function AccordionItem({ el }) {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down("tablet"));
  const { t } = useTranslation();

  return (
    <Accordion
      sx={{
        "&.MuiAccordion-root": {
          boxShadow: "none",
          border: "none",
          position: "unset",
        },
      }}
    >
      <AccordionSummary
        sx={{ "&.MuiAccordionSummary-root": { p: mobile ? 0 : 2 } }}
        expandIcon={<ExpandIcon width={28} height={28} />}
      >
        <Typography
          sx={{
            color: "var(--5, #1A1A1A)",
            fontFamily: "'RedHat-Bold', sans-serif",
            fontSize: {
              large_monitor: "54px",
              monitor: "48px",
              desktop: "46px",
              tablet: "42px",
              mobile: "18px",
            },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          {t(el?.title)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            color: "#091F36",
            fontFamily: "Mont-SemiBold",
            fontSize: mobile ? "14px" : "18px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          {t(el?.description)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
