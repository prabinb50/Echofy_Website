import React, { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews({ testimonials = [] }) {
    // responsive state to track window size
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // default testimonials data 
    const defaultTestimonials = [
        {
            name: "Anjelina Watson",
            profilePicture: "/testi-profile.png",
            rating: 5
        },
        {
            name: "Jhon D. Alexon",
            profilePicture: "/testi-profile-2.png",
            rating: 4
        },
        {
            name: "Emma Davis",
            profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
            rating: 5
        },
        {
            name: "Sarah Johnson",
            profilePicture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
            rating: 3,
        },
        {
            name: "Michael Chen",
            profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
            rating: 5,
        }
    ];

    // use provided testimonials or fall back to defaults
    const testimonialsToUse = testimonials.length > 0 ? testimonials : defaultTestimonials;

    // animation controls for the sliding motion
    const controls = useAnimationControls();

    // track screen size and update animation settings accordingly
    useEffect(() => {
        // initial check for screen size
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        };

        // set initial values
        handleResize();

        // add event listener
        window.addEventListener('resize', handleResize);

        // apply animation based on current screen size
        const startAnimation = () => {
            controls.start({
                x: ["0%", "-100%"],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: isMobile ? 8 : isTablet ? 15 : 20,
                        ease: "linear"
                    }
                }
            });
        };

        startAnimation();

        // cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [controls, isMobile, isTablet]);

    // review card component
    const TestimonialCard = ({ testimonial, index }) => {
        // use provided rating or calculate based on index
        const rating = testimonial.rating || 3 + (index % 3); // simulate varying rating between 3 and 5

        return (
            <motion.div
                className="min-w-[300px] md:min-w-[350px] p-4 md:p-5 bg-white rounded-xl mx-2 md:mx-4 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
            >
                {/* profile section - author info and rating */}
                <div className="flex items-center gap-3">
                    <img
                        src={testimonial.profilePicture}
                        alt={`Profile picture of ${testimonial.name}`}
                        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full object-cover"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/60";
                        }}
                        loading="lazy"
                    />

                    <div>
                        <h3 className="font-semibold text-gray-800 text-base md:text-lg">{testimonial.name}</h3>

                        {/* star rating display */}
                        <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-3 h-3 md:w-4 md:h-4 ${i < rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* testimonial text */}
                <p className="text-gray-600 leading-relaxed mt-4 text-sm md:text-base">
                    Appropriately administrate proactive value with niche markets. Dramatically target market position ideas after high quality best practices.
                </p>
            </motion.div>
        );
    };

    return (
        <div className="w-full overflow-hidden py-1">
            <div className="max-w-7xl mx-auto px-2 md:px-4">
                {/* scrolling container with hover pause functionality */}
                <motion.div
                    className="flex"
                    animate={controls}
                    onHoverStart={() => controls.stop()}
                    onHoverEnd={() => {
                        // restart animation with appropriate speed when hover ends
                        controls.start({
                            x: ["0%", "-100%"],
                            transition: {
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: isMobile ? 8 : isTablet ? 15 : 20,
                                    ease: "linear"
                                }
                            }
                        });
                    }}
                >
                    {/* duplicate testimonials to create seamless loop */}
                    {[...testimonialsToUse, ...testimonialsToUse].map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};