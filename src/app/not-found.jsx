import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Head from "../components/head";

export default function NotFound() {
    return (
        <Box sx={{
            height: "75vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Head
                title="דף לא נמצא"
                description="מאגר שירים ומנגינות לקטעי תפילה, קבלת שבת מוזיקלית והלל מוזיקלי. המאגר כולל שירים ומנגינות מכל הזמנים, כמו: קרליבך, שירים חסידיים וארץ ישראליים"
                canonical={false}
            />
            <Typography component="h1" sx={{
                fontSize: { xs: "2rem", md: "3rem" }
            }}>
                404 - דף לא נמצא
            </Typography>
        </Box>
    );
}
