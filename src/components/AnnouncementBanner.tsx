import { X } from 'lucide-react';
import { useState } from 'react';

const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-church-gold to-orange-500 text-white py-4 px-4 sticky top-0 z-40">
            <div className="container mx-auto flex items-center justify-between max-w-7xl">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <p className="text-sm md:text-base font-medium">
                        🎉 Join us this Sunday at 9:00 AM for our special service and fellowship breakfast!
                    </p>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-shrink-0 ml-4 hover:bg-white/20 p-1 rounded transition-colors"
                    aria-label="Close announcement"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBanner;
