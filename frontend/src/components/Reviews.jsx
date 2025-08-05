import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const Marquee = ({
    children,
    direction = "left",
    speed = 40,
    pauseOnHover = true,
    className = "",
}) => {
    const [contentWidth, setContentWidth] = useState(0);
    const contentRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (contentRef.current) {
            setContentWidth(contentRef.current.scrollWidth);
        }
    }, [children]);

    return (
        <div
            className={`overflow-hidden relative ${className}`}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            <div
                className="flex min-w-full gap-4"
                style={{
                    transform: `translateX(${direction === "left" ? "-" : ""}${isPaused ? contentWidth / 5 : 0
                        }px)`,
                    animation: `scroll-${direction} ${contentWidth / speed}s linear infinite`,
                    animationPlayState: isPaused ? "paused" : "running",
                }}
            >
                <div ref={contentRef} className="flex gap-7 shrink-0">
                    {children}
                </div>
                <div className="flex gap-7 shrink-0">{children}</div>
            </div>

            <style>
                {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
            </style>
        </div>
    );
};

const ReviewCard = ({ profilePicture, name, rating }) => (
    <div className="w-90 p-5 bg-card bg-white rounded-xl">
        <div className="flex items-center gap-3">
            {/* profile picture */}
            <img
                src={profilePicture}
                alt={name}
                className="w-15 h-15 rounded-full object-cover"
            />

            {/* name and rating */}
            <div>
                {/* name */}
                <h3 className="font-semibold text-foreground opacity-85">{name}</h3>

                {/* rating */}
                <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* review text */}
        <p className="opacity-50 leading-relaxed mt-5">Appropriately administrate proactive value with to niche markets. Dramatically target market position idea after high quality best practice.</p>
    </div>
);

export default function Reviews() {
    const reviews = [
        {
            name: "Anjelina Watson",
            profilePicture: "/testi-profile.png",
            rating: 5,
        },
        {
            name: "Jhon D. Alexon",
            profilePicture: "/testi-profile-2.png",
            rating: 4,
        },
        {
            name: "Emma Davis",
            profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
            rating: 5,
        },
        {
            name: "James Wilson",
            profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
            rating: 3,
        },
        {
            name: "Michael Chen",
            profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
            rating: 5,
        },

    ];

    return (
        <div className="flex flex-col gap-8 items-center justify-center">
            <div className="">
                <div className="">
                    <Marquee direction="left" className="" speed={40}>
                        {reviews.map((review, index) => (
                            <ReviewCard
                                key={index}
                                profilePicture={review.profilePicture}
                                name={review.name}
                                rating={review.rating}
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}
