import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Welcome to Scoops and Sips Desserts",
    subtitle: "Premium Artisan Desserts",
  },
  {
    image: hero2,
    title: "Indulge in Sweetness",
    subtitle: "Handcrafted with Love",
  },
  {
    image: hero3,
    title: "Fresh Every Day",
    subtitle: "Quality Ingredients, Amazing Taste",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          // IMPORTANT: pointer-events auto only for active slide, none for inactive slides
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100 pointer-events-auto z-20"
              : "opacity-0 pointer-events-none z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* overlay stays below content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 animate-fade-in">
              {slide.subtitle}
            </p>

            {/* Buttons — hover styles included */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link to="/menu">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-6 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:bg-pink-500 hover:text-white"
                >
                  View Menu
                </Button>
              </Link>

              <Link to="/order">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 border-white text-white transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:bg-white/30 hover:border-white"
                >
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm z-30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm z-30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
