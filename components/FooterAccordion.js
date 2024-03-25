import { footer_data } from "@/public/data/footer_data";
import Container from "./Container";
import FooterAccordionItem from "./FooterAccordionItem";

export default function FooterAccordion() {
  return (
    <>
      {footer_data.map((el) => (
        <FooterAccordionItem {...{ el }} />
      ))}
    </>
  );
}
