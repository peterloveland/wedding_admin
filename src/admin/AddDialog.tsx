import { gql, useMutation } from "@apollo/client";
import {
  Button,
  Flex,
  TextField,
  Select,
  Dialog,
  Text,
} from "@radix-ui/themes";
import React from "react";

type AddDialogProps = {
  password: string;
};

const GRAPH_CREATEWEDDINGINVITE = gql`
  mutation createWeddingRsvp($input: CreateWeddingRsvpInput!) {
    createWeddingRsvp(input: $input) {
      password
      name
      fullName
      human_type
    }
  }
`;

const AddDialog = ({ password }: AddDialogProps) => {
  const [createWeddingRsvp, { data: createData, loading: createLoading }] =
    useMutation(GRAPH_CREATEWEDDINGINVITE);

  const [name, setName] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [humanType, setHumanType] = React.useState("ADULT");

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="soft" color="gray">
          Add guest
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add guest for {password}</Dialog.Title>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              onChange={(e) => setName(e.target.value)}
              defaultValue="Freja Johnsen"
              placeholder="Enter your full name"
            />
          </label>
          This is how the guest will be displayed on the website. Make it
          unique!
        </Flex>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Full Name
            </Text>
            <TextField.Root
              onChange={(e) => setFullName(e.target.value)}
              defaultValue="Freja"
              placeholder="Enter your full name"
            />
          </label>
          This is the full name just because it's good to have it.
        </Flex>

        {/* // dropdown to select human type */}
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Human Type
            </Text>
            <Select.Root
              defaultValue="ADULT"
              onValueChange={(value) => setHumanType(value)}
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="ADULT">Adult</Select.Item>
                <Select.Item value="CHILD">Child</Select.Item>
                <Select.Item value="BABY">Baby</Select.Item>
              </Select.Content>
            </Select.Root>
          </label>
          This is the type of human attending the wedding.
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              onClick={() => {
                createWeddingRsvp({
                  variables: {
                    input: {
                      password: password,
                      name: name,
                      fullName: fullName,
                      human_type: humanType,
                    },
                  },
                });
              }}
            >
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
export default AddDialog;
