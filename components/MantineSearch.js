import { TextInput, rem } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

export default function MantineSearch() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <TextInput
      style={{ width: 300 }}
      leftSectionPointerEvents="none"
      leftSection={icon}
      radius="xl"
      placeholder="Input placeholder"
      
    />
  );
}
