"use client"
import React, { useState } from 'react';
import { Card, TextInput, rem } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import Link from 'next/link';

export default function MantineSearch({ patients }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [searchTerm, setSearchTerm] = useState('');
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const filteredPatients = patients.filter((patient) =>
    `${patient.name} ${patient.lastname}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <>
      <Drawer position="right" opened={opened} onClose={close} title="Authentication">
        <TextInput
          m="lg"
          style={{ width: 300 }}
          leftSectionPointerEvents="none"
          leftSection={icon}
          radius="xl"
          placeholder="Search patients"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Card>
        
      {filteredPatients.map((patient) => (
        <div key={patient.id}>
            <Link href={`/patients/${patient.id}`}>
          <Button m="3" w="100%">
          <p>{`${patient.name} ${patient.lastname}`}</p>
          </Button>
            </Link>
        </div>
      ))}
        </Card>

      </Drawer>
      <Button onClick={open} m="lg">Open Drawer</Button>
    </>
  );
}
