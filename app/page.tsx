import { getClient } from "./lib/client";

import { gql, useMutation } from "@apollo/client";

import React from "react";
import RenderTable from "@/src/admin/RenderEditableForm";
import { Box, Heading } from "@radix-ui/themes";
import AddDialog from "@/src/admin/AddDialog";

export const revalidate = 0;

const query = gql`
  query listWeddingRsvps {
    listWeddingRsvps {
      items {
        password
        name
        fullName
        starter
        main
        dessert
        dietary_requirements
        planning_to_attend
        reason
        human_type
        anything_else
        guestName
        isPlusOne
        planning_to_object
        feature_flag
      }
    }
  }
`;

export default async function Page({ params }: { params: { id: string } }) {
  const client = getClient();
  const { data } = await client.query({
    query,
    variables: { thePassword: params.id },
  });

  // first group listWeddingRsvps.items by password
  // then for each group render a div with the password as a heading
  // then JSON.stringify the rest of the object

  const grouped = data.listWeddingRsvps.items.reduce((acc, item) => {
    if (!acc[item.password]) {
      acc[item.password] = [];
    }
    acc[item.password].push(item);
    return acc;
  }, {});
  console.log(grouped);

  // for each group render a REnderTable
  return (
    <div style={{}}>
      {Object.keys(grouped).map((key) => (
        <div key={key} style={{ marginBottom: "2rem" }}>
          <RenderTable password={key} initialData={grouped[key]} />
        </div>
      ))}
    </div>
  );
}
