import { fn } from "@storybook/test";
import { Button } from "../components/ui/button"; // Importing the Button component

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button", // Group the story under 'Example'
  component: Button, // The component being showcased
  parameters: {
    layout: "centered", // Center the component in the canvas
  },
  tags: ["autodocs"], // Automatically generate documentation
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The variant style of the button",
    },
    size: {
      control: "radio",
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
    },
    asChild: {
      control: "boolean",
      description: "Render the button as a child of another component",
    },
    onClick: { action: "clicked" }, // Track the onClick action in Storybook's action panel
  },
  args: {
    variant: "default", // Default variant
    size: "default", // Default size
    asChild: false, // Render as a button element by default
    children: "Button", // Default button text
  },
};

export default meta;

// Example Stories for different button variants

// Default button variant
export const Default = {
  args: {
    variant: "default",
    size: "default",
    children: "Default Button",
  },
  render: (args) => <Button {...args} />, // Apply props to the Button component
};

// Destructive button variant
export const Destructive = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Destructive Button",
  },
  render: (args) => <Button {...args} />, // Apply props to the Button component
};

// Outline button variant
export const Outline = {
  args: {
    variant: "outline",
    size: "default",
    children: "Outline Button",
  },
  render: (args) => <Button {...args} />, // Apply props to the Button component
};

// Secondary button variant
export const Secondary = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Secondary Button",
  },
  render: (args) => <Button {...args} />, // Apply props to the Button component
};

// Ghost button variant
export const Ghost = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Ghost Button",
  },
  render: (args) => <Button {...args} />, // Apply props to the Button component
};

// Link button variant
export const Link = {
  args: {
    variant: "link",
    size: "default",
    children: "Link Button",
  },
  render: (args) => <Button {...args} />, // Apply props to the Button component
};

// Small size button variant
export const Small = {
  args: {
    variant: "default",
    size: "sm",
    children: "Small Button",
  },
  render: (args) => <Button {...args} />, // Apply props to the Button component
};

// Large size button variant
export const Large = {
  args: {
    variant: "default",
    size: "lg",
    children: "Large Button",
  },
  render: (args) => <Button {...args} />, // Apply props to the Button component
};

// Icon size button variant (icon-only button)
export const Icon = {
  args: {
    variant: "default",
    size: "icon",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h14M3 14h10"
        />
      </svg>
    ), // Example icon for icon-only button
  },
  render: (args) => <Button {...args} />, // Apply props to the Button component
};
