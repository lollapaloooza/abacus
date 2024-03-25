import Clock from "../icons/Clock";
import Email from "../icons/Email";
import Location from "../icons/Location";
import Phone from "../icons/Phone";

export const contacts_data = [
  {
    title: "+22 7272 8282",
    icon: <Phone bgcolor={"var(--5, #1A1A1A)"} width={44} height={44} />,
    id: 1,
  },
  {
    title: "+7889 Mechanic Rd.Miami, FL 33125",
    icon: <Location bgcolor={"var(--5, #1A1A1A)"} width={44} height={44} />,
    id: 2,
  },
  {
    title: "abacus-law@domain.com",
    icon: <Email bgcolor={"var(--5, #1A1A1A)"} width={44} height={44} />,
    id: 3,
  },
  { title: "07.00 am - 09.00 pm", icon: <Clock />, id: 4 },
];
