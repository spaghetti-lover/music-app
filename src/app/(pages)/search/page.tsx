import Section1 from "@/app/(pages)/search/Section1";
import { Suspense } from "react";

export default function Search() {
  return (
    <>
      <Suspense>
        <Section1 />
      </Suspense>
    </>
  );
}
