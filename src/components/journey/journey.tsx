import { Flex, Grid, Image, Box, Icon, theme, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiCalendarEvent } from "react-icons/bi";
import { GiCarSeat } from "react-icons/gi";
import { Journey, JourneyFestival, JourneyPlace } from "@/types/journey";

interface Props {
    search: string;
}

export default function Journeys({ search }: Props) {
    // Estados para almacenar la información
    const [journeys, setJourneys] = useState<Journey[]>([]);
    const [journeysFestivals, setJourneysFestivals] = useState<JourneyFestival[]>([]);
    const [journeysPlaces, setJourneysPlaces] = useState<JourneyPlace[]>([]);

    // Constantes con los colores que utiliza el componente
    const gray50 = theme.colors.gray[50];
    const gray500 = theme.colors.gray[500];
    const purple200 = theme.colors.purple[200];
    const purple400 = theme.colors.purple[400];

    // Filtra viajes cuyo nombre contiene la cadena de búsqueda, ignorando mayúsculas/minúsculas
    const filteredJourneys = journeys.filter((journey) => journey.name.toLowerCase().includes(search.toLowerCase()));

    // Función que obtiene la información de viajes
    const getData = () => {
        // Aquí se harían los fetch y se setean los estados con la respuesta del servidor, en este caso se rellena manualmente para probar el diseño
        setJourneys([
            {
                id: 1,
                name: "Viaje 1",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.",
                date: "12/12/2024",
                price: 20,
                persons: 2,
                image: "https://imagenes.elpais.com/resizer/v2/CFYWKVZDMFAZNIRMN5HWEY6MBE.jpg?auth=e1b10fa00d720a75d34a06876424542bc3ffb334b971c7cc93d6b0d89dc4b82a&width=1960&height=1470&focal=889%2C501",
                favorite: true,
            },
            {
                id: 2,
                name: "Viaje 2",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.",
                date: "04/08/2024",
                price: 45,
                persons: 3,
                image: "https://www.clubceaviajes.com/images/yootheme/img/ofertas/alquiler-coche.jpg",
                favorite: true,
            },
            {
                id: 3,
                name: "Viaje 3",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, esse.",
                date: "22/10/2024",
                price: 80,
                persons: 6,
                image: "https://www.usaatumedida.com/wp-content/uploads/Fly-and-Drive-nuestro-itinerario-para-viajar-en-coche-por-Estados-Unidos.jpg",
                favorite: false,
            },
        ]);

        setJourneysFestivals([
            {
                id: 1,
                name: "Tomorrowland",
            },
            {
                id: 2,
                name: "Lollapalooza",
            },
            {
                id: 3,
                name: "TrapFest",
            },
        ]);

        setJourneysPlaces([
            {
                id: 1,
                name: "Mendoza",
            },
            {
                id: 2,
                name: "Sanfa Fé",
            },
            {
                id: 3,
                name: "Córdoba",
            },
        ]);
    };

    // Cuando el componente se monta se ejecuta la fucnión getData()
    useEffect(() => {
        getData();
    }, []);

    return (
        <Flex flexDirection={"column"} alignItems={"center"} gap={10}>
            {/* Filters */}
            <Flex width={"100%"} maxWidth={800} gap={5}>
                <Select placeholder="Vamos al festival" focusBorderColor={purple400}>
                    {journeysFestivals.map((festival) => (
                        <option key={festival.id} style={{ backgroundColor: gray50 }}>
                            {festival.name}
                        </option>
                    ))}
                </Select>
                <Select placeholder="Desde" focusBorderColor={purple400}>
                    {journeysPlaces.map((place) => (
                        <option key={place.id} style={{ backgroundColor: gray50 }}>
                            {place.name}
                        </option>
                    ))}
                </Select>
            </Flex>

            {/* Cards */}
            <Flex width={"100%"} maxWidth={1240} gap={5} flexDirection={{ base: "column", md: "row" }} alignItems={"center"} flexWrap={"wrap"}>
                {filteredJourneys.map((journey) => (
                    <Grid
                        key={journey.id}
                        maxWidth={400}
                        gridTemplateColumns={"2fr 3fr"}
                        backgroundColor={gray50}
                        boxShadow={`0 0 12px 2px ${purple200}`}
                        borderRadius={4}
                    >
                        <Image src={journey.image} height={"100%"} objectFit={"cover"} borderRadius={"4px 0 0 4px"} />
                        <Flex padding={4} flexDirection={"column"} gap={2}>
                            <Flex justifyContent={"space-between"}>
                                <Box fontSize={14} fontWeight={600} color={"black"}>
                                    {journey.name}
                                </Box>
                                <Icon as={journey.favorite ? FaHeart : FaRegHeart} color={"#ff1086"} />
                            </Flex>
                            <Box fontSize={12} color={gray500}>
                                {journey.description}
                            </Box>
                            <Flex justify={"space-between"}>
                                <Flex flexDirection={"column"}>
                                    <Flex alignItems={"center"} gap={1}>
                                        <Icon as={GiCarSeat} fontSize={14} />
                                        <Box fontSize={12} color={gray500}>
                                            {journey.persons} Personas
                                        </Box>
                                    </Flex>
                                    <Flex alignItems={"center"} gap={1}>
                                        <Icon as={BiCalendarEvent} fontSize={14} />
                                        <Box fontSize={12} color={gray500}>
                                            {journey.date}
                                        </Box>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection={"column"} alignItems={"center"} gap={0}>
                                    <Box fontSize={6} fontWeight={600} color={gray500}>
                                        ENTRADA
                                    </Box>
                                    <Box fontSize={20} fontWeight={600} lineHeight={1}>
                                        {journey.price}€
                                    </Box>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Grid>
                ))}
            </Flex>
        </Flex>
    );
}
