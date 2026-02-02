/**
 * Social Share Component
 * Allows users to share their BINGO wins on social media
 */

import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Link } from "lucide-react";
import { useState } from "react";
import { trackSocialShare } from "@/lib/analytics";

interface SocialShareProps {
  heroCount: number;
  boardSize: number;
}

export default function SocialShare({ heroCount, boardSize }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `I just won Black History Bingo! 🎉 I learned about ${heroCount} remarkable Black historical figures. Play and learn at`;
  const shareUrl = window.location.origin;

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
    trackSocialShare('twitter');
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
    trackSocialShare('facebook');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      trackSocialShare('copy_link');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-6 pt-6 border-t border-white/20">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center justify-center gap-2">
          <Share2 size={20} />
          Share Your Win!
        </h3>
        <p className="text-sm text-white/70 mt-1">
          Spread the word about Black History education
        </p>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          onClick={handleTwitterShare}
          className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white flex items-center gap-2"
        >
          <Twitter size={18} />
          Twitter
        </Button>
        
        <Button
          onClick={handleFacebookShare}
          className="bg-[#4267B2] hover:bg-[#365899] text-white flex items-center gap-2"
        >
          <Facebook size={18} />
          Facebook
        </Button>
        
        <Button
          onClick={handleCopyLink}
          className="bg-white/20 hover:bg-white/30 text-white flex items-center gap-2"
        >
          <Link size={18} />
          {copied ? 'Copied!' : 'Copy Link'}
        </Button>
      </div>
    </div>
  );
}
