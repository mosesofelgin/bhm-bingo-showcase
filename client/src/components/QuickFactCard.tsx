import { X, Lightbulb, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface QuickFactCardProps {
  hero: {
    name: string;
    bioSummary: string;
    keyAccomplishment: string;
    fullBio: string;
    era: string;
    category: string;
    imageUrl: string;
  };
  onClose: () => void;
}

export default function QuickFactCard({ hero, onClose }: QuickFactCardProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with image */}
          <div className="relative h-48 bg-gradient-to-br from-green-600 to-yellow-600">
            <img
              src={hero.imageUrl}
              alt={hero.name}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-3xl font-bold text-white mb-1">{hero.name}</h2>
              <p className="text-yellow-300 font-medium">{hero.era}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Category badge */}
            <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
              {hero.category}
            </div>

            {/* Quick Fact */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Quick Fact</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {hero.keyAccomplishment}
                  </p>
                </div>
              </div>
            </div>

            {/* Full bio */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">Biography</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {hero.fullBio}
              </p>
            </div>

            {/* Learn More section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Learn More
              </h3>
              <div className="grid gap-3">
                <a
                  href={`https://nmaahc.si.edu/explore/search?search=${encodeURIComponent(hero.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Smithsonian NMAAHC</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">National Museum of African American History & Culture</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
                </a>
                <a
                  href={`https://www.blackpast.org/?s=${encodeURIComponent(hero.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">BlackPast.org</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Online Reference Guide to African American History</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
                </a>
                <a
                  href={`https://www.biography.com/search?q=${encodeURIComponent(hero.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors group"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Biography.com</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Detailed Life Stories and Achievements</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
