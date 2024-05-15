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
import axios from "axios";


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
      laborant: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 20 }, "Name must be 2-20 characters long."),
      lastname: hasLength({ min: 2, max: 20 }, "Lastname must be 2-20 characters long."),
      tc: hasLength({ min: 11, max: 11 }, "TC Number must be 11 digits long."),
      age: isInRange({ min: 0, max: 99 }, "Name must be 0-99 characters long."),
      birthday: {
        rule: (value) => value instanceof Date,
        error: "Please enter a valid date for Birthday Date.",
      },
      diagnosisTitle: hasLength({ min: 2, max: 20 }, "Diagnosis Title must be 2-20 characters long."),
      diagnosisDetails: hasLength({ min: 2, max: 200 }, "Diagnosis Details must be 2-200 characters long."),
      diagnosisDate: {
        rule: (value) => value instanceof Date,
        error: "Please enter a valid date for Diagnosis Date.",
      },
      laborant: hasLength({ min: 2, max: 20 }, "Name must be 2-20 characters long."),
    },
  });

  const handleBirthdayDateChange = (date) => {
    date.setHours(date.getHours() + 3);
    setSelectedBirthdayDate(date);
  };
  
  const handleDiagnosisDateChange = (date) => {
    date.setHours(date.getHours() + 3);
    setSelectedDiagnosisDate(date);
  };

  const handleSubmit = async (values) => {
  
      try {
        const formData = form.getValues();
        formData.birthday = selectedBirthdayDate?.toISOString() || "";
        formData.diagnosisDate = selectedDiagnosisDate?.toISOString() || "";
        const allFieldsFilled = Object.values(formData).every((value) => value !== "");
        if (allFieldsFilled) {
          const response = await axios.post("http://localhost:3000/patient-record", formData, values);
          console.log(response);
        } else {
          console.log("Please fill in all fields.");
        }
      } catch (error) {
        console.error(error);
      }
  };
  return (
    <>
      <Drawer opened={opened} onClose={close}>
        <h1 className="info">Patient Registration Screen</h1>
        <form onSubmit={form.onSubmit(handleSubmit)}>
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
          valueFormat="DD MMM YYYY"
          withAsterisk
          value={selectedBirthdayDate}
          onChange={handleBirthdayDateChange}
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
            valueFormat="DD MMM YYYY"
            value={selectedDiagnosisDate}
            onChange={handleDiagnosisDateChange}
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
