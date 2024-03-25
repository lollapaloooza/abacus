import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import Container from "./Container";
import { Formik } from "formik";
import Input from "./Inputs/Input";
import SelectInput from "./Inputs/Select";
import { services_data } from "@/public/data/services_data";
import Text_with_title from "./Texts/Text_with_title";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Loader from "./Loader";
import { useTranslation } from "react-i18next";

export default function AppointmentForm() {
  const mobile = useMediaQuery((theme) => theme.breakpoints.up("tablet"));
  const form = useRef();
  const { t } = useTranslation();

  return (
    <Container>
      <Box sx={{ my: "180px" }}>
        <Formik
          initialValues={{
            user_name: "",
            user_email: "",
            phone: "",
            services: "",
            date: "",
            available_hours: "",
            message: "",
          }}
          validate={(values) => {
            const errors = {};
            for (const validation in values) {
              if (validation !== "message") {
                if (!values[validation]) {
                  errors[validation] = "Required";
                }
              }
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              emailjs
                .sendForm(
                  "service_9yhnsnc",
                  "template_utn90qq",
                  form.current,
                  "lUCFx-hGlAkUHM5Gy"
                )
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
              setSubmitting(false);
            }, 1500);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <>
              {isSubmitting && <Loader />}
              <form ref={form} onSubmit={handleSubmit}>
                <Box sx={{ textAlign: "center", mb: 10 }}>
                  <Text_with_title
                    title_main={"pages.appointment.title"}
                    maxWidth={"auto"}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  <Grid container columnSpacing={"50px"}>
                    <Grid
                      item
                      mobile={12}
                      tablet={6}
                      desktop={6}
                      monitor={6}
                      large_monitor={6}
                    >
                      <Box
                        display={"block"}
                        maxWidth={mobile ? "100%" : 725}
                        width={"100%"}
                      >
                        <Input
                          {...{
                            values: values.user_name,
                            errors: errors.user_name,
                            touched: touched.user_name,
                            handleBlur,
                            handleChange,
                            name: "user_name",
                            type: "text",
                            label: "Your Name",
                            placeholder: "Enter your name",
                            maxWidth: mobile ? "100%" : 725,
                            required: true,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      mobile={12}
                      tablet={6}
                      desktop={6}
                      monitor={6}
                      large_monitor={6}
                    >
                      <Box
                        display={"block"}
                        maxWidth={mobile ? "100%" : 725}
                        width={"100%"}
                      >
                        <Input
                          {...{
                            values: values.user_email,
                            errors: errors.user_email,
                            touched: touched.user_email,
                            handleBlur,
                            handleChange,
                            name: "user_email",
                            type: "text",
                            label: "Your Email",
                            placeholder: "Enter your Email",
                            maxWidth: mobile ? "100%" : 725,
                            required: true,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      mobile={12}
                      tablet={6}
                      desktop={6}
                      monitor={6}
                      large_monitor={6}
                    >
                      <Box
                        display={"block"}
                        maxWidth={mobile ? "100%" : 725}
                        width={"100%"}
                      >
                        <Input
                          {...{
                            values: values.phone,
                            errors: errors.phone,
                            touched: touched.phone,
                            handleBlur,
                            handleChange,
                            name: "phone",
                            type: "text",
                            label: "Your Phone",
                            placeholder: "Enter your Phone",
                            maxWidth: mobile ? "100%" : 725,
                            required: true,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      mobile={12}
                      tablet={6}
                      desktop={6}
                      monitor={6}
                      large_monitor={6}
                    >
                      <Box
                        display={"block"}
                        maxWidth={mobile ? "100%" : 725}
                        width={"100%"}
                      >
                        <SelectInput
                          {...{
                            values: values.services,
                            errors: errors.services,
                            touched: touched.services,
                            handleBlur,
                            handleChange,
                            name: "services",
                            label: "Services",
                            placeholder: "Choose Services",
                            setFieldValue,
                            arr: services_data,
                            maxWidth: mobile ? "100%" : 725,
                            required: true,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      mobile={12}
                      tablet={6}
                      desktop={6}
                      monitor={6}
                      large_monitor={6}
                    >
                      <Box
                        display={"block"}
                        maxWidth={mobile ? "100%" : 725}
                        width={"100%"}
                      >
                        <Input
                          {...{
                            values: values.date,
                            errors: errors.date,
                            touched: touched.date,
                            handleBlur,
                            handleChange,
                            name: "date",
                            type: "date",
                            label: "Date",
                            maxWidth: mobile ? "100%" : 725,
                            required: true,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      mobile={12}
                      tablet={6}
                      desktop={6}
                      monitor={6}
                      large_monitor={6}
                    >
                      <Box
                        display={"block"}
                        maxWidth={mobile ? "100%" : 725}
                        width={"100%"}
                      >
                        <SelectInput
                          {...{
                            values: values.available_hours,
                            errors: errors.available_hours,
                            touched: touched.available_hours,
                            handleBlur,
                            handleChange,
                            name: "available_hours",
                            label: "Available Hours",
                            placeholder: "Choose Hours",
                            setFieldValue,
                            arr: [
                              { title: "Morning", id: 1 },
                              { title: "Afternoon", id: 2 },
                              { title: "Evening", id: 3 },
                            ],
                            maxWidth: mobile ? "100%" : 725,
                            required: true,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      mobile={12}
                      tablet={12}
                      desktop={12}
                      monitor={12}
                      large_monitor={12}
                    >
                      <Box display={"block"} maxWidth={"100%"} width={"100%"}>
                        <Input
                          {...{
                            values: values.message,
                            errors: errors.message,
                            touched: touched.message,
                            handleBlur,
                            handleChange,
                            name: "message",
                            type: "message",
                            label: "Message",
                            label_descript: "(optional)",
                            placeholder: "Enter message",
                            rows: 4,
                            multiline: true,
                            maxWidth: "100%",
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid
                      item
                      mobile={12}
                      tablet={12}
                      desktop={12}
                      monitor={12}
                      large_monitor={12}
                    >
                      <Button size="small" color="primary" type="submit">
                        {t("Enter")}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
