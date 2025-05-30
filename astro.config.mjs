// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "SAM Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
		{
			label: "example",
			items: [
			  // Each item here is one entry in the navigation menu.
			  { label: "example Guide", slug: "guides/example" },
			],
		  },
        {
          label: "getting-started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "getting-started guide", slug: "guides/getting-started" },
          ],
        },
		{
			label: "max",
			items: [
			  // Each item here is one entry in the navigation menu.
			  { label: "max Guide", slug: "guides/max" },
			],
		  },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
