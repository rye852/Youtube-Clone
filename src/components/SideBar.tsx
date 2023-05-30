import React, { useEffect, useState } from 'react';
import { Stack, Button } from '@mui/material';
import { categories } from '../utils/constans';

type sidebarProps = {
  selectedCategorie: string;
  setSelectedCategorie: (value: string) => void;
};

const SideBar = ({ selectedCategorie, setSelectedCategorie }: sidebarProps) => {
  useEffect(() => {
    setSelectedCategorie(categories[0].name);
  }, []);
  return (
    <Stack
      direction={'row'}
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
        scrollbarColor: 'rgb(114, 113, 113) transparent',
        scrollbarWidth: { md: 'none', xs: 'thin' },
      }}>
      {categories.map((category) => (
        <button
          onClick={(): void => {
            setSelectedCategorie(category.name);
          }}
          className="category-btn"
          style={{
            backgroundColor:
              category.name === selectedCategorie ? '#FC1503' : 'inherit',
            color: 'white',
          }}
          key={category.name}>
          <span
            style={{
              color: category.name === selectedCategorie ? 'white' : 'red',
              marginRight: '15px',
            }}>
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategorie ? 1 : 0.8 }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
