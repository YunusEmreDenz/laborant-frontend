"use client";
import "./app.css"
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
import "./app.css";
import Link from "next/link";
export default function Demo() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: isEmail("Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const getAllUsers= async()=>{
    try {
      const response = await axios.post("http://localhost:3000")
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
          <h2 className="info">Laboratory Sign In Screen</h2>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              style={{ padding: "30px" }}
            >
              <Grid gutter="md">
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


                </Grid.Col>
              </Grid>
              <Button type="submit" mt="sm">
                Submit
              </Button>
            </Card>
            <p className="info p">Are you not a member? Quickly  <Link href={"/sign-up"} className="span"><span>Sign Up!</span></Link> </p>
          </form>
        </Card>
      </Grid.Col>
    </Grid>
  );
}
