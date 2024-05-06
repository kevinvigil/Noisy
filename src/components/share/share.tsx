import { theme, Flex, Box, Input, Icon, Grid, Radio, Checkbox, Textarea } from "@chakra-ui/react";
import { AiFillCar } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";
import { MdEuro } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { useState } from "react";

export default function Share() {
    // Estado que almacena el vehículo en el que se viajará
    const [vehicle, setVehicle] = useState("car");
    const [coin, setCoin] = useState("euro");
    const [pricePerson, setPricePerson] = useState("");
    const [priceJourney, setPriceJourney] = useState("");
    const [helmet, setHelmet] = useState("no_apply");

    // Constantes con los colores que utiliza el componente
    const purple600 = theme.colors.purple[600];
    const purple400 = theme.colors.purple[400];

    const handlePricePersonChange = (e: any) => {
        const value = e.target.value;
        setPricePerson(value);
        if (value) {
            setPriceJourney("");
        }
    };

    const handlePriceJourneyChange = (e: any) => {
        const value = e.target.value;
        setPriceJourney(value);
        if (value) {
            setPricePerson("");
        }
    };

    return (
        <Flex width={"100%"} maxWidth={800} flexDirection={"column"} gap={10}>
            <Flex flexDirection={"column"} gap={5}>
                <Flex flexDirection={"column"} gap={2}>
                    <Box fontSize={12}>Voy a</Box>
                    <Input placeholder="Festival" height={"32px"} fontSize={12} />
                </Flex>
                <Flex gap={5}>
                    <Flex flexDirection={"column"} gap={2}>
                        <Box fontSize={12}>Desde</Box>
                        <Input placeholder="Ciudad" height={"32px"} fontSize={12} />
                    </Flex>
                    <Flex flexDirection={"column"} gap={2}>
                        <Box fontSize={12}>El día</Box>
                        <Input placeholder="Fecha de viaje" height={"32px"} fontSize={12} />
                    </Flex>
                </Flex>
                <Flex flexDirection={"column"} gap={2}>
                    <Box fontSize={12}>En este vehículo</Box>
                    <Flex width={"100%"} gap={10}>
                        <Flex flexDirection={"column"} width={"100%"} height={"80px"} justifyContent={"center"} alignItems={"center"} boxShadow={vehicle === "car" ? "0 1px 3px rgba(0,0,0,0.4)" : ""} borderRadius={"8px"} cursor={"pointer"} onClick={() => setVehicle("car")}>
                            <Icon as={AiFillCar} height={"23px"} width={"29px"} color={purple600} />
                            <Box fontSize={12}>Coche</Box>
                        </Flex>
                        <Flex flexDirection={"column"} width={"100%"} height={"80px"} justifyContent={"center"} alignItems={"center"} boxShadow={vehicle === "moto" ? "0 1px 3px rgba(0,0,0,0.4)" : ""} borderRadius={"8px"} cursor={"pointer"} onClick={() => setVehicle("moto")}>
                            <Icon as={FaMotorcycle} height={"23px"} width={"29px"} color={purple600} />
                            <Box fontSize={12}>Coche</Box>
                        </Flex>
                        <Flex flexDirection={"column"} width={"100%"} height={"80px"} justifyContent={"center"} alignItems={"center"} boxShadow={vehicle === "bus" ? "0 1px 3px rgba(0,0,0,0.4)" : ""} borderRadius={"8px"} cursor={"pointer"} onClick={() => setVehicle("bus")}>
                            <Icon as={FaBusAlt} height={"23px"} width={"29px"} color={purple600} />
                            <Box fontSize={12}>Coche</Box>
                        </Flex>
                    </Flex>
                </Flex>
                <Grid gridTemplateColumns={"2fr 3fr"} gap={5}>
                    <Flex flexDirection={"column"} gap={2}>
                        <Box fontSize={12}>¿Cuántos lugares?</Box>
                        <Input type={"number"} min={1} max={50} step={1} value={1} fontSize={12} />
                    </Flex>
                    <Flex flexDirection={"column"} gap={2}>
                        <Box fontSize={12}>Si es en moto, ¿tienes casco extra?</Box>
                        <Flex justifyContent={"space-between"}>
                            <Flex alignItems={"center"} gap={2}>
                                <Radio size={"sm"} isChecked={helmet === "yes"} onClick={() => setHelmet("yes")} />
                                <Box fontSize={12}>Sí</Box>
                            </Flex>
                            <Flex alignItems={"center"} gap={2}>
                                <Radio size={"sm"} isChecked={helmet === "no"} onClick={() => setHelmet("no")} />
                                <Box fontSize={12}>No</Box>
                            </Flex>
                            <Flex alignItems={"center"} gap={2}>
                                <Radio size={"sm"} isChecked={helmet === "no_apply"} onClick={() => setHelmet("no_apply")} />
                                <Box fontSize={12}>No aplica</Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Grid>
                <Flex flexDirection={"column"} gap={2}>
                    <Box fontSize={12}>Como compañeros prefiero</Box>
                    <Flex justifyContent={"space-between"}>
                        <Flex alignItems={"center"} gap={2}>
                            <Checkbox size={"sm"}></Checkbox>
                            <Box fontSize={12}>Chicas</Box>
                        </Flex>
                        <Flex alignItems={"center"} gap={2}>
                            <Checkbox size={"sm"}></Checkbox>
                            <Box fontSize={12}>Chicos</Box>
                        </Flex>
                        <Flex alignItems={"center"} gap={2}>
                            <Checkbox size={"sm"}></Checkbox>
                            <Box fontSize={12}>LGTB Friendly</Box>
                        </Flex>
                        <Flex alignItems={"center"} gap={2}>
                            <Checkbox size={"sm"}></Checkbox>
                            <Box fontSize={12}>Todos</Box>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex flexDirection={"column"} gap={2}>
                    <Box fontSize={12}>Description</Box>
                    <Textarea placeholder="Cuenta brevemente algo sobre ti o por qué compartes viaje" fontSize={12} />
                </Flex>
                <Flex gap={15}>
                    <Flex flexDirection={"column"} gap={2}>
                        <Box fontSize={12}>Tarifa por persona</Box>
                        <Input placeholder="Precio" fontSize={12} onChange={handlePriceJourneyChange} disabled={Boolean(pricePerson)} />
                    </Flex>
                    <Flex flexDirection={"column"} gap={2}>
                        <Box fontSize={12}>Tarifa por viaje</Box>
                        <Input placeholder="Precio" fontSize={12} onChange={handlePricePersonChange} disabled={Boolean(priceJourney)} />
                    </Flex>
                    <Flex alignItems={"center"} gap={2}>
                        <Flex height={"70%"} marginTop={5} padding={"0 5px"} justifyContent={"center"} alignItems={"center"} boxShadow={coin === "euro" ? "0 1px 3px rgba(0,0,0,0.4)" : ""} borderRadius={10} onClick={() => setCoin("euro")}>
                            <Icon as={MdEuro} fontSize={30} color={purple600} />
                        </Flex>
                        <Flex height={"70%"} marginTop={5} padding={"0 5px"} justifyContent={"center"} alignItems={"center"} boxShadow={coin === "dollar" ? "0 1px 3px rgba(0,0,0,0.4)" : ""} borderRadius={10} onClick={() => setCoin("dollar")}>
                            <Icon as={BiDollar} fontSize={30} color={purple600} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Box alignSelf={"center"} width={221} padding={2} textAlign={"center"} fontSize={14} color={"white"} backgroundColor={purple400} borderRadius={6}>
                Publicar viaje
            </Box>
        </Flex>
    );
}
