import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

import Grid from "@material-ui/core/Grid";
import {
  Button,
  Container,
  CssBaseline,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Switches from "./switch";
import DatePickers from "./datepicker";
import SimpleSelect from "./selector";
import SimpleSelectS from "./selectorStatus";

import FormikField from "./formikfield/formikfield";

interface FormValues {
  name: string;
  job: string;
  status: string;
  address: string;
  neighborhood: string;
  city: string;
  cel: string;
  cep: string;
  phone: string;
  phone2: string;
  contact: string;
  email: string;
  rg: string;
  cpf: string;
}

const initialValues: FormValues = {
  name: "",
  job: "",
  status: "",
  address: "",
  neighborhood: "",
  city: "",
  cel: "",
  cep: "",
  phone: "",
  phone2: "",
  contact: "",
  email: "",
  rg: "",
  cpf: "",
};

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").required("Required"),
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: 26,
      marginBottom: 40,
      color: theme.palette.text.secondary,
      marginTop: 40,
    },
    button: {
      position: "relative",
      right: -710,
      marginTop: 40,
    },
  })
);

export default function FormikComponent() {
  async function handleSubmit(values: FormValues) {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    return data.values;
  }

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Paper elevation={20} className={classes.paper}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={SignupSchema}
          >
            {({ dirty, isValid, resetForm }) => {
              return (
                <>
                  <Form>
                    <div className={classes.root}>
                      <Grid
                        spacing={4}
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                      >
                        <Grid item xs={6}>
                          <FormikField name="name" label="Name" required />
                        </Grid>
                        <Grid item xs={3}>
                          <SimpleSelect />
                        </Grid>
                        <Grid item xs={3}>
                          <SimpleSelectS />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikField
                            name="job"
                            label="Cargo Pretendido"
                            required
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <DatePickers />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikField
                            name="address"
                            label="Endereço"
                            required
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikField
                            name="neighborhood"
                            label="Bairro"
                            required
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <FormikField name="city" label="Cidade" required />
                        </Grid>
                        <Grid item xs={3}>
                          <FormikField name="cep" label="Cep" required />
                        </Grid>
                        <Grid item xs={3}>
                          <FormikField
                            name="phone"
                            label="Telefone Fixo"
                            required
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <FormikField
                            name="phone2"
                            label="Telefone Fixo 2"
                            required
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <FormikField name="cel" label="Celular" required />
                        </Grid>
                        <Grid item xs={3}>
                          <FormikField
                            name="contact"
                            label="Contato"
                            required
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <FormikField name="email" label="Email" required />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>Documentos</Typography>
                          <Divider />
                        </Grid>
                        <Grid item xs={3}>
                          <FormikField name="rg" label="Identidade" required />
                        </Grid>
                        <Grid item xs={3}>
                          <FormikField name="cpf" label="CPF" required />
                        </Grid>
                        <Grid item xs={3}>
                          <Typography style={{ margin: 4 }}>Veículo</Typography>

                          <Switches />
                        </Grid>
                        <Grid item xs={3}>
                          <Typography style={{ margin: 4 }}>
                            Habilitação
                          </Typography>

                          <Switches />
                        </Grid>
                      </Grid>
                    </div>
                    <Grid item xs={12} style={{ marginBottom: 20 }}>
                      <Button
                        style={{ marginBottom: 20 }}
                        color="secondary"
                        variant="contained"
                        className={classes.button}
                        disabled={!dirty || !isValid}
                        type="submit"
                        onClick={() => resetForm(initialValues)}
                        onSubmit={() => alert("Cadastro enviado com sucesso!")}
                      >
                        Submeter
                      </Button>
                    </Grid>
                  </Form>
                </>
              );
            }}
          </Formik>
        </Paper>
      </Container>
    </>
  );
}
