import { CollectionConfig } from "payload/types";
import slug from "../fields/slug";
import meta from "../fields/meta";

const Studies: CollectionConfig = {
  slug: "studies",
  fields: [
    {
      type: "text",
      name: "title",
      label: "Title",
      required: true,
    },

    {
      name: "client",
      type: "text",
      label: "Client",
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "upload",
      name: "image",
      label: "Featured Image",
      relationTo: "media",
      required: true,
    },
    {
      name: "location",
      type: "text",
      label: "Location",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "categories",
      type: "relationship",
      label: "Categoires",
      relationTo: "categories",
      hasMany:true
    },
    slug,
    meta,
  ],
};

export default Studies;
