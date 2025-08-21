/// <reference path="../.astro/types.d.ts" />

declare module "virtual:icons/*" {
    import type { SVGProps } from "react";
    import type React from "react";
    const component: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
    export default component;
}