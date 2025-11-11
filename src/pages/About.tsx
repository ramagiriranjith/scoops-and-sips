import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Scoops and Sips Desserts
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passion for creating memorable dessert experiences that bring joy to every customer
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2">
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Scoops and Sips Desserts was born from a simple dream: to create a place where premium quality meets authentic flavors, and every visit feels like a celebration.
                </p>
                <p>
                  Our journey began with a commitment to sourcing the finest ingredients and mastering traditional techniques. From authentic Italian gelato recipes to innovative dessert creations, we've built our reputation on consistency, quality, and care.
                </p>
                <p>
                  Today, we're proud to serve our community with a menu that combines classic favorites with exciting new creations, all made fresh daily with love and attention to detail.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Made with Love</h3>
                <p className="text-muted-foreground">
                  Every dessert is crafted with care and passion, ensuring the highest quality in every bite
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
                <p className="text-muted-foreground">
                  We use only the finest ingredients, sourced from trusted suppliers who share our values
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community First</h3>
                <p className="text-muted-foreground">
                  Our customers are family, and we're committed to creating experiences that bring people together
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To deliver exceptional dessert experiences that create lasting memories, using authentic recipes, premium ingredients, and a genuine commitment to quality and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
