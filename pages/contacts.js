import ContactsFooter from "@/components/ContactsFooter";
import ContactsForm from "@/components/ContactsForm";
import Layout from "@/components/Layout";

export default function Contacts(params) {
  return (
    <Layout
      isntMain
      title={"Our contacts"}
      description={"header.contact_us.description"}
      whiteSpace={"normal"}
    >
      <ContactsForm />
      <ContactsFooter />
    </Layout>
  );
}
