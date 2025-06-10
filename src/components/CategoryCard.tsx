import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// import { FaBoxes, FaCouch } from "react-icons/fa";
// import { MdHotel, MdKingBed, MdLightbulbOutline, MdKitchen, MdDesk } from "react-icons/md";
// import { GiBasket, GiKnifeFork, GiShower, GiRolledCloth, GiTable, GiFlowerPot } from "react-icons/gi";
import { BiCategory } from "react-icons/bi";

import { categories } from '../constants/categories';


export default function CategoryCard() {

    return (
        <>

            {/* (start)全体パーツ */}
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    padding: "20px 20px",
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
                    カテゴリーから選ぶ
                </Typography>

                {/* カテゴリーリスト */}
                <Box
                    sx={{
                        margin: "10px 0px 10px 0px",
                        width: { xs: "100%", md: "95%" },
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
                            xs: "center",
                            md: "flex-start",
                            lg: "flex-start"
                        },
                    }}
                >

                    {/* (start)全ての商品 */}
                    <Box
                        component={Link}
                        to={"/products"}
                        sx={{
                            width: {
                                xs: "28%",
                                sm: "22%",
                                md: "100%",
                                lg: "100%"
                            },
                            height: {
                                xs: "16%",
                                sm: "20%",
                                md: "40%",
                                lg: "10%"
                            },
                            // maxWidth: "260px",
                            // minWidth: "140px",
                            // maxHeight: "200px",
                            // minHeight: "160px",
                            padding: {
                                xs: "12px 0px",
                                sm: "16px 0px",
                                md: "8px 0px",
                            },
                            margin: {
                                xs: "2px 3px",
                                sm: "5px 3px",
                                md: "5px",
                            },
                            backgroundColor: "rgba(251, 245, 230, 0.8)",
                            borderRadius: "10px",
                            border: "0.2px solid #eee9d3",
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                flexDirection: {
                                    xs: "column",
                                    md: "row",
                                },
                                alignItems: "center",
                                justifyContent: {
                                    xs: "center",
                                    md: "space-around",
                                },
                                padding: {
                                    xs: "12px 0px",
                                    sm: "16px 0px",
                                    md: "0px 0px 0px 20px",
                                },

                            }}
                        >

                            {/* アイコン、カテゴリ名 */}
                            <Box sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: {
                                    xs: "column",
                                    md: "row",
                                },
                                alignItems: "center",
                                justifyContent: "flex-start",
                            }}>
                                <BiCategory size={30} />

                                <Typography
                                    sx={{
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
                                    すべての商品
                                </Typography>
                            </Box>

                            <KeyboardArrowRightIcon />

                        </Box>
                    </Box>
                    {/* (end)全ての商品 */}


                    {/* (start)各カテゴリー */}
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <Box
                                component={Link}
                                to={`/products?category=${category.categoryId}`}
                                sx={{
                                    width: {
                                        xs: "28%",
                                        sm: "22%",
                                        md: "100%",
                                        lg: "100%"
                                    },
                                    height: {
                                        xs: "16%",
                                        sm: "20%",
                                        md: "40%",
                                        lg: "10%"
                                    },
                                    // height: "100%",
                                    // maxWidth: "260px",
                                    // minWidth: "140px",
                                    // maxHeight: "200px",
                                    // minHeight: "160px",
                                    // padding: "20px 0px",
                                    padding: {
                                        xs: "12px 0px",
                                        sm: "16px 0px",
                                        md: "8px 0px",
                                    },
                                    // margin: "20px",
                                    margin: {
                                        xs: "2px 3px" ,
                                        sm: "5px 3px",
                                        md: "5px",
                                    },
                                    backgroundColor: "rgba(251, 245, 230, 0.8)",
                                    borderRadius: "10px",
                                    border: "0.2px solid #eee9d3",
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        // flexDirection: "column",
                                        flexDirection: {
                                            xs: "column",
                                            md: "row",
                                        },
                                        alignItems: "center",
                                        justifyContent: {
                                            xs: "center",
                                            md: "space-around",
                                        },
                                        padding: {
                                            xs: "12px 0px",
                                            sm: "16px 0px",
                                            md: "0px 0px 0px 20px",
                                        },
                                    }}
                                >

                                    {/* アイコン, カテゴリ名 */}
                                    <Box sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: {
                                            xs: "column",
                                            md: "row",
                                        },
                                        alignItems: "center",
                                        justifyContent: "flex-start",
                                    }}>
                                        <IconComponent
                                            size={30}
                                        />


                                        <Typography
                                            sx={{
                                                padding: "0px 0px 0px 10px",
                                                fontSize: "18px",
                                                fontSize: {
                                                    xs: "12px",
                                                    sm: "14px",
                                                    md: "14px",
                                                    lg: "16px",
                                                },
                                                fontWeight: "500",

                                            }}
                                        >
                                            {category.categoryLabel}
                                        </Typography>
                                    </Box>

                                    <KeyboardArrowRightIcon />

                                </Box>
                            </Box>
                        )
                    })}
                    {/* (end)各カテゴリー */}


                </Box>
                {/* (end)メニュー一覧 */}

                {/* </Box> */}
                {/* カテゴリーリスト */}

            </Box>
            {/* (end)全体パーツ */}
        </>
    )
}