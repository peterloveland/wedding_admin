import { gql, useMutation } from "@apollo/client";
import {
  Button,
  Flex,
  TextField,
  Select,
  Dialog,
  Text,
  Checkbox,
  AlertDialog,
} from "@radix-ui/themes";
import React from "react";

type AddDialogProps = {
  initialData: any;
  password: string;
};

const GRAPH_UPDATEWEDDINGINVITE = gql`
  mutation updateWeddingRsvp($input: UpdateWeddingRsvpInput!) {
    updateWeddingRsvp(input: $input) {
      name
      fullName
    }
  }
`;

const GRAPH_DELETEWEDDINGINVITE = gql`
  mutation deleteWeddingRsvp($input: DeleteWeddingRsvpInput!) {
    deleteWeddingRsvp(input: $input) {
      password
      name
    }
  }
`;

const EditDialog = ({ initialData, password }: AddDialogProps) => {
  const [updateWeddingRsvp, { data, loading, error }] = useMutation(
    GRAPH_UPDATEWEDDINGINVITE
  );

  const [deleteWeddingRsvp, { data: deleteData, loading: deleteLoading }] =
    useMutation(GRAPH_DELETEWEDDINGINVITE);

  // when deleteData is available, close the dialog
  React.useEffect(() => {
    if (deleteData || data) {
      setIsDeleteDialogOpen(false);
      setIsDeleteDialogOpen(false);
    }
  }, [deleteData, data]);

  // store the data in the state
  const [name, setName] = React.useState(initialData.name);
  const [fullName, setFullName] = React.useState(initialData.fullName);
  const [humanType, setHumanType] = React.useState(initialData.human_type);
  const [isPlusOne, setIsPlusOne] = React.useState(initialData.isPlusOne);
  const [featureFlags, setFeatureFlags] = React.useState(
    initialData.feature_flags
  );
  const [planningToAttend, setPlanningToAttend] = React.useState(
    initialData.planning_to_attend
  );
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);

  const updateFeatureFlag = (flag: string) => {
    console.log("flag", flag);

    const isSwitchedOn = featureFlags ? featureFlags?.includes(flag) : false;

    if (isSwitchedOn) {
      console.log("removing");
      setFeatureFlags(
        featureFlags.replace(flag, "").replace(",,", ",").replace(/,$/, "")
      );
    } else {
      console.log("adding");
      setFeatureFlags(`${featureFlags ? `${featureFlags},` : " "}${flag}`);
    }

    console.log("featureFlags:", featureFlags);
  };

  const checkFF = (flag: string) => {
    if (featureFlags === undefined) {
      return false;
    }
    return featureFlags?.includes(flag);
  };

  return (
    <Dialog.Root open={isDeleteDialogOpen}>
      <Dialog.Trigger>
        <Button
          style={{ width: "100%" }}
          variant="ghost"
          onClick={() => setIsDeleteDialogOpen(true)}
        >
          {name || "no name"}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit guest</Dialog.Title>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              readOnly
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your full name"
            />
          </label>
        </Flex>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Full Name
            </Text>
            <TextField.Root
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              placeholder="Enter your full name"
            />
          </label>

          <Flex>
            <Flex direction="column" gap="3">
              <label>
                <Text as="div" size="2" mb="1" weight="bold">
                  is a plus One
                </Text>
                <Checkbox
                  checked={isPlusOne}
                  onCheckedChange={(e) => {
                    setIsPlusOne(e);
                    if (e) {
                      setHumanType("ADULT");
                    } else {
                      setHumanType(humanType);
                    }
                  }}
                />
              </label>
            </Flex>
          </Flex>

          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Human Type
            </Text>
          </label>
          <Select.Root
            disabled={isPlusOne}
            defaultValue={humanType}
            value={isPlusOne ? "ADULT" : humanType}
            onValueChange={(value) => setHumanType(value)}
          >
            <Select.Trigger />

            <Select.Content>
              <Select.Item value="ADULT">Adult</Select.Item>
              <Select.Item value="CHILD">Child</Select.Item>
              <Select.Item value="BABY">Baby</Select.Item>
            </Select.Content>
          </Select.Root>
        </Flex>

        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Planning to attend
          </Text>
        </label>
        <Select.Root
          defaultValue={planningToAttend}
          value={planningToAttend}
          onValueChange={(value) => setPlanningToAttend(value)}
        >
          <Select.Trigger />

          <Select.Content>
            <Select.Item value="true_serious">Yes, I am serious</Select.Item>
            <Select.Item value="true_funny">Yes, I am funny</Select.Item>
            <Select.Item value="false">No</Select.Item>
          </Select.Content>
        </Select.Root>

        <Flex direction="column" gap="3">
          <Flex gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Has saucy plus one message
              </Text>
              <Checkbox
                checked={checkFF("saucy+1")}
                onClick={() => {
                  updateFeatureFlag("saucy+1");
                }}
              />
            </label>
          </Flex>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Does this person love hearing mayonnaise jokes?
              </Text>
              <Checkbox
                checked={checkFF("joke")}
                onClick={() => {
                  updateFeatureFlag("joke");
                }}
              />
            </label>
          </Flex>
        </Flex>

        <Text>{featureFlags}</Text>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button color="red">Remove</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Remove {name}</AlertDialog.Title>
                <AlertDialog.Description size="2">
                  Are you sure? This application will no longer be accessible
                  and any existing sessions will be expired.
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                  <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                    <Button
                      variant="solid"
                      color="red"
                      onClick={() => {
                        deleteWeddingRsvp({
                          variables: {
                            input: {
                              password: password,
                              name: name,
                            },
                          },
                        });
                      }}
                    >
                      Remove
                    </Button>
                  </AlertDialog.Action>
                </Flex>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              variant="soft"
              color="gray"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              onClick={() => {
                const [attendingStatus, reason] = planningToAttend.split("_");
                // const [attendingStatus, reason] = planning_to_attend.split("_");
                updateWeddingRsvp({
                  variables: {
                    input: {
                      password: password,
                      name: name,
                      // update full name with the new value
                      fullName: fullName,
                      planning_to_attend: attendingStatus,
                      reason: attendingStatus ? reason : "",
                      isPlusOne: isPlusOne,
                      feature_flag: featureFlags,
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
export default EditDialog;
