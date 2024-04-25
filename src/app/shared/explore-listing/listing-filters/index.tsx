"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { PiSliders } from "react-icons/pi";
import { Button, Title } from "rizzui";
import cn from "@/utils/class-names";
import { useDrawer } from "@/app/shared/drawer-views/use-drawer";
import { useFilterControls } from "@/hooks/use-filter-control";
import { useSearchParams } from "next/navigation";
import Autocomplete from "@/components/google-map/autocomplete";
import { initialState } from "@/app/shared/explore-listing/listing-filters/filter-utils";
import MagnifyingGlassIconColor from "@/components/icons/magnifying-glass-color";
// const FilterDrawerView = dynamic(
//   () => import("@/app/shared/explore-listing/listing-filters/drawer-view"),
//   { ssr: false }
// );

export default function ListingFilters({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const [hasQueryParams, setHasQueryParams] = useState(false);
  const { openDrawer, closeDrawer } = useDrawer();
  const { state, applyFilter, reset } = useFilterControls<
    typeof initialState,
    any
  >(initialState);

  useEffect(() => {
    const items = [];
    searchParams.forEach((item) => items.push(item));
    setHasQueryParams(Boolean(items.length));
  }, [searchParams]);

  return (
    <div className={cn("flex items-center justify-between gap-3 ", className)}>
      <div className="relative flex flex-grow items-center gap-3">
        <div className="relative w-full xs:max-w-[298px]">
          <Autocomplete
            inputProps={{
              prefix: <MagnifyingGlassIconColor className="h-5 w-5" />,
              placeholder: "Search Business Name",
              inputClassName:
                "dark:[&_input::placeholder]:!text-gray-600 [&_input]:pe-3 [&_input]:ps-10",
              prefixClassName: "absolute start-3",
              className: "[&_label>div]:p-0",
              clearable: true,
            }}
          />
        </div>
      </div>
      {/* <Button
        type="button"
        className="flex-shrink-0"
        onClick={() =>
          openDrawer({
            view: <FilterDrawerView />,
            placement: "right",
          })
        }
      >
        <PiSliders className="me-2 h-4 w-4 rotate-90" />
        Filters
      </Button> */}
    </div>
  );
}

export function PopoverContent({
  title,
  children,
  className,
}: React.PropsWithChildren<{
  title: string;
  className?: string;
  setOpen: (value: boolean) => void;
}>) {
  return (
    <div className={cn("w-44", className)}>
      <div className="p-4 pt-3.5">
        <Title
          as="h4"
          className="mb-5 text-start text-sm font-semibold capitalize text-gray-600"
        >
          {title}
        </Title>
        {children}
      </div>
    </div>
  );
}
