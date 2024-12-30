import { cn } from "../lib/utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Utilities/cn", // Group the story under 'Utilities'
  component: cn, // The utility function we are showcasing
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes to control inputs in the Storybook UI
  argTypes: {
    inputs: {
      control: "array",
      description: "List of class values to merge",
    },
    conditionalInput: {
      control: "object",
      description: "Object of class names with conditional truthy values",
    },
    conflictingInputs: {
      control: "array",
      description:
        "Array of conflicting Tailwind classes to show how twMerge handles them",
    },
  },
  // Provide default values for args
  args: {
    inputs: ["text-red-500", "bg-blue-200"],
    conditionalInput: { "text-green-500": true, hidden: false },
    conflictingInputs: [
      "text-red-500",
      "text-blue-500",
      "bg-green-200",
      "text-lg",
    ],
  },
};

export default meta;

// Story for showing how to use cn with a simple class
export const SimpleClasses = {
  args: {
    inputs: ["text-red-500", "bg-blue-200"], // Simple class values to merge
  },
};

// Story for merging conditional classes
export const ConditionalClasses = {
  args: {
    inputs: ["text-red-500", { "bg-blue-200": true }, { hidden: false }],
  },
};

// Story for handling conflicting classes with tailwind-merge
export const TailwindMergeTest = {
  args: {
    inputs: ["text-red-500", "text-blue-500", "bg-green-200", "text-lg"],
  },
};

// Story for using the conditional input argument
export const ConditionalInputTest = {
  args: {
    conditionalInput: { "text-green-500": true, hidden: false },
  },
};

// Story for demonstrating conflicting inputs (tailwind class conflicts)
export const ConflictingInputTest = {
  args: {
    conflictingInputs: [
      "text-red-500",
      "text-blue-500",
      "bg-green-200",
      "text-lg",
    ],
  },
};
