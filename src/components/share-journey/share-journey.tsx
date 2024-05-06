"use client";

import { theme, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import Share from "../share/share";

export default function ShareJourney() {
    // Este estado almacena que es lo que se debe renderizar según el usuario escoja
    const [type, setType] = useState("share");

    // Constantes con los colores que utiliza el componente
    const purple400 = theme.colors.purple[400];
    const gray400 = theme.colors.gray[400];

    return (
        <Flex padding={{ base: 7, md: 50 }} flexDirection={"column"} alignItems={"center"} gap={5}>
            {/* Heading */}
            <Box width={"100%"} maxWidth={800} fontWeight={600} fontSize={19}>
                Comparte un viaje
            </Box>

            {/* Navbar */}
            <Flex width={"100%"} maxWidth={800} justifyContent={"space-between"} borderBottom={`1px solid ${gray400}`}>
                <Box fontSize={14} borderBottom={type === "share" ? `3px solid ${purple400}` : "3px solid white"} cursor={"pointer"} onClick={() => setType("share")}>
                    Compartir
                </Box>
                <Box fontSize={14} borderBottom={type === "myJourneys" ? `3px solid ${purple400}` : "3px solid white"} cursor={"pointer"} onClick={() => setType("myJourneys")}>
                    Mis viajes
                </Box>
                <Box fontSize={14} borderBottom={type === "edit" ? `3px solid ${purple400}` : "3px solid white"} cursor={"pointer"} onClick={() => setType("edit")}>
                    Editar
                </Box>
            </Flex>

            {/* Form */}
            {type === "share" ? <Share /> : <></>}
            {type === "myJourneys" ? <div>Mis viajes</div> : <></>}
            {type === "edit" ? <div>Editar</div> : <></>}
        </Flex>
    );
}
