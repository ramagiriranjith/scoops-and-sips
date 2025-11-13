import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const orderPlatforms = [
  {
    name: "Deliveroo",
    description: "Fast delivery from our kitchen to your door",
    color: "from-[#00CCBC] to-[#00B8A9]",
    url: "https://deliveroo.co.uk",
  },
  {
    name: "Just Eat",
    description: "Order your favorite desserts with ease",
    color: "from-[#FF8000] to-[#FF6600]",
    url: "https://www.just-eat.co.uk",
  },
  {
    name: "Uber Eats",
    description: "Quick and reliable dessert delivery",
    color: "from-[#06C167] to-[#05A857]",
    url: "https://www.ubereats.com",
  },
  {
    name: "Foodhub",
    description: "Local delivery, great savings",
    color: "from-[#E31837] to-[#C41230]",
    url: "https://www.foodhub.co.uk",
  },
];

const Order = () => {
  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Order Online
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your favorite desserts delivered straight to your door through our trusted partners
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {orderPlatforms.map((platform) => (
            <Card key={platform.name} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg overflow-hidden group">
              <div className={`h-2 bg-gradient-to-r ${platform.color}`} />
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-between">
                  {platform.name}
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription className="text-base">
                  {platform.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  size="lg"
                  className="w-full"
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    Order on {platform.name}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>🕐 Delivery available during opening hours</p>
                <p>📍 Check platform apps for delivery radius and fees</p>
                <p>⏱️ Average delivery time: 30-45 minutes</p>
                <p>💳 Payment processed securely through delivery platforms</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Prefer to collect? Call us at{" "}
            <a href="tel:+1234567890" className="text-primary hover:underline font-medium">
              (123) 456-7890
            </a>
            {" "}to place a collection order
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;

