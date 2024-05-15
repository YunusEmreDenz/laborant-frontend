"use client"
import { Card, Text } from '@mantine/core';
import Link from 'next/link';
import db from "../app/db.json";

export default function Demo() {
  return (
    <div>
      {db.patients.map((patient) => (
        <div key={patient.id}>
          <Link href={`/patients/${patient.id}`}>
            <Card shadow="sm" padding="xl">
              <Text fw={500} size="lg" mt="md">
                {`${patient.name} ${patient.lastname}`}
              </Text>
              <Text mt="xs" c="dimmed" size="sm">
                Age: {patient.age}
              </Text>
              <Text mt="xs" c="dimmed" size="sm">
                Tanı Başlığı: {patient.diagnosisTitle}
              </Text>
              <Text mt="xs" c="dimmed" size="sm">
                Diagnosis Details: {patient.diagnosisDetails}
              </Text>
              <Text mt="xs" c="dimmed" size="sm">
                Laborant: {patient.laborant}
              </Text>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
}
