import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import Container from "./Container";
import { Formik } from "formik";
import Input from "./Inputs/Input";
import Text_with_title from "./Texts/Text_with_title";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Loader from "./Loader";
import { useTranslation } from "react-i18next";

export default function ContactsForm() {
  const large_monitor = useMediaQuery((theme) =>
    theme.breakpoints.up("large_monitor")
  );
  const monitor = useMediaQuery((theme) => theme.breakpoints.up("monitor"));
  const desktop = useMediaQuery((theme) => theme.breakpoints.up("desktop"));
  const tablet = useMediaQuery((theme) => theme.breakpoints.up("tablet"));
  const mobile = useMediaQuery((theme) => theme.breakpoints.up("tablet"));
  const form = useRef();
  const { t } = useTranslation();

  return (
    <Container maxWidth={1700}>
      <Box
        sx={{
          my: mobile ? "180px" : "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: "38px",
          flexDirection: !mobile ? "column" : "unset",
        }}
      >
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
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
          }) => (
            <>
              {isSubmitting && <Loader />}
              <form ref={form} onSubmit={handleSubmit}>
                <Box sx={{ mb: 10 }}>
                  <Text_with_title
                    title_main={"Get In Touch"}
                    maxWidth={"auto"}
                  />
                </Box>
                <Grid container spacing={5}>
                  <Grid
                    item
                    mobile={12}
                    tablet={6}
                    desktop={6}
                    monitor={6}
                    large_monitor={6}
                  >
                    <Input
                      {...{
                        values: values.first_name,
                        errors: errors.first_name,
                        touched: touched.first_name,
                        handleBlur,
                        handleChange,
                        name: "first_name",
                        type: "text",
                        label: "First Name",
                        placeholder: "Enter first name",
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={12}
                    tablet={6}
                    desktop={6}
                    monitor={6}
                    large_monitor={6}
                  >
                    <Input
                      {...{
                        values: values.last_name,
                        errors: errors.last_name,
                        touched: touched.last_name,
                        handleBlur,
                        handleChange,
                        name: "last_name",
                        type: "text",
                        label: "Last Name",
                        placeholder: "Enter last name",
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={12}
                    tablet={6}
                    desktop={6}
                    monitor={6}
                    large_monitor={6}
                  >
                    <Input
                      {...{
                        values: values.email,
                        errors: errors.email,
                        touched: touched.email,
                        handleBlur,
                        handleChange,
                        name: "email",
                        type: "text",
                        label: "Your Email",
                        placeholder: "Enter your Email",
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={12}
                    tablet={6}
                    desktop={6}
                    monitor={6}
                    large_monitor={6}
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
                        required: true,
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    mobile={12}
                    tablet={12}
                    desktop={12}
                    monitor={12}
                    large_monitor={12}
                  >
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
                        label_descript: "optional",
                        placeholder: "Enter message",
                        rows: 4,
                        multiline: true,
                        maxWidth: "100%",
                      }}
                    />
                    <Button
                      size="small"
                      color="primary"
                      type="submit"
                      sx={{ mt: "30px" }}
                    >
                      {t("Enter")}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </Formik>
        <Box
          sx={{
            maxHeight: large_monitor
              ? "950px"
              : monitor
              ? "930px"
              : desktop
              ? "850px"
              : tablet
              ? "800px"
              : mobile
              ? "750px"
              : "600px",
            width: "100%",
            maxWidth: mobile ? 644 : 500,
            mt: !large_monitor ? "100px" : 0,
          }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CCUryJDqGC"
            style={{
              border: "none",
              width: "100%",
              height: "100vh",
              borderRadius: "32px",
              maxHeight: large_monitor
                ? "950px"
                : monitor
                ? "930px"
                : desktop
                ? "850px"
                : tablet
                ? "800px"
                : mobile
                ? "750px"
                : "600px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}

{
  /* <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    columnGap: "50px",
                    maxWidth: 800,
                  }}
                > */
}
