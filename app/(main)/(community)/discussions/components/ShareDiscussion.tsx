import React from 'react';
import Facebook from '@/components/Common/Icons/social-media-icons/Facebook';
import Twitter from '@/components/Common/Icons/social-media-icons/Twitter';
import LinkedIn from '@/components/Common/Icons/social-media-icons/LinkedIn';

interface ShareDiscussionProps {
  shareUrl: string;
  shareText: string;
}

const ShareDiscussion: React.FC<ShareDiscussionProps> = ({ shareUrl, shareText }) => {
  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="text-primaryWhite flex w-auto items-center justify-start gap-2">
      <button
        className="bg-info aspect-square w-10 rounded-full flex items-center justify-center"
        onClick={handleFacebookShare}
      >
        <Facebook size="34" />
      </button>
      <button
        className="bg-info aspect-square w-10 rounded-full flex items-center justify-center"
        onClick={handleTwitterShare}
      >
        <Twitter size="35" />
      </button>
      <button
        className="bg-info aspect-square w-10 rounded-full flex items-center justify-center"
        onClick={handleLinkedInShare}
      >
        <LinkedIn size="35" />
      </button>
    </div>
  );
};

export default ShareDiscussion;
