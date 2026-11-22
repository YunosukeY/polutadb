import FormControlLabel from '@mui/material/FormControlLabel';
import Grid, { type GridSize } from '@mui/material/Grid';
import Radio from '@mui/material/Radio';

export default function MyRadio(props: { value: number; label: string; xs: GridSize; sm: GridSize }) {
  return (
    <Grid size={{ xs: props.xs, sm: props.sm }}>
      <FormControlLabel value={props.value} control={<Radio color='primary' />} label={props.label} />
    </Grid>
  );
}
