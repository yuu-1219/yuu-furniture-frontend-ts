import * as React from 'react';
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

import { onFilters } from '../constants/onFilters';

export default function SearchResultBar({ products, currentPage, perPage, onFilter, setOnFilter }) {
    const { onFiltersId, label } = onFilter;
    const firstProductNum = (currentPage - 1) * perPage + 1;
    const lastProductNum = currentPage * perPage > products.length ? products.length : currentPage * perPage;


    const handleChange = (event) => {
        const selectedId = event.target.value;
        const selectedFilter = onFilters.find((c) => c.onFiltersId === selectedId);
        setOnFilter(selectedFilter);
    };

    return (
        <Box>
            <AppBar
                position="static"
            >
                <Toolbar
                    sx={{
                        minHeight: "40px !important",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#f0e8cd",
                        color: "#5b5b5b"
                    }}
                >
                    <Box
                        sx={{
                            margin: "0px 15px 0px 0px",
                            display: "flex",
                            alignItems: "baseline",
                        }}
                    >

                        <Typography
                            // variant="span"
                            sx={{
                                fontSize: {
                                    xs: "12px",
                                    md: "14px"
                                },
                                border: "none",
                                margin: "0px 5px 0px 0px"
                            }}
                        >
                            全
                        </Typography>

                        <Typography
                            // variant="h6"
                            sx={{
                                // fontSize: "20px",
                                fontSize: {
                                    xs: "16px",
                                    md: "20px"
                                },
                                fontWeight: "600",
                                margin: "0px 5px 0px 0px"
                            }}
                        >
                            {(products.length !== 0) ? products.length : 0 }
                        </Typography>

                        <Typography
                            // variant="span"
                            sx={{
                                // fontSize: "14px",
                                fontSize: {
                                    xs: "12px",
                                    md: "14px"
                                },
                                border: "none",
                                margin: "0px 15px 0px 0px"
                            }}
                        >
                            件中
                        </Typography>

                    {/* </Box>

                    <Box
                        sx={{
                            margin: "0px 15px 0px 0px",
                            display: "flex",
                            alignItems: "baseline",
                        }}
                    > */}

                        <Typography
                            // variant="span"
                            sx={{
                                // fontSize: "18px",
                                fontSize: {
                                    xs: "16px",
                                    md: "18px"
                                },
                                fontWeight: "500",
                                margin: "0px 2px 0px 0px"
                            }}
                        >
                            {(products.length !== 0) ? firstProductNum : 0 }
                        </Typography>

                        <Typography
                            sx={{
                                // fontSize: "14px",
                                fontSize: {
                                    xs: "12px",
                                    md: "14px"
                                },
                                margin: "0px 2px 0px 0px"
                            }}
                        >
                            〜
                        </Typography>

                        <Typography
                            sx={{
                                // fontSize: "18px",
                                fontSize: {
                                    xs: "16px",
                                    md: "18px"
                                },
                                fontWeight: "500",
                                margin: "0px 5px 0px 0px"
                            }}
                        >
                            {lastProductNum}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "13px",
                                fontSize: {
                                    xs: "12px",
                                    md: "14px"
                                },
                                border: "none",
                                margin: "0px 2px 0px 0px"
                            }}
                        >
                            件
                        </Typography>
                    </Box>



                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            minWidth: 120,
                            minHeight: 20,
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >

                        <FormControl
                            size="small"
                            sx={{
                                m: 1,
                                minWidth: 110
                            }}
                        >
                            <Select
                                value={onFiltersId}
                                onChange={handleChange}
                                displayEmpty
                                // inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    backgroundColor: "#eae9e7",
                                    border: "none"
                                }}
                            >
                                {onFilters.map((onFilter) => (
                                    <MenuItem
                                        value={onFilter.onFiltersId}
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: "500"
                                        }}
                                    >
                                        {onFilter.label}
                                    </MenuItem>
                                ))}
                            </Select>
                            {/* <FormHelperText>Without label</FormHelperText> */}
                        </FormControl>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box >
    );
}