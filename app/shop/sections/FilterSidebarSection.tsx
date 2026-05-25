"use client";

export default function FilterSidebarSection() {
  return (
    <div className="hidden w-[280px] flex-col gap-6 rounded-3xl border border-[#7DBBFF]/20 bg-white/50 p-6 backdrop-blur-2xl lg:flex">

      <h3 className="text-lg font-bold text-gray-900">Filters</h3>

      <div>
        <p className="mb-2 text-sm font-semibold">Category</p>
        {["Laptops", "Phones", "Gaming", "Audio"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold">Brand</p>
        {["Apple", "Samsung", "Sony"].map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {item}
          </label>
        ))}
      </div>

    </div>
  );
}