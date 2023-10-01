"use client";

import "./ProductsPage.scss";
import SortSelect from "@/components/Products/SortSelect/SortSelect";
import { FunnelIcon } from "@heroicons/react/24/solid";
import Products from "@/components/Products/Products";
import React, { useCallback, useEffect, useState } from "react";
import { Category, Product } from "@/types";
import { useAppDispatch } from "@/utils/store/hooks";
import { filterProducts, setProducts } from "@/utils/store/productSlice";
import { setCategories } from "@/utils/store/categoriesSlice";
import CategoriesFilter from "@/components/Products/CategoriesFilter/CategoriesFilter";
import { SingleValue } from "react-select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import categoriesFilter from "@/components/Products/CategoriesFilter/CategoriesFilter";
import Skeleton from "react-loading-skeleton";

const getCategories = async () => {};
const Page = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const getQueryValue = (key: string) => {
    const params = new URLSearchParams(searchParams);
    return params.get(key);
  };

  const dispatch = useAppDispatch();
  const [filterIsVisible, setFilterVisible] = useState(false);
  const [categoriesFilter, setCategoriesFilter] = useState<string[]>(
    getQueryValue("category")?.split(",") || [],
  );
  const [sortFilter, setSortFilter] = useState(getQueryValue("sort") || "1");
  const [priceFilter, setPriceFilter] = useState<string[] | [number, number]>(
    getQueryValue("price")?.split("-") || [0, 10000],
  );

  useEffect(() => {
    dispatch(
      filterProducts({
        categoriesFilter: categoriesFilter,
        sortFilter: sortFilter,
        priceFilter: priceFilter,
      }),
    );
  }, [categoriesFilter, sortFilter, priceFilter]);

  useEffect(() => {
    setLoading(true);
    // router.push("/products?category=test");
    const getProducts = async () => {
      const response = await fetch("/api/products", {
        cache: "no-cache",
      });
      const products: Product[] = await response.json();

      dispatch(setProducts(products));
    };

    const getCategories = async () => {
      const response = await fetch("/api/categories", {
        cache: "no-cache",
      });
      const categories: Category[] = await response.json();

      dispatch(setCategories(categories));
    };

    Promise.all([getProducts(), getCategories()]).finally(() => {
      dispatch(
        filterProducts({
          categoriesFilter: categoriesFilter,
          sortFilter: sortFilter,
          priceFilter: priceFilter,
        }),
      );
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("pathname changed");
  }, [pathname]);

  useEffect(() => {
    router.push(
      `${pathname}?${createQueryString(
        "category",
        categoriesFilter.join(","),
      )}`,
      {
        scroll: false,
      },
    );
  }, [categoriesFilter]);

  useEffect(() => {
    router.push(`${pathname}?${createQueryString("sort", sortFilter)}`, {
      scroll: false,
    });
  }, [sortFilter]);

  useEffect(() => {
    router.push(
      `${pathname}?${createQueryString("price", priceFilter.join("-"))}`,
      {
        scroll: false,
      },
    );
  }, [priceFilter]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const onChangeSortHandler = (
    newValue: SingleValue<{ value: string; label: string }>,
  ) => {
    console.log(newValue?.value);
    setSortFilter(newValue!.value.toString());
    // router.push(`${pathname}?${createQueryString("sort", newValue!.value)}`, {
    //   scroll: false,
    // });
  };

  const onChangeFilterCategoriesHandler = (
    e: React.SyntheticEvent<HTMLInputElement>,
  ) => {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      setCategoriesFilter((prev) => [...prev, target.value]);
    } else {
      const updatedFilter = categoriesFilter.filter(
        (category) => category !== target.value,
      );
      setCategoriesFilter(updatedFilter);
    }

    console.log("CHECKED:", target.checked, target.value);
  };

  const onChangeFilterPriceHandler = (
    resultValues: [number, number],
    thumbIndex: number,
  ) => {
    // router.push(
    //   `${pathname}?${createQueryString("price", resultValues.join("-"))}`,
    //   {
    //     scroll: false,
    //   },
    // );
    setPriceFilter(resultValues);
  };

  return (
    <div className="products-page">
      <div className="page-top">
        <h1 className="font-bold text-4xl text-white relative z-10">Цветы</h1>
        <h3 className="mt-4 font-normal text-gray-50 relative z-10">
          Самый быстрый способ проявить заботу
        </h3>
      </div>
      <aside className="page-filters">
        <div>
          <div
            className="filters-left flex gap-x-2 items-center"
            role="button"
            onClick={() => setFilterVisible((prev) => !prev)}
          >
            <FunnelIcon className="h-5 w-5 text-gray-400" />
            <span>Фильтр</span>
          </div>
          <span className="filter-divider"></span>
          <span
            className="text-gray-500 transition-colors hover:text-rose-400"
            role="button"
            onClick={() => {
              // const sort = createQueryString("sort", "1");
              // const price = createQueryString("price", "0-10000");
              // router.push("/products", {
              //   scroll: false,
              // });
              // router.refresh();
            }}
          >
            Очистить всё
          </span>
        </div>
        <div>
          <SortSelect
            onChangeHandler={onChangeSortHandler}
            defaultValue={Number(sortFilter)}
          />
        </div>
      </aside>
      <CategoriesFilter
        isVisible={filterIsVisible}
        setVisible={setFilterVisible}
        onChangeFilterCategoriesHandler={onChangeFilterCategoriesHandler}
        onChangeFilterPriceHandler={onChangeFilterPriceHandler}
        priceSliderDefaultValue={priceFilter}
        categoriesFilter={categoriesFilter}
      />
      <Products isLoading={isLoading} />
    </div>
  );
};

export default Page;
