"use client";
import { Builder } from "@builder.io/react";
import CircularLoader from "./components/loader";
import Counter from "./components/Counter/Counter";

Builder.registerComponent(CircularLoader, {
  name: "CircularLoader",
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
