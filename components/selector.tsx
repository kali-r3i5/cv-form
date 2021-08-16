import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function SimpleSelect() {
  const classes = useStyles();
  const [sex, setSex] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSex(event.target.value as string);
  };

  return (
    <div>
      <FormControl id="form" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sex}
          onChange={handleChange}
        >
          <MenuItem value={"Masculino"}>Masculino</MenuItem>
          <MenuItem value={"Feminino"}>Feminino</MenuItem>
          <MenuItem value={"Não Binário"}>Não Binário</MenuItem>
          <MenuItem value={"Trans"}>Trans</MenuItem>
          <MenuItem value={"Outro"}>Outro</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
