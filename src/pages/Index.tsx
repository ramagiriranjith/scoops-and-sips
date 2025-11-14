import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { IceCream, Cake, Coffee, Star } from "lucide-react";
import { useState } from "react";
import g_1 from './../assets/g_1.jpg';
import g_2 from './../assets/g_2.jpg';
import g_3 from './../assets/g_3.jpg';
import g_4 from './../assets/g_4.jpg';
import g_5 from './../assets/g_5.jpg';
import g_6 from './../assets/g_6.jpg';
import g_7 from './../assets/g_7.jpg';
import g_8 from './../assets/g_8.jpg';
import g_9 from './../assets/g_9.jpg';
import g_10 from './../assets/g_10.jpg';
import g_11 from './../assets/g_11.jpg';
import g_12 from './../assets/g_12.jpg';
import review_1 from './../assets/review-1.png';
import review_2 from './../assets/review-2.png';
import review_3 from './../assets/review-3.png';

const Index = () => {
  const [showAll, setShowAll] = useState(false);

  const galleryImages = [
    g_1,
    g_2,
    g_3,
    g_4,
    g_5,
    g_6,
    g_7,
    g_8,
    g_9,
    g_10,
    g_11,
    g_12
  ];

  const testimonials = [
    {
      img: review_1,
      name: "Halinah Bi",
      rating: 5,
      comment:
        "Savi was amazing - super nice and made our desserts really fast! Everything tasted absolutely delicious, you can tell she puts care into her work. Great service and great food - highly recommend!",
    },
    {
      img: review_2,
      name: "Kieran Garside",
      rating: 4,
      comment:
        "We ordered via Uber Eats - very speedy delivery and nice and warm. The Biscoff cheesecake was creamy and not too sweet, the Cookies & Cream cake was soft and fluffy, and the doughnuts were perfectly topped. Great pricing too!",
    },
    {
      img: review_3,
      name: "Aksharkumar Solanki",
      rating: 5,
      comment:
        "Absolutely delightful! Scoops and Sips Desserts blew me away - creamy ice cream, cozy ambience, and friendly staff. Every bite felt like a mini celebration. Can’t wait to come back for more!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <HeroCarousel />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Scoops and Sips Desserts?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of quality, taste, and authenticity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 lg:p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <IceCream className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Gelato</h3>
              <p className="text-muted-foreground">
                Authentic Italian gelato made fresh daily with the finest ingredients
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 lg:p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cake className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Artisan Desserts</h3>
              <p className="text-muted-foreground">
                Handcrafted waffles, crepes, and signature sweet treats
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 lg:p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Beverages</h3>
              <p className="text-muted-foreground">
                Specialty milkshakes, smoothies, and hot drinks to complement your dessert
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a peek at our most loved desserts, drinks, and moments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {(showAll ? galleryImages : galleryImages.slice(0, 6)).map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl hover:scale-105 transform transition duration-300 shadow-md"
            >
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-6 text-lg"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real reviews from dessert lovers just like you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
                  <div className="flex justify-center mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">“{t.comment}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Indulge?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our menu or place an order for delivery today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                View Menu
              </Button>
            </Link>
            <Link to="/order">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;


