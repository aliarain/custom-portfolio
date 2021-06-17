import { CollectionConfig } from "payload/types";
import slug from "../fields/slug";

const Categories: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      type: "text",
      name: "title",
      label: "Title",
      required: true,
    },
    slug,
  ],
};

export default Categories;
