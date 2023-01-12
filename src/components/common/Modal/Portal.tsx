import { createPortal } from "react-dom";

import { ChildrenInterface } from "../../../config/type";

const modalRoot = document.getElementById("modal-root") as HTMLElement;

export default function Portal({ children }: ChildrenInterface): React.ReactPortal {
  return createPortal(children, modalRoot);
}
