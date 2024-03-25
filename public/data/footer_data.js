import Email from "../icons/Email";
import Location from "../icons/Location";
import Phone from "../icons/Phone";
import { services_data } from "./services_data";

export const footer_data = [
  {
    title: "Practices",
    subtitle: [
      { name: "Корпоративное право и M&A" },
      { name: "Банковское право, финансы и финтех" },
      { name: "Недвижимость и строительство" },
      { name: "Разрешение споров" },
    ],
  },
  // {
  //   title: "Pages",
  //   subtitle: [
  //     { name: "Lawyers", link: "/lawyers" },
  //     { name: "Appointment", link: "/appointment" },
  //     { name: "Documentation", link: "/documentation" },
  //     { name: "Our Client", link: "/our-client" },
  //   ],
  // },
  // {
  //   title: "Links",
  //   subtitle: [
  //     { name: "Условия использования сайта", link: "/faq" },
  //     { name: "Политика конфиденциальности", link: "/faq" },
  //   ],
  // },
  {
    title: "Contact Us",
    subtitle: [
      { name: "+998 99 733 30 40", link: "/contacts", icons: <Phone /> },
      {
        name: "Узбекистан, Ташкент, Мирабадский район,<br/> ул. Чимкент 15/26",
        link: "/contacts",
        icons: <Location />,
      },
      { name: "abacus@law.com", link: "/contacts", icons: <Email /> },
    ],
  },
];
