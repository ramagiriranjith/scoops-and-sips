import { useState, useMemo, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { menuItems, categories, categoryAddons } from "@/data/menuData";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 0.5;
  const isHovering = useRef(false);

  // Continuous + manual scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let animationFrame: number;

    const scroll = () => {
      if (!isHovering.current) {
        scrollAmount += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        } else {
          scrollContainer.scrollLeft = scrollAmount;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentAddons = useMemo(() => {
    if (selectedCategory === "All") return null;
    return categoryAddons.find((addon) => addon.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen py-12 lg:py-20 bg-[#feedf1]">
      {/* 🌸 Very light pastel pink background */}
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our delightful desserts, beverages, and sweet creations.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 border-pink-200 focus:border-pink-400 bg-white rounded-full"
            />
          </div>
        </div>

        {/* Auto-Scrolling Category Bar */}
        <div className="relative mb-12">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto whitespace-nowrap px-4 scroll-smooth"
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => (isHovering.current = false)}
          >
            {[...categories, ...categories].map((category, index) => (
              <Button
                key={`${category}-${index}`}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-base whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-pink-500 text-white shadow-md"
                    : "border-pink-300 hover:bg-pink-100 text-gray-700"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Edge fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#fff8fa] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#fff8fa] to-transparent" />
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all duration-300 bg-white rounded-2xl"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-pink-600">
                    {item.name}
                  </CardTitle>
                  <span className="text-lg font-bold text-pink-500">
                    {item.price}
                  </span>
                </div>
                <CardDescription className="text-base text-gray-600">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-block px-3 py-1 bg-pink-50 text-pink-600 text-sm rounded-full">
                  {item.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              No items found. Try changing your search or category.
            </p>
          </div>
        )}

        {/* Add-ons Section */}
        {currentAddons && filteredItems.length > 0 && (
          <div className="mt-12 border-t border-pink-200 pt-8">
            <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
              Customize Your Order
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {currentAddons.toppings && (
                <Card className="border-2 border-pink-200 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl text-pink-600">
                      {currentAddons.toppings.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {currentAddons.toppings.items.map((topping, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-1 text-gray-700"
                      >
                        <span className="text-sm">{topping.name}</span>
                        <span className="text-sm font-medium text-pink-500">
                          {topping.price}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
              {currentAddons.sauces && (
                <Card className="border-2 border-pink-200 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl text-pink-600">
                      {currentAddons.sauces.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {currentAddons.sauces.items.map((sauce, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-1 text-gray-700"
                      >
                        <span className="text-sm">{sauce.name}</span>
                        <span className="text-sm font-medium text-pink-500">
                          {sauce.price}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
