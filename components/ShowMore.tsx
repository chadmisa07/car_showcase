"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from "./";
import { updateSearchParam } from "@/utils";

const ShowMore = ({ pageNumber, isNext, doUpdateFilter }: ShowMoreProps) => {
  const { push } = useRouter();

  const handleNavigation = () => {
    doUpdateFilter("limit", (pageNumber + 1) * 10);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          text="Show More"
          buttonType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
