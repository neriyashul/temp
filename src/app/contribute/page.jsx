import React from "react";
import { Box, Link as MuiLink, Typography } from "@mui/material";
import { styles } from "./style";
import Link from "next/link";
import Head from "next/head";

export default function Contribute() {
    return (
        <Box sx={styles.container}>
            <Head>
                <title>איך אפשר לעזור</title>
                <meta name="description" content="עזרו לנו ברעיונות ובפיתוח האתר - אתר מנגינות לתפילה מכיל אוסף שירים ומנגינות לקטעי תפילה, קבלות שבת והלל מוזיקליים" />
            </Head>
            <Typography variant="h4" component="h1" sx={styles.header}>
                איך אפשר לעזור?
            </Typography>
            <ul>
                <Box component="li" sx={styles.listItem}>
                    יש לך רעיון למנגינה שלא מופיעה באתר? ניתן להוסיף אותה&nbsp;
                    <MuiLink component={Link} href="/add-tune">
                        כאן
                    </MuiLink>
                </Box>
                <Box component="li" sx={styles.listItem}>
                    {
                        "יש לך שאלה, רעיון או בקשה? מוזמן/ת לפנות אלינו דרך המייל: "
                    }
                    <MuiLink href="mailto: support@tfilatunes.com">
                        support@tfilatunes.com
                    </MuiLink>
                </Box>
                <Box component="li" sx={styles.listItem}>
                    רוצה להשתתף בפיתוח האתר או בעיצוב שלו? האתר הוא עם קוד פתוח
                    ונמצא&nbsp; ב
                    <MuiLink href="https://github.com/neriyashul/tfilatunes">
                        גיטהאב
                    </MuiLink>
                </Box>
                <Box component="li" sx={styles.listItem}>
                    <Box sx={{ display: "flex" }}>
                        אהבת את האתר? פרגנ/י לנו בלחיצה על ה&nbsp;
                        <Box sx={{ justifyContent: "center" }}>
                            <MuiLink href="https://github.com/neriyashul/tfilatunes" target="_blank" rel="noopener noreferrer">
                                ⭐
                            </MuiLink>
                        </Box>
                        &nbsp;
                        <MuiLink href="https://github.com/neriyashul/tfilatunes">
                            בגיטהאב
                        </MuiLink>
                    </Box>
                </Box>
            </ul>
        </Box>
    );
}
