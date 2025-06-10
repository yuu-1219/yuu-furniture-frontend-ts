import { useState } from "react";

import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import ColorCard from "./ColorCard";
import PriceCard from "../components/PriceCard";

import { colors } from '../constants/colors';
import { priceRanges } from "../constants/priceRanges";


export default function ConditionCard({ onColors, setOnColors, onPriceRanges, setOnPriceRanges }) {
    // const [onColors, setOnColors] = useState([]);
    // const [onPriceRanges, setOnPriceRanges] = useState(priceRanges);

    return (
        <>

            {/* (start)全体パーツ */}
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    padding: "15px 10px 10px 0px",
                    margin: "0px 0px",
                    // maxWidth: "800px",
                    backgroundColor: "rgba(251, 245, 230, 0.8)",
                    borderRadius: "10px",
                    border: "0.2px solid #eee9d3",
                    display: "flex",
                    // flexDirection: "column",
                    flexDirection: {
                        xs: "column",
                        md: "column",
                    },
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                }}
            >

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "14px",
                            lg: "20px"
                        },
                        fontWeight: "600",
                        margin: "0px 20px 0px 20px",
                        padding: "0px 0px",
                        textAlign: "center"
                    }}
                >
                    条件で絞り込む
                </Typography>

                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: {
                        xs: "row",
                        md: "column",
                    },
                    justifyContent: "center",
                    alignItems: {
                        xs: "center",
                        md: "center",
                    },
                }}>

                    {/* (start)カラーカード */}
                    <Box
                        sx={{
                            margin: "20px 0px 0px 10px",
                            padding: "0px 0px 0px 0px",
                            width: { xs: "50%", md: "95%" },
                            // width: "100%",
                            height: "100%",
                            // minWidth: "300px",
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: {
                                xs: "row",
                                md: "column",
                            },
                            alignItems: "flex-start",
                            justifyContent: {
                                xs: "flex-start",
                                sm: "flex-start",
                                md: "flex-start",
                                lg: "flex-start"
                            },
                        }}
                    >
                        <Accordion
                            // defaultExpanded
                            sx={{
                                width: "100%",
                                backgroundColor: "#fbf5e6",
                                borderRadius: "6px",
                                // maxWidth: "240px"

                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {/* <div class="condition-name">
                                    カラー
                                </div> */}
                                <Typography
                                    className="condition-name"
                                    sx={{
                                        width: {
                                            xs: "90%",
                                            sm: "65%",
                                            md: "90%",
                                            lg: "80%"
                                        },
                                        backgroundColor: (onColors.length === 0) ? "#faf6ec": "#f1e8ab",
                                        padding: "0px 0px 0px 10px",
                                        // fontSize: "18px",
                                        fontSize: {
                                            xs: "12px",
                                            sm: "14px",
                                            md: "14px",
                                            lg: "16px",
                                        },
                                        fontWeight: "500",


                                    }}
                                >
                                    カラー
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    className="condition-item"
                                    sx={{
                                        width: "100%",
                                        flexWrap: "wrap",
                                        alignItems: "flex-start",
                                        justifyContent: {
                                            xs: "flex-start",
                                            sm: "flex-start",
                                            md: "flex-start",
                                            lg: "flex-start"
                                        },
                                        // gap: "2px", 
                                    }}

                                >
                                    {colors.map((color) => (
                                        <ColorCard color={color} onColors={onColors} setOnColors={setOnColors} />
                                    ))}


                                </Box>
                            </AccordionDetails>
                        </Accordion>

                    </Box>
                    {/* (end)カラーカード */}


                    {/* (start)価格 */}
                    <Box
                        sx={{
                            margin: "20px 0px 0px 10px",
                            padding: "0px 0px 0px 0px",
                            width: { xs: "50%", md: "95%" },
                            // width: "100%",
                            height: "100%",
                            // minWidth: "300px",
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: {
                                xs: "row",
                                md: "column",
                            },
                            alignItems: "flex-start",
                            justifyContent: {
                                xs: "flex-start",
                                sm: "flex-start",
                                md: "flex-start",
                                lg: "flex-start"
                            },
                        }}
                    >
                        <Accordion
                            // defaultExpanded
                            sx={{
                                width: "100%",
                                backgroundColor: "#fbf5e6",
                                borderRadius: "6px",
                                // maxWidth: "240px"
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {/* <div class="condition-name">
                                    価格
                                </div> */}

                                <Typography
                                    className="condition-name"
                                    sx={{
                                        width: {
                                            xs: "90%",
                                            sm: "65%",
                                            md: "90%",
                                            lg: "80%"
                                        },
                                        backgroundColor: (onPriceRanges.length === 0) ? "#faf6ec": "#f1e8ab",
                                        padding: "0px 0px 0px 0px",
                                        fontSize: {
                                            xs: "12px",
                                            sm: "14px",
                                            md: "14px",
                                            lg: "16px",
                                        },
                                        fontWeight: "500",


                                    }}
                                >
                                    価格
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Box
                                    className="condition-item"
                                    sx={{
                                        width: "100%",
                                        flexWrap: "wrap",
                                        alignItems: "flex-start",
                                        justifyContent: {
                                            xs: "flex-start",
                                            sm: "flex-start",
                                            md: "flex-start",
                                            lg: "flex-start"
                                        },
                                        // gap: "2px", 
                                    }}
                                >
                                    {
                                        priceRanges.map((priceRange) => (
                                            <PriceCard priceRange={priceRange} onPriceRanges={onPriceRanges} setOnPriceRanges={setOnPriceRanges} />
                                        ))
                                    }
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                    </Box>
                    {/* (end)価格 */}

                </Box>


            </Box >
            {/* (end)全体パーツ */}
        </>
    )
}


{/* <nav class="nav-ver side-ver col-3 px-2 py-3 my-4">
              <ul class="nav side-ver-items">
                <li class="nav-item condition-title">
                  <p class="condition-title">条件で絞り込む</p>
                </li>
                <li class="nav-item condition">
                  <Accordion
                    defaultExpanded
                    sx={{
                      backgroundColor: "#fbf5e6",
                      borderRadius: "6px",
                      maxWidth: "240px"
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <div class="condition-name">
                        カラー
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box className="condition-item">
                        {
                          colors.map((color) => (
                            <ColorCard color={color} onColors={onColors} setOnColors={setOnColors} />
                          ))
                        }
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </li>
                <li class="nav-item condition">
                  <Accordion
                    defaultExpanded
                    sx={{
                      backgroundColor: "#fbf5e6",
                      borderRadius: "6px",
                      maxWidth: "240px"
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <div class="condition-name">
                        価格
                      </div>
                    </AccordionSummary>
                    <AccordionDetails >
                      <Box className="condition-item">
                        {
                          priceRanges.map((priceRange) => (
                            <PriceCard priceRange={priceRange} onPriceRanges={onPriceRanges} setOnPriceRanges={setOnPriceRanges} />
                          ))
                        }
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </li>

              </ul>
            </nav> */}
