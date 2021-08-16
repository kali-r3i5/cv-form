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

export default function SimpleSelectS() {
  const classes = useStyles();
  const [status, setStatus] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };

  return (
    <div>
      <FormControl id="form" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Estado Civil</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={handleChange}
        >
          <MenuItem value={"Casado(a)"}>Casado(a)</MenuItem>
          <MenuItem value={"Soltero(a)"}>Soltero(a)</MenuItem>
          <MenuItem value={"Enrolado(a)"}>Enrolado(a)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
