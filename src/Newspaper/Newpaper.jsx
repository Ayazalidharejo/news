import React from "react";

const NewspaperGrid = () => {
  const cities = [
    { name: "اسلام آباد", image: "/path-to-image-islamabad.jpg" },
    { name: "کراچی", image: "/path-to-image-karachi.jpg" },
    { name: "لاہور", image: "/path-to-image-lahore.jpg" },
    { name: "فیصل آباد", image: "/path-to-image-faisalabad.jpg" },
    { name: "گوجرانوالہ", image: "/path-to-image-gujranwala.jpg" },
    { name: "ملتان", image: "/path-to-image-multan.jpg" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {/* Header Logo */}
      <div className="text-center mb-8">
        <img
          src="/path-to-logo.png"
          alt="Logo"
          className="mx-auto h-20"
        />
      </div>

      {/* Newspaper Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-40 object-cover"
            />
            <div className="text-center py-4 text-xl font-medium text-gray-700">
              {city.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewspaperGrid;
