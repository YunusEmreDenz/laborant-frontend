"use client";
import axios from "axios";
import { useState } from "react";
import { Alert, Button, rem } from '@mantine/core';
import { IconInfoCircle, IconCheck } from '@tabler/icons-react';
import {
  Card,
  PasswordInput,
  Grid,
  TextInput,
} from "@mantine/core";
import {
  useForm,
  isEmail,
  hasLength,
} from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Demo() {
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      name: hasLength({ min: 2, max: 20 }, "Name must be 2-20 characters long."),
      surname: hasLength({ min: 2, max: 20 }, "Lastname must be 2-20 characters long."),
      email: isEmail("Invalid email."),
      password: hasLength({ min: 8, max: 16 }, "Password must be 8-16 characters long."),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  const getAllUsers = async (values: any) => {
    try {
      const response = await axios.post("http://localhost:3000", values);
      console.log(response);
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false);
        router.push("http://localhost:3000/patient-record");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Grid justify="center" align="center" style={{ minHeight: "100vh", display: "flex" }}>
      <Grid.Col span={12} style={{ maxWidth: 500 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder >
          <h2 className="info">Laboratory Registration Screen</h2>
          <form onSubmit={form.onSubmit(getAllUsers)}>
            <Card shadow="sm" padding="lg" radius="md" withBorder style={{ padding: "30px" }}>
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
                    label="Surname"
                    placeholder="Surname"
                    withAsterisk
                    {...form.getInputProps("surname")}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <TextInput
                    label="Email"
                    placeholder="Email"
                    withAsterisk
                    {...form.getInputProps("email")}
                  />
                  <PasswordInput
                    mt="sm"
                    label="Password"
                    placeholder="Password"
                    {...form.getInputProps("password")}
                  />
                  <PasswordInput
                    mt="sm"
                    label="Confirm password"
                    placeholder="Confirm password"
                    {...form.getInputProps("confirmPassword")}
                  />
                </Grid.Col>
              </Grid>
              <Button type="submit" mt="sm">
                Submit
              </Button>
            </Card>
            <p className="info p">
              If You Already Have an Account <Link href={"/"} className="span"><span>Log In!</span></Link>{" "}
            </p>
          </form>
        </Card>
      {showAlert && (
        <Alert
          mt={6}
          variant="light"
          color="blue"
          title="Registration successful!"
          icon={checkIcon}
          onClose={() => setShowAlert(false)}
        >
          You are being redirected to the login screen.
        </Alert>
      )}
      </Grid.Col>
    </Grid>
    </>
  );
}
