import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BulletinTitle } from "../bulletin/BulletinTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
