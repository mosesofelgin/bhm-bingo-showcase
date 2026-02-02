/* Afrocentric Heritage Design - Black History Month Bingo Showcase
 * Design: Asymmetric hero with diagonal transitions, Pan-African colors
 * Typography: Playfair Display headlines + Inter body
 * Features: Cultural pattern overlays, dignified animations
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Award, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Asymmetric with diagonal cut */}
      <section 
        className="relative min-h-[85vh] flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #2d5016 0%, #3d6820 50%, #2d5016 100%)',
        }}
      >
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Diagonal overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.9) 0%, rgba(45, 80, 22, 0.7) 100%)',
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white space-y-6">
              <div className="inline-block px-4 py-2 bg-[#d4a574] text-[#2d5016] rounded-full text-sm font-semibold mb-4">
                Educational Game • Black History Month
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Celebrate Black History Through Play
              </h1>
              
              <p className="text-xl lg:text-2xl text-[#f0f4ed] leading-relaxed">
                An engaging bingo game featuring 75 remarkable Black historical figures. Learn their stories, honor their achievements, and celebrate their legacy.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-[#d4a574] text-[#2d5016] hover:bg-[#c49564] text-lg px-8 py-6 rounded-lg font-semibold"
                  onClick={() => window.location.href = '/game'}
                >
                  Play Now
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg font-semibold"
                  onClick={() => window.location.href = '/heroes'}
                >
                  View Heroes
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-4xl font-bold text-[#d4a574]">75</div>
                  <div className="text-sm text-[#f0f4ed]">Historical Figures</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#d4a574]">8</div>
                  <div className="text-sm text-[#f0f4ed]">Categories</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#d4a574]">100%</div>
                  <div className="text-sm text-[#f0f4ed]">Authentic Photos</div>
                </div>
              </div>
            </div>

            {/* Right: Game Preview Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="/images/game-preview.png" 
                  alt="Black History Bingo Game Interface"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#d4a574] rounded-full opacity-20 blur-3xl" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#8b1a1a] rounded-full opacity-20 blur-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal bottom cut */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 bg-background"
          style={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 80%)',
          }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20 pattern-overlay">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2d5016] mb-4">
              Why Play Black History Bingo?
            </h2>
            <p className="text-xl text-[#5a5a5a] max-w-3xl mx-auto">
              More than just a game—it's an interactive journey through the achievements and contributions of Black historical figures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <Card className="p-8 border-2 border-[#d4a574] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-[#d4a574]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-3">Educational</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Learn detailed biographies, key accomplishments, and historical context for each figure.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 border-2 border-[#d4a574] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#d4a574]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-3">Solo Mode</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Play at your own pace with customizable board sizes: 3x3, 5x5, or 7x7 grids.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 border-2 border-[#d4a574] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#d4a574]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-3">Authentic</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Every hero features real historical photographs from Wikipedia and trusted archives.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="p-8 border-2 border-[#d4a574] hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#2d5016] rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#d4a574]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-3">Learning Mode</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Optional quiz questions test your knowledge and deepen understanding.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Hero Collection Preview */}
      <section 
        className="py-20 diagonal-top"
        style={{
          background: 'linear-gradient(180deg, #f0f4ed 0%, #e8ede5 100%)',
        }}
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2d5016] mb-4">
              Meet the Heroes
            </h2>
            <p className="text-xl text-[#5a5a5a] max-w-3xl mx-auto">
              Explore our collection of 75 Black historical figures across 8 categories: Civil Rights, Science & Medicine, Arts & Culture, and more.
            </p>
          </div>

          {/* Category badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              'Civil Rights',
              'Science & Medicine',
              'Arts & Culture',
              'Business & Entrepreneurship',
              'Politics & Law',
              'Sports',
              'Faith & Leadership',
            ].map((category) => (
              <div
                key={category}
                className="px-6 py-3 bg-white border-2 border-[#2d5016] text-[#2d5016] rounded-full font-semibold hover:bg-[#2d5016] hover:text-white transition-colors cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-[#2d5016] text-white hover:bg-[#3d6820] text-lg px-10 py-6 rounded-lg font-semibold"
              onClick={() => window.location.href = '/heroes'}
            >
              Browse All Heroes
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2d5016] mb-4">
              How to Play
            </h2>
            <p className="text-xl text-[#5a5a5a] max-w-3xl mx-auto">
              Simple, engaging, and educational—perfect for classrooms, events, or solo learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-3">Choose Board Size</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Select 3x3 for quick games, 5x5 for standard play, or 7x7 for extended learning.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-3">Call Heroes</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Heroes are randomly called. Read their bios, view photos, and mark your board.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4a574] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#2d5016] mb-3">Win & Learn</h3>
              <p className="text-[#5a5a5a] leading-relaxed">
                Complete a row, column, or diagonal to win while learning about Black history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 diagonal-top diagonal-bottom"
        style={{
          background: 'linear-gradient(135deg, #8b1a1a 0%, #a52828 100%)',
        }}
      >
        <div className="container text-center text-white">
          <img 
            src="/images/education-icon.png" 
            alt="Education"
            className="w-32 h-32 mx-auto mb-8 opacity-90"
          />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Playing Today
          </h2>
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95">
            Honor Black history, celebrate remarkable achievements, and learn through play.
          </p>
          <Button 
            size="lg"
            className="bg-[#d4a574] text-[#2d5016] hover:bg-[#c49564] text-xl px-12 py-7 rounded-lg font-bold"
            onClick={() => window.location.href = '/game'}
          >
            Launch Game
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2d5016] text-white">
        <div className="container text-center">
          <p className="text-lg mb-4">
            <strong>Black History Month Bingo</strong> - An Educational Game
          </p>
          <p className="text-sm opacity-80">
            Celebrating the lives and achievements of Black historical figures through interactive learning.
          </p>
          <p className="text-xs opacity-60 mt-6">
            All historical photographs sourced from Wikipedia and public archives.
          </p>
        </div>
      </footer>
    </div>
  );
}
