"use client";
import axios from "axios";
import {
  Card,
  PasswordInput,
  Group,
  Button,
  Box,
  Grid,
  TextInput,
  Text,
} from "@mantine/core";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import "../../app.css";
import Link from "next/link";
export default function Demo() {
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
      surname: hasLength(
        { min: 2, max: 20 },
        "Lastname must be 2-20 characters long."
      ),
      email: isEmail("Invalid email."),
      password:hasLength({min:8, max:16 },"Password must be 8-16 characters long."),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
const getAllUsers= async()=>{
try {
  const response = await axios.post("http://localhost:3000/auth/labrotary-sign-up")
  console.log(response)
} catch (error) {
  console.log(error)}
}
  
<form key="signupForm" onSubmit={form.onSubmit(getAllUsers)}></form>


  return (
    <Grid
      justify="center"
      align="center"
      style={{
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <Grid.Col span={12} style={{ maxWidth: 500 }}>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <h2 className="info">Laboratory Registration Screen</h2>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{ padding: "30px" }}
            >
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
            <p className="info p">If You Already Have an Account <Link href={"/"} className="span"><span>Log In!</span></Link> </p>
          </form>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
