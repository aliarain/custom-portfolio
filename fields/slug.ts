import formatSlug from "../utilities/formatSlug";
import { Field } from "payload/types";

const slug: Field = {
  name: "slug",
  label: "Page Slug",
  type: "text",
  admin: {
    position: "sidebar",
  },
  hooks: {
    beforeValidate: [formatSlug("title")],
  },
};

export default slug;
