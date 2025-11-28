import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface ShareProps {
  shareUrl?: string;
}

const Share: React.FC<ShareProps> = ({ shareUrl }) => {
  const handleShare = async () => {
    if (!shareUrl) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this magazine',
          url: shareUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast.success('Link copied to clipboard');
    }
  };

  return (
    <Button variant="secondary" size="icon" className="size-8 min-w-8" onClick={handleShare}>
      <Share2 className="size-4 min-w-4" />
    </Button>
  );
};

export default Share;
