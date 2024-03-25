import BalanceIcon from "@mui/icons-material/Balance";
import GavelIcon from "@mui/icons-material/Gavel";
import ContactsIcon from "@mui/icons-material/Contacts";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const header_data = [
  { name: "Home", link: "/", route: '/', icon: <BalanceIcon />, id: 1 },
  { name: "Services", link: "/services", route: "/services", icon: <SupportAgentIcon />, id: 2 },

  // {
  //   name: "Documentation",
  //   link: "/documentation",
  //   icon: <ReceiptLongIcon />,
  //   id: 4,
  // },

  // { name: "News", link: "/news", icon: <NewReleasesIcon />, id: 6 },
  { name: "Projects", link: "/cases/1", route: "/cases/[slug]", icon: <GavelIcon />, id: 3 },
  { name: "Contact Us", link: "/contacts", route: "/contacts", icon: <ContactsIcon />, id: 4 },
  { name: "Публикации", link: "/documentation", route: "/documentation", icon: <GavelIcon />, id: 5 },
  { name: "Team", link: "/lawyers", route: "/lawyers", icon: <SupportAgentIcon />, id: 6 },
  { name: "About Us", link: "/about-us", route: "/about-us", icon: <GavelIcon />, id: 7 },
];