import {
  createBox,
  createText,
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { ReactNode } from "react";
import { Theme } from "../theme";

export const Box = createBox<Theme>();
export const Text = createText<Theme>();

const cardVariant = createVariant<Theme, "cardVariants">({
  themeKey: "cardVariants",
});

const CardBox = createRestyleComponent<
  VariantProps<Theme, "cardVariants"> & React.ComponentProps<typeof Box>,
  Theme
>([cardVariant], Box);

type CardProps = React.ComponentProps<typeof CardBox> & {
  children?: ReactNode;
};

export const Card = ({ children, ...props }: CardProps) => {
  return <CardBox {...props}>{children}</CardBox>;
};
