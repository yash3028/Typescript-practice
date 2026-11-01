import { useState } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <Button label={`Count: ${count}`} onClick={() => setCount(count + 1)} />
  );
}
