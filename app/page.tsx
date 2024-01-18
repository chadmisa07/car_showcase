"use client";
import { Hero } from "@/components";
import Image from "next/image";
import { CustomFilter, SearchBar, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { useEffect, useState } from "react";

export default function Home({ searchParams }: { searchParams: any }) {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    manufacturer: "",
    model: "",
    fuel: "",
    year: "2022",
    limit: 10,
  });

  const doUpdateFilter = (key: string, value: string | number) => {
    setFilters((oldValue) => {
      const newState = { [key]: value };
      if (key !== "limit") newState.limit = 10;
      return { ...oldValue, ...newState };
    });
  };

  const { limit } = filters;

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars(filters);
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [filters]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden pb-36">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar doUpdateFilter={doUpdateFilter} />

          <div className="home__filter-container">
            <CustomFilter
              title="fuel"
              options={fuels}
              doUpdateFilter={doUpdateFilter}
            />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              doUpdateFilter={doUpdateFilter}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-container"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              doUpdateFilter={doUpdateFilter}
            />
          </section>
        ) : (
          <div>
            <h2 className="text-black text-2xl font-bold mt-6">
              Oops, no car found!
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
