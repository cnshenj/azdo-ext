import { Icon } from "azure-devops-ui/Icon";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss"

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(<App />);

function App(): JSX.Element {
  return (
    <Icon iconName="Folder" />
  );
}