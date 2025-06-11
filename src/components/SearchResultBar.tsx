import { type Dispatch, type SetStateAction } from 'react';

import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { type SelectChangeEvent, Select } from '@mui/material';

import { type onFilterType, onFilters } from '../constants/onFilters';
import { type ProductType } from '../types/ProductType';

interface SearchResultBarType {
    products: ProductType[];
    currentPage: number;
    perPage: number;
    onFilter: onFilterType;
    setOnFilter: Dispatch<SetStateAction<onFilterType>>;
}

export default function SearchResultBar({ products, currentPage, perPage, onFilter, setOnFilter }: SearchResultBarType) {
    const { onFiltersId } = onFilter;
    const firstProductNum: number = (currentPage - 1) * perPage + 1;
    const lastProductNum: number = currentPage * perPage > products.length ? products.length : currentPage * perPage;


    const handleChangeFilter = (e: SelectChangeEvent) => {
        const selectedId = e.target.value;
        const selectedFilter = onFilters.find((c) => c.onFiltersId === selectedId);
        if (selectedFilter) {
            setOnFilter(selectedFilter);
        }
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

                    {/* (start)件数表示 */}
                    <Box
                        sx={{
                            margin: "0px 15px 0px 0px",
                            display: "flex",
                            alignItems: "baseline",
                        }}
                    >

                        <Typography
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
                            sx={{
                                fontSize: {
                                    xs: "16px",
                                    md: "20px"
                                },
                                fontWeight: "600",
                                margin: "0px 5px 0px 0px"
                            }}
                        >
                            {(products.length !== 0) ? products.length : 0}
                        </Typography>

                        <Typography
                            sx={{
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



                        <Typography
                            sx={{
                                fontSize: {
                                    xs: "16px",
                                    md: "18px"
                                },
                                fontWeight: "500",
                                margin: "0px 2px 0px 0px"
                            }}
                        >
                            {(products.length !== 0) ? firstProductNum : 0}
                        </Typography>

                        <Typography
                            sx={{
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
                    {/* (end)件数表示 */}




                    {/* (start)絞り込み条件 */}
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
                                onChange={handleChangeFilter}
                                displayEmpty
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
                        </FormControl>
                    </Box>
                    {/* (end)絞り込み条件 */}


                </Toolbar>
            </AppBar>
        </Box >
    );
}