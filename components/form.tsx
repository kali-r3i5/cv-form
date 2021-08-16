import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Form, Formik, Field } from "formik";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      color: theme.palette.text.secondary,
      marginTop: 60,
    },
    button: {
      position: "relative",
      right: -710,
      marginTop: 40,
    },
  })
);

interface IFormInput {
  name: string;
  job: string;
  status: { label: string; value: string };
}

export default function FormComponent() {
  const { register, handleSubmit, control } = useForm();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [cel, setCel] = useState("");
  const [cep, setCep] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");

  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <Container maxWidth="md">
        <Paper elevation={20} className={classes.paper}>
          <div className={classes.root}>
            <Grid
              spacing={4}
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-start"
            >
              <Grid item xs={6}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  {...register("test", { required: true })}
                >
                  <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, value, ref } }) => (
                      <TextField
                        style={{
                          marginLeft: 40,
                          marginRight: 20,
                          maxWidth: 350,
                          width: 350,
                        }}
                        onChange={onChange}
                        inputRef={register}
                        value={name}
                        required
                        id="standard-required"
                        label="Nome Completo"
                      />
                    )}
                  />
                </form>
              </Grid>
              <Grid item xs={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <SimpleSelect />
                </form>
              </Grid>
              <Grid item xs={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <SimpleSelectS />
                </form>
              </Grid>
              <Grid item xs={6}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{
                      marginLeft: 40,
                      marginRight: 20,
                      maxWidth: 350,
                      width: 350,
                    }}
                    id="standard-required"
                    label="Cargo Pretendido"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  />
                </form>
              </Grid>
              <Grid item xs={6}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <DatePickers />
                </form>
              </Grid>
              <Grid item xs={6}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{
                      marginLeft: 40,
                      marginRight: 20,
                      maxWidth: 350,
                      width: 350,
                    }}
                    required
                    id="standard-required"
                    label="Endereço"
                    defaultValue="Ex: Nome da Rua, 45, Bloco A"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={6}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{
                      marginRight: 20,
                      maxWidth: 350,
                      width: 350,
                    }}
                    required
                    id="standard-required"
                    label="Bairro"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={6}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{
                      marginLeft: 40,
                      marginRight: 20,
                      maxWidth: 350,
                      width: 350,
                    }}
                    required
                    id="standard-required"
                    label="Cidade"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={3}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{
                      marginRight: 20,
                      maxWidth: 150,
                      width: 150,
                    }}
                    required
                    id="standard-required"
                    label="Cep"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={3}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{ marginRight: 20, maxWidth: 150, width: 150 }}
                    required
                    id="standard-required"
                    label="Fixo 1"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={3}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{
                      marginLeft: 40,
                      marginRight: 20,
                      maxWidth: 150,
                      width: 150,
                    }}
                    required
                    id="standard-required"
                    label="Fixo 2"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={3}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{
                      marginRight: 20,
                      maxWidth: 150,
                      width: 150,
                    }}
                    required
                    id="standard-required"
                    label="Celular"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={3}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{ marginRight: 20, maxWidth: 150, width: 150 }}
                    required
                    id="standard-required"
                    label="Contato"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={3}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{ marginRight: 20, maxWidth: 150, width: 150 }}
                    required
                    id="standard-required"
                    label="Email"
                    value="myemail@email.com"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{
                    marginLeft: 40,
                    marginRight: 20,
                  }}
                >
                  Documentos
                </Typography>
                <Divider />
              </Grid>
              <Grid item xs={3}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{
                      marginLeft: 40,
                      marginRight: 20,
                    }}
                    required
                    id="standard-required"
                    label="Identidade"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={3}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    style={{ marginLeft: 20, marginRight: 20 }}
                    required
                    id="standard-required"
                    label="CPF"
                  />
                </form>{" "}
              </Grid>
              <Grid item xs={3}>
                <Typography style={{ margin: 4 }}>Veículo</Typography>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <Switches />
                </form>
              </Grid>
              <Grid item xs={3}>
                <Typography style={{ margin: 4 }}>Habilitação</Typography>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                >
                  <Switches />
                </form>
              </Grid>
            </Grid>
          </div>
          <Grid item xs={12} style={{ marginBottom: 20 }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <Button
                style={{ marginBottom: 20 }}
                color="secondary"
                variant="contained"
                className={classes.button}
                onSubmit={handleSubmit(onSubmit)}
                type="submit"
              >
                Submeter
              </Button>
            </form>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
