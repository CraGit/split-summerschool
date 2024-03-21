"use client";
export default function MobileMenuButton({ toggleMenu, open }) {
  return (
    <button
      className="w-9 h-9 group relative z-50 flex cursor-pointer items-center justify-center  bg-primary p-1 shadow-sm shadow-sky-100/50 ring-1 ring-primary transition duration-300 ease-in-out hover:bg-primary/80 focus:outline-none md:hidden border-none text-[1.25rem] leading-none rounded-sm"
      aria-label="Toggle Navigation"
      onClick={toggleMenu}
    >
      <span className="relative h-3.5 w-4">
        <span
          className={`absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900 ${
            open ? "left-1/2 top-1.5 w-0" : "left-0 top-0 w-full"
          }`}
        />
        <span
          className={`absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        />
        <span
          className={`absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900 ${
            open ? "-rotate-45" : "rotate-0"
          }`}
        />
        <span
          className={`absolute block h-0.5 rotate-0 transform rounded-full bg-slate-700 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-slate-900 ${
            open ? "left-1/2 top-1.5 w-0" : "left-0 top-3 w-full"
          }`}
        />
      </span>
    </button>
  );
}
