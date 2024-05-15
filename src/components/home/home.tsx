// Componente cliente
"use client";

// Importaciones de dependencias
import { Box, Flex, InputGroup, InputLeftElement, Icon, Input, theme } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Festivals from "../festivals/festivals";
import Accommodations from "../accommodation/accommodation";
import Journeys from "../journey/journey";

export default function Home() {
    // Este estado almacena que es lo que se debe renderizar según el usuario escoja
    const [type, setType] = useState("festivales");
    // Este estado almacena lo que tiene la barra de búsqueda
    const [search, setSearch] = useState("");

    // Constantes con los colores que utiliza el componente
    const purple400 = theme.colors.purple[400];
    const gray50 = theme.colors.gray[50];
    const gray400 = theme.colors.gray[400];

    // Setea el valor del estado search con el valor que recibe del evento
    const onSearch = (e: any) => {
        setSearch(e.target.value);
    };

    return (
        <Flex padding={{ base: 7, md: 50 }} flexDirection={"column"} alignItems={"center"} gap={5}>
            {/* Heading */}
            <Box fontWeight={600} fontSize={19}>
                Descubre
            </Box>

            {/* Searchbar */}
            <InputGroup maxWidth={800}>
                <InputLeftElement pointerEvents="none">
                    <Icon as={FaSearch} color={gray400} />
                </InputLeftElement>
                <Input type="text" placeholder={`Buscar ${type}...`} width={"100%"} fontSize={15} backgroundColor={gray50} borderRadius={"25px"} boxShadow={`0 0 10px rgba(0,0,0, 0.25)`} focusBorderColor={"purple.400"} onChange={(e) => onSearch(e)} />
            </InputGroup>

            {/* Navbar */}
            <Flex width={"100%"} maxWidth={800} justifyContent={"space-between"} borderBottom={`1px solid ${gray400}`}>
                <Box fontSize={14} borderBottom={type === "festivales" ? `3px solid ${purple400}` : "3px solid white"} cursor={"pointer"} onClick={() => setType("festivales")}>
                    Festivales
                </Box>
                <Box fontSize={14} borderBottom={type === "alojamiento" ? `3px solid ${purple400}` : "3px solid white"} cursor={"pointer"} onClick={() => setType("alojamiento")}>
                    Alojamiento
                </Box>
                <Box fontSize={14} borderBottom={type === "viajes" ? `3px solid ${purple400}` : "3px solid white"} cursor={"pointer"} onClick={() => setType("viajes")}>
                    Viajes
                </Box>
            </Flex>

            {/* Cards */}
            {type === "festivales" ? <Festivals search={search} /> : <></>}
            {type === "alojamiento" ? <Accommodations search={search} /> : <></>}
            {type === "viajes" ? <Journeys search={search} /> : <></>}
        </Flex>
    );
}
