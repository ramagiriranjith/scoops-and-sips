import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { menuItems, categories, categoryAddons } from "@/data/menuData";


const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentAddons = useMemo(() => {
    if (selectedCategory === "All") return null;
    return categoryAddons.find(addon => addon.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our delicious selection of artisan desserts and beverages
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <span className="text-lg font-bold text-primary">{item.price}</span>
                </div>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {item.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No items found. Try adjusting your search or category filter.
            </p>
          </div>
        )}

        {/* Addons Section */}
        {currentAddons && filteredItems.length > 0 && (
          <div className="mt-12 border-t pt-8">
            <h2 className="text-3xl font-bold text-center mb-8">Customize Your Order</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {currentAddons.toppings && (
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">{currentAddons.toppings.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {currentAddons.toppings.items.map((topping, index) => (
                        <div key={index} className="flex justify-between items-center py-1">
                          <span className="text-sm">{topping.name}</span>
                          <span className="text-sm font-medium text-primary">{topping.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              {currentAddons.sauces && (
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-xl">{currentAddons.sauces.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {currentAddons.sauces.items.map((sauce, index) => (
                        <div key={index} className="flex justify-between items-center py-1">
                          <span className="text-sm">{sauce.name}</span>
                          <span className="text-sm font-medium text-primary">{sauce.price}</span>
                        </div>
                      ))}
                    </div>
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

