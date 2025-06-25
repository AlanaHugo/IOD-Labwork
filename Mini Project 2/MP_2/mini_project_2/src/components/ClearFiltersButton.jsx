import React from 'react';
import { Button } from '@mui/material';

export default function ClearFiltersButton({ onClick }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Button variant="outlined" color="secondary" onClick={onClick}>
        Clear Filters
      </Button>
    </div>
  );
}
