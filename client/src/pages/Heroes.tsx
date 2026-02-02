/**
 * Heroes Collection Page - Browse all Black History figures
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroBioPanel from "@/components/HeroBioPanel";
import { heroDatabase, Hero } from "@/lib/heroDatabase";
import { ArrowLeft, Search } from "lucide-react";

export default function Heroes() {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [showBioPanel, setShowBioPanel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Civil Rights",
    "Science & Medicine",
    "Arts & Culture",
    "Business & Entrepreneurship",
    "Politics & Law",
    "Sports",
    "Faith & Leadership",
  ];

  const filteredHeroes = heroDatabase.filter((hero) => {
    const matchesCategory = selectedCategory === "All" || hero.category === selectedCategory;
    const matchesSearch = hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hero.bioSummary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleHeroClick = (hero: Hero) => {
    setSelectedHero(hero);
    setShowBioPanel(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] to-[#e8f5e8]">
      {/* Header */}
      <section 
        className="py-16 px-4"
        style={{
          background: 'linear-gradient(135deg, #2d5016 0%, #3d6820 100%)',
        }}
      >
        <div className="container">
          <Button
            onClick={() => window.location.href = "/"}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Meet the Heroes
          </h1>
          <p className="text-xl text-[#f0f4ed] max-w-3xl">
            Explore our collection of {heroDatabase.length} remarkable Black historical figures who shaped history and continue to inspire us today.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search heroes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2d5016] focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    selectedCategory === category
                      ? "bg-[#2d5016] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heroes Grid */}
      <section className="py-12 px-4">
        <div className="container">
          <div className="mb-6 text-gray-600">
            Showing {filteredHeroes.length} {filteredHeroes.length === 1 ? "hero" : "heroes"}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHeroes.map((hero) => (
              <Card
                key={hero.id}
                onClick={() => handleHeroClick(hero)}
                className="overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-105 bg-white"
              >
                {/* Hero Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  {hero.imageUrl ? (
                    <img
                      src={hero.imageUrl}
                      alt={hero.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#2d5016] text-white text-4xl font-bold">
                      {hero.name.charAt(0)}
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[#d4a574] text-[#2d5016] text-xs font-semibold rounded-full">
                    {hero.category}
                  </div>
                </div>

                {/* Hero Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-[#2d5016] mb-2">
                    {hero.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {hero.era}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-3">
                    {hero.bioSummary}
                  </p>
                  <div className="mt-4">
                    <Button
                      size="sm"
                      className="w-full bg-[#2d5016] hover:bg-[#3d6820] text-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredHeroes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No heroes found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bio Panel */}
      {selectedHero && (
        <HeroBioPanel
          hero={selectedHero}
          isOpen={showBioPanel}
          onClose={() => setShowBioPanel(false)}
        />
      )}
    </div>
  );
}
