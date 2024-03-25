import AppointmentForm from "@/components/AppointmentForm";
import FindingHelper from "@/components/FindingHelper";
import Layout from "@/components/Layout";
import ReviewsBanner from "@/components/ReviewsBanner";

export default function Appointment(params) {
  return (
    <Layout
      isntMain
      title={"Appointment"}
      description={"header.appointment.description"}
    >
      <AppointmentForm />
      <FindingHelper />
      <ReviewsBanner {...{ mt: "180px" }} />
    </Layout>
  );
}
