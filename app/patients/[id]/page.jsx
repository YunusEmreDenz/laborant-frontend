"use client";
import React from "react";
import db from "../../db.json";
import "./../../app.css";
import {
  Badge,
  Button,
  Card,
  Grid,
  GridCol,
  Group,
  Image,
  Text,
} from "@mantine/core";

const PatientPage = ({ params }) => {
  const { id } = params;
  const patient = db.patients.find((patient) => patient.id === id);

  if (!patient) {
    return <p>Hasta Bulunamadı</p>;
  }

  return (
    <Grid
      justify="center"
      align="center"
      style={{ minHeight: "100vh", display: "flex" }}
    >
      <Grid.Col span={12} style={{ maxWidth: 500 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <div>
            <div className="patient-name-id">
            <p>Name : <span>{patient.name}</span></p>
            <p>Folder Number : <span>{patient.id}</span></p>
            </div>
            <p>Lastname : <span>{patient.lastname}</span></p>
            <p>TC Number : <span>{patient.tc}</span></p>
            <p>Age : <span>{patient.age}</span></p>
            <p>Birthday : <span>{patient.birthday}</span></p>
            <p>Diagnosis Title : <span>{patient.diagnosisTitle}</span></p>
            <p>Diagnosis Details : <span>{patient.diagnosisDetails}</span></p>
            <p>Diagnosis Date : <span>{patient.diagnosisDate}</span></p>
            <p>Laborant : <span>{patient.laborant}</span></p>
          </div>
        </Card>
      </Grid.Col>
    </Grid>
  );
};

export default PatientPage;
