import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";

type Props = {
  classNameContainer: string;
  setTab: Dispatch<SetStateAction<number>>;
  tab: number;
};

const ProductOverviewMobile = (props: Props) => {
  const { tab, setTab, classNameContainer } = props;
  return (
    <div className={classNameContainer}>
      <div className="flex flex-col gap-y-3 w-full">
        <div className="flex gap-x-3 border-b border-b-gray-10 w-full">
          <ul className="flex gap-x-5 w-full">
            <li
              onClick={() => setTab(1)}
              className={
                tab === 1
                  ? "transition-colors inline-flex cursor-pointer items-center gap-2 px-1 py-3 hover:text-rose-400 relative text-rose-400  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-rose-400"
                  : "transition-colors inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-black hover:text-rose-500"
              }
            >
              Информация для покупателя
            </li>
            <li
              onClick={() => setTab(2)}
              className={
                tab === 2
                  ? "transition-colors inline-flex cursor-pointer items-center gap-2 px-1 py-3 hover:text-rose-400 relative text-rose-400  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-rose-400"
                  : "transition-colors inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-black hover:text-rose-500"
              }
            >
              Отзывы
            </li>
          </ul>
        </div>
        {tab === 1 && <div>Info</div>}
        {tab === 2 && (
          <div className="flex flex-col gap-y-4 max-h-[300px] overflow-y-auto px-1 py-2">
            <div className="max-w-full">
              <div className="relative overflow-hidden rounded-md border border-gray-300 shadow-sm focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
                <textarea
                  id="example5"
                  className="block w-full border-0 focus:border-0 focus:ring-0"
                  rows={3}
                  placeholder="Ваш комментарий"
                ></textarea>
                <div className="flex w-full items-center justify-between bg-white p-2">
                  <button
                    type="button"
                    className="rounded border border-rose-400 bg-rose-400 px-2 py-1.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-rose-500"
                  >
                    Оставить комментарий
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-x-4 border-b pb-4">
              <div className="flex justify-between">
                <Image
                  src="https://i.pravatar.cc/50"
                  alt="Profile Photo"
                  width={50}
                  height={50}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                  priority
                />
                <div className="flex flex-col gap-y-3">
                  <div className="flex flex-col">
                    <span>Emily Selman</span>
                    <span className="text-[#6b7290]">26.09.2023</span>
                  </div>
                  <div className="flex">
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#f4f4f4] h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <span className="product-overview-text-mobile text-justify inline-block w-full">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores commodi corporis cum debitis, exercitationem, illum
                  laboriosam laborum nisi numquam omnis placeat possimus quam
                  quas quasi quia quibusdam similique sunt totam.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-x-4 border-b pb-4">
              <div className="flex justify-between">
                <Image
                  src="https://i.pravatar.cc/50"
                  alt="Profile Photo"
                  width={50}
                  height={50}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                  priority
                />
                <div className="flex flex-col gap-y-3">
                  <div className="flex flex-col">
                    <span>Emily Selman</span>
                    <span className="text-[#6b7290]">26.09.2023</span>
                  </div>
                  <div className="flex">
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <span className="product-overview-text-mobile text-justify inline-block w-full">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores commodi corporis cum debitis, exercitationem, illum
                  laboriosam laborum nisi numquam omnis placeat possimus quam
                  quas quasi quia quibusdam similique sunt totam.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-x-4 border-b pb-4">
              <div className="flex justify-between">
                <Image
                  src="https://i.pravatar.cc/50"
                  alt="Profile Photo"
                  width={50}
                  height={50}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                  priority
                />
                <div className="flex flex-col gap-y-3">
                  <div className="flex flex-col">
                    <span>Emily Selman</span>
                    <span className="text-[#6b7290]">26.09.2023</span>
                  </div>
                  <div className="flex">
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                    <StarIcon className="text-[#facc15] h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <span className="product-overview-text-mobile text-justify inline-block w-full">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores commodi corporis cum debitis, exercitationem, illum
                  laboriosam laborum nisi numquam omnis placeat possimus quam
                  quas quasi quia quibusdam similique sunt totam.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductOverviewMobile;
