"use client";
import "../app/app.css";
import { MdDeleteForever } from "react-icons/md";
import { Button, Card, GridCol, Text } from "@mantine/core";
import Link from "next/link";
import db from "../app/db.json";
import { Container } from "@mantine/core";
import { Grid } from "@mantine/core";
import axios from "axios";
export default function Demo() {
  const demoProps = {
    bg: "#95c8f5",
    mt: "xl",
    mb: "xl",
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/patients/${id}`
      );
      console.log("Başarılı:", response.data);
    } catch (error) {
      console.error("Hata:", error);
    }
  };
  return (
    <>
      <Container size="xl" pt="xl" pb="xl" {...demoProps}>
        <Grid align="center" justify="center">
          {db.patients.map((patient) => (
            <div key={patient.id}>
              <Card shadow="md" padding="xl" m="7">
                <Button
                  onClick={() => handleDelete(patient.id)}
                  color="red"
                  w="40%"
                >
                  <MdDeleteForever size="20px" />
                </Button>
                <Text fw={500} size="lg" mt="md">
                  {`${patient.name} ${patient.lastname}`}
                </Text>
                <Text mt="xs" size="sm">
                  Age: {patient.age}
                </Text>
                <Text mt="xs" size="sm">
                  Diagnosis Title: {patient.diagnosisTitle}
                </Text>
                <Text mt="xs" size="sm">
                  Laborant: {patient.laborant}
                </Text>
                <Link href={`/patients/${patient.id}`}>
                  <Button mt="7">
                    <Text>Patient Details</Text>
                  </Button>
                </Link>
              </Card>
            </div>
          ))}
        </Grid>
      </Container>
    </>
  );
}
