"use client";
import "../app/app.css";
import React, { useState, useRef } from "react";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useDisclosure } from "@mantine/hooks";
import {
  FileButton,
  Text,
  Group,
  TextInput,
  NumberInput,
  Grid,
  Drawer,
  Textarea,
  Button as MantineButton,
} from "@mantine/core";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedBirthdayDate, setSelectedBirthdayDate] = useState(null);
  const [selectedDiagnosisDate, setSelectedDiagnosisDate] = useState(null);
  const [file, setFile] = useState(null);
  const resetRef = useRef(null);

  const clearFile = () => {
    setFile(null);
  };
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      lastname: "",
      tc: "",
      age: "",
      birthday: "",
      diagnosisTitle: "",
      diagnosisDetails: "",
      diagnosisDate: "",
      laborantName: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Name must be 2-20 characters long"),
      lastname: hasLength(
        { min: 2, max: 20 },
        "Lastname must be 2-20 characters long."
      ),
      tc: hasLength(
        { min: 11, max: 11 },
        "Identity Number must be 11 characters long."
      ),
      age: isInRange(
        { min: 0, max: 99 },
        "You must be 0-99 years old to register."
      ),

      birthdayDate: hasLength(
        { min: 2, max: 20 },
        "Please enter your date of birth."
      ),
      diagnosisTitle: hasLength(
        { min: 2, max: 20 },
        "Name must be 2-20 characters long."
      ),
      diagnosisDetails: hasLength(
        { min: 2, max: 200 },
        "Name must be 2-200 characters long."
      ),
      diagnosisDate: hasLength(
        { min: 2, max: 20 },
        "Please enter your date of diagnosis."
      ),
      laborant: hasLength(
        { min: 2, max: 20 },
        "Laborant name must be 2-20 characters long"
      ),
    },
  });

  return (
    <>
      <Drawer opened={opened} onClose={close}>
        <h1 className="info">Patient Registration Screen</h1>
        <form onSubmit={form.onSubmit(() => {})}>
          <h3 className="info">
            &mdash;&mdash;&mdash;&mdash; Personal Information{" "}
            &mdash;&mdash;&mdash;&mdash;
          </h3>
          <Grid gutter="md">
            <Grid.Col span={6}>
              <TextInput
                label="Name"
                placeholder="Name"
                withAsterisk
                {...form.getInputProps("name")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                label="Lastname"
                placeholder="Lastname"
                withAsterisk
                {...form.getInputProps("lastname")}
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="TC Number"
                placeholder="TR Identity Number"
                withAsterisk
                mt="md"
                {...form.getInputProps("tc")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <NumberInput
                label="Your age"
                placeholder="Your age"
                withAsterisk
                mt="md"
                {...form.getInputProps("age")}
              />
            </Grid.Col>
          </Grid>

          <DatePickerInput
            label="Birthday Date"
            placeholder="Birthday Date"
            mt="md"
            withAsterisk
            value={selectedBirthdayDate}
            onChange={setSelectedBirthdayDate}
          />
          <h3 className="info">
            &mdash;&mdash;&mdash;&mdash; Diagnosis Information{" "}
            &mdash;&mdash;&mdash;&mdash;
          </h3>
          <TextInput
            label="Diagnosis Title"
            placeholder="Diagnosis Title"
            withAsterisk
            mt="md"
            {...form.getInputProps("diagnosisTitle")}
          />

          <Textarea
            label="Diagnosis Details"
            withAsterisk
            placeholder="Diagnosis Details"
            mt="md"
            {...form.getInputProps("diagnosisDetails")}
          />

          <DatePickerInput
            label="Diagnosis Date"
            placeholder="Diagnosis Date"
            mt="md"
            withAsterisk
            value={selectedDiagnosisDate}
            onChange={setSelectedDiagnosisDate}
          />
          <Group justify="center" mt="md">
            <FileButton
              resetRef={resetRef}
              onChange={setFile}
              accept="image/png,image/jpeg"
            >
              {(props) => (
                <MantineButton {...props}>Upload image</MantineButton>
              )}
            </FileButton>
            <MantineButton disabled={!file} color="red" onClick={clearFile}>
              Reset
            </MantineButton>
          </Group>

          {file && (
            <Text size="sm" ta="center" mt="sm">
              Picked file: {file.name}
            </Text>
          )}
          <h3 className="info">
            &mdash;&mdash;&mdash;&mdash; Laborant Information{" "}
            &mdash;&mdash;&mdash;&mdash;
          </h3>
          <TextInput
            label="Laborant Name"
            placeholder="Laborant Name"
            withAsterisk
            {...form.getInputProps("laborant")}
          />
          <Group justify="flex-end" mt="md">
            <MantineButton type="submit">Submit</MantineButton>
          </Group>
        </form>
      </Drawer>
      <MantineButton onClick={open}>Hasta Kayıt Ekranı</MantineButton>{" "}
    </>
  );
}
