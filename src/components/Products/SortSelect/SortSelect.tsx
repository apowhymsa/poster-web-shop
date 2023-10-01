"use client";

import Select, { SingleValue } from "react-select";

const options = [
  { value: "1", label: "Популярные" },
  { value: "2", label: "Новые" },
  { value: "3", label: "Цена: Низкая - Высокая" },
  { value: "4", label: "Цена: Высокая - Низкая" },
];

type Props = {
  onChangeHandler: (
    newValue: SingleValue<{ value: string; label: string }>,
  ) => void;
  defaultValue: number;
};
const SortSelect = (props: Props) => {
  const { onChangeHandler, defaultValue } = props;
  return (
    <Select
      options={options}
      className="w-[245px]"
      onChange={onChangeHandler}
      defaultValue={
        Number(defaultValue) > 3
          ? options[0]
          : options[Number(defaultValue) - 1]
      }
    />
  );
};

export default SortSelect;
