// import { useAtomValue } from "jotai";
import { useTheme } from "next-themes";

import { useEffect, useRef, useState } from "react";
// import { atomWithReset, useResetAtom } from "jotai/utils";
import { Input, InputProps, Loader as Spinner } from "rizzui";
import cn from "@/utils/class-names";

interface OrganizationSearchProps {
  className?: string;
  inputProps?: InputProps;
}

export default function Autocomplete({
  className,
  inputProps,
}: OrganizationSearchProps) {
  // check for dark mode
  const { theme } = useTheme();
  // global location state

  // to handle / clear input state
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div className={cn(className)}>
      {
        <Input
          ref={inputRef}
          value={inputValue}
          clearable={inputValue ? true : false}
          {...inputProps}
          onChange={(e) => setInputValue(e.target.value)}
          onClear={() => setInputValue("")}
        />
      }
    </div>
  );
}
