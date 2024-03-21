"use client";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";

const MobileMenu = ({ navigation, pathname, open, setOpen }) => {
  return (
    <div onClick={() => setOpen(false)}>
      {open && (
        <div className="md:hidden items-center flex flex-col absolute inset-0 w-full  inset-x-0 top-full z-30 mt-6 origin-top overflow-hidden rounded-2xl bg-white px-6 py-7 shadow-xl shadow-sky-100/40 ring-1 ring-slate-900/5 min-h-fit">
          {navigation.map((item) => (
            <div
              className={clsx(
                "relative p-2 w-full",
                item.items.child_label !== null && "group"
              )}
              key={item.primary.label}
            >
              {console.log("item link ", item.primary.link)}
              <PrismicNextLink
                field={item.primary.link}
                className={clsx(
                  'relative duration-200 after:absolute after:-bottom-2.5 after:left-1/2 after:h-0.5 after:w-4 after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0 after:content-[""]',
                  pathname === item.primary.link.url
                    ? "font-semibold text-slate-900 after:opacity-100"
                    : "font-medium text-slate-700 hover:text-slate-900 hover:after:opacity-25"
                )}
              >
                {item.primary.label}
              </PrismicNextLink>
              {item.items[0]?.child_label != null && (
                <div className="ml-3 block left-0 z-20 space-y-2 rounded-lg bg-white p-2.5 outline-none  filter focus:outline-none">
                  {item.items.map((subitem) => (
                    <div key={subitem.child_label}>
                      <PrismicNextLink
                        field={subitem.child_link}
                        className={clsx(
                          "text-sm font-medium leading-5 text-narancasta hover:text-slate-700 transition-colors duration-200 "
                        )}
                      >
                        {subitem.child_label}
                      </PrismicNextLink>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
