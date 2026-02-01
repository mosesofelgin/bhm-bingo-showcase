import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./HeroBioPanel.css";

interface Hero {
  id: number;
  name: string;
  category: string;
  era: string;
  bioSummary: string;
  bioFull: string;
  keyAccomplishment: string;
  imageUrl?: string;
}

interface HeroBioPanelProps {
  hero: Hero | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryLabels: Record<string, string> = {
  civil_rights: "Civil Rights",
  science_medicine: "Science & Medicine",
  arts_culture: "Arts & Culture",
  business_entrepreneurship: "Business & Entrepreneurship",
  politics_law: "Politics & Law",
  sports: "Sports",
  faith_leadership: "Faith & Leadership",
  global_history: "Global History",
};

export default function HeroBioPanel({ hero, isOpen, onClose }: HeroBioPanelProps) {
  const [expandedLearnMore, setExpandedLearnMore] = useState(false);

  if (!hero) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="hero-bio-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="hero-bio-panel"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bio-header">
              <div className="bio-hero-info">
                <h2 className="bio-hero-name">{hero.name}</h2>
                <div className="bio-meta">
                  <span className="bio-category">
                    {categoryLabels[hero.category as keyof typeof categoryLabels]}
                  </span>
                  <span className="bio-era">{hero.era}</span>
                </div>
              </div>
              <button className="bio-close" onClick={onClose}>
                ✕
              </button>
            </div>

            {hero.imageUrl && (
              <div className="bio-image-container">
                <img
                  src={hero.imageUrl}
                  alt={hero.name}
                  className="bio-image"
                />
              </div>
            )}

            <div className="bio-content">
              <div className="bio-section">
                <h3 className="bio-section-title">Overview</h3>
                <p className="bio-summary">{hero.bioSummary}</p>
              </div>

              <div className="bio-section">
                <h3 className="bio-section-title">Key Accomplishment</h3>
                <p className="bio-accomplishment">{hero.keyAccomplishment}</p>
              </div>

              <motion.div
                className="bio-learn-more"
                initial={false}
                animate={{ height: expandedLearnMore ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bio-learn-more-content">
                  <h3 className="bio-section-title">Full Biography</h3>
                  <p className="bio-full">{hero.bioFull}</p>
                </div>
              </motion.div>

              <button
                className="bio-expand-button"
                onClick={() => setExpandedLearnMore(!expandedLearnMore)}
              >
                <span>{expandedLearnMore ? "Show Less" : "Learn More"}</span>
                <motion.div
                  animate={{ rotate: expandedLearnMore ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
