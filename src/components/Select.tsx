import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

interface SelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function CustomSelect({ label, options, value, onChange }: SelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  const handleReset = () => {
    onChange('');
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{ color: 'white' }}>{label}</InputLabel>
        <Select sx={{ color: 'white' }} value={value} onChange={handleChange}>
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button sx={{color:'white'}} onClick={handleReset}>Reset</Button>
    </>
  );
}