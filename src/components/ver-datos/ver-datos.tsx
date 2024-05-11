import { Box, Container, Text, position } from "@chakra-ui/react";
import { Pie } from "react-chartjs-2";
import Chart, { ChartData } from "chart.js/auto";
import React from "react";
import asistentes from "./datosFalsos";
import ageRange from "./ageRange";

Chart;

export default function VerDatos() {
  const data: any = {
    labels: ["18 - 25", "26 - 35", "36 - 45", "45 o más"],
    datasets: [
      {
        label: "asistentes",
        data: ageRange(asistentes),
        backgroundColor: ["#B37DE8", "#FF1086", "#F6E05E", "#FBB6CE"],
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    layout: {
      padding: 0,
    },
    plugins: {
      legend: {
        labels: {
          boxWidth: 25,
          boxHeight: 25,
        },
        position: "top",
      },
    },
  };

  const totalLikes = asistentes.filter(person => person.ticket).length;

  const totalVIP = asistentes.filter(person => person.ticket.toLowerCase() === "vip").length;

  const totalGeneral = asistentes.filter(person => person.ticket.toLowerCase() === "general").length;

  return (
    <Container
      padding={10}
      maxWidth={"450px"}
      w={"100%"}
      fontSize={"sm"}
      shadow={"lg"}
    >
      <Box>
        <Text as={"h6"} mb={5}>
          Edades de los asistentes
        </Text>
        <Pie data={data} options={options}></Pie>
        <Text as={"h6"} my={10}>
          Cantidad de entradas vendidas:
        </Text>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Text>VIP:</Text>
            <Text display={"flex"} justifyContent={"center"} padding={"5px"} border={"1px solid #E2E8F0"} borderRadius={"6px"} w={"80px"} maxW={"80px"}>{totalVIP}</Text>
          </Box>
          <Box>
            <Text>Sencillas:</Text>
            <Text display={"flex"} justifyContent={"center"} padding={"5px"} border={"1px solid #E2E8F0"} borderRadius={"6px"} w={"80px"} maxW={"80px"}>{totalGeneral}</Text>
          </Box>
          <Box>
            <Text>Likes:</Text>
            <Text display={"flex"} justifyContent={"center"} padding={"5px"} border={"1px solid #E2E8F0"} borderRadius={"6px"} w={"80px"} maxW={"80px"}>{totalLikes}</Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
