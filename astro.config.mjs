// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Vue.js",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vuejs/",
        },

        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.com/invite/vue",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", link: "/getting-started/introduction" },
            { label: "Quick Start", link: "/getting-started/quick-start" },
          ],
        },

        {
          label: "Essentials",
          items: [
            { label: "Creating an Application", link: "/essentials/creating-an-application",},
            { label: "Reactivity Fundamental", link: "/essentials/reactivity-fundamental",},
            { label: "Template Syntax", link: "/essentials/template-syntax" },
          ],
        },

        {
          label: "Component In Depth",
          items: [
            { label: "Registration", link: "/component-in-depth/registration" },
            { label: "Props", link: "/component-in-depth/props" },
            { label: "Events", link: "/component-in-depth/events" },
          ],
        },

       {
          label: "Reusability",
          items: [
            { label: "Composables", link: "/reusability/composables" },
            { label: "Custom Directives", link: "/reusability/custom-directives"},
            { label: "Plugins", link: "/reusability/plugins" },
          ],
        },

        {
          label: "Built-in Component",
          items: [
            { label: "Transition", link: "/built-in-component/transition" },
            { label: "Transition Group", link: "/built-in-component/transition-group"},
            { label: "Keep Alive", link: "/reusability/keep-alive" },
          ],
        },

        {
          label: "Scaling Up",
          items: [
            { label: "Single-File Components", link: "/scaling-up/single-file-component" },
            { label: "Routing", link: "/scaling-up/routing"},
            { label: "State Management", link: "/scaling-up/state-management" },
            { label: "Testing", link: "/scaling-up/testing" },
          ],
        },

        {
          label: "Best Practices",
          items: [
            { label: "Performance", link: "/best-practices/performance" },
            { label: "Production Deployment", link: "/best-practices/production-deployment"},
            { label: "Security", link: "/best-practices/security" },
            
          ],
        },
        
        {
          label: "TypeScript",
          items: [
            { label: "Overview", link: "/typescript/overview" },
            { label: "TS with Composition API", link: "/typescript/ts-with-composition-api"},
            { label: "TS with Option API", link: "/typescript/ts-with-option-api" },
            
          ],
        },

        {
          label: "Extra Topics",
          items: [
            { label: "Ways of Using Vue", link: "/extra-topics/ways-of-using-vue" },
            { label: "Rendering Mechanism", link: "/extra-topics/rendering-mechanism"},
            { label: "Vue and Web Components", link: "/extra-topics/vue-and-web-components" },
            
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
