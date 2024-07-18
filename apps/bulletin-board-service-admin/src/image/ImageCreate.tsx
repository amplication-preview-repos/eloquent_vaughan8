import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BulletinTitle } from "../bulletin/BulletinTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
        <ReferenceInput
          source="bulletin.id"
          reference="Bulletin"
          label="bulletin"
        >
          <SelectInput optionText={BulletinTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
