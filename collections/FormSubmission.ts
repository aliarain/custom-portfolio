import { CollectionConfig } from "payload/types";

const FormSubmission: CollectionConfig = {
  slug: "form-submission",
  fields: [
    {
      type: "text",
      name: "from",
      label: "From Email",
      admin: {
        readOnly: true,
      },
    },
    {
      type: "textarea",
      name: "message",
      label: "Message",
      admin: {
        readOnly: true,
      },
    },
    {
      type: "text",
      name: "source",
      label: "Source",
      admin: {
        readOnly: true,
        position: "sidebar",
      },
    },
  ],
};
export default FormSubmission;
