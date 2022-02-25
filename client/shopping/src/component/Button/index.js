import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ButtonTxt = styled(Button)({
  boxShadow: 'none',
  fontFamily:'Dosis',
  textTransform: 'none',
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#c02a58',
  borderColor: '#c02a58',
  '&:hover': {
    backgroundColor: '#e32c64',
    borderColor: '#e32c64',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#e32c64',
    borderColor: '#e32c64',
  }
});

export default function CustomizedButtons({handleClickHandler, children, disabled}) {
  return (
      <ButtonTxt disabled={disabled || false} variant="contained" onClick={handleClickHandler}>
        {children}
      </ButtonTxt>
  );
}
