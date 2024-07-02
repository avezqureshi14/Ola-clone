import { useState } from "react";

export default function useModel() {
  const [open, setOpen] = useState<boolean>(false);
  function onClose() {
    setOpen(false);
  }

  function onOpen() {
    setOpen(true);
  }
  return { open, onClose, onOpen };
}
