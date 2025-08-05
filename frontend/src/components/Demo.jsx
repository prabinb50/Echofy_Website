import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews({ testimonials = [] }) {
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

    const testimonialsToUse = testimonials.length > 0 ? testimonials : defaultTestimonials;

    const controls = useAnimationControls();

    // set animation based on screen size
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        controls.start({
            x: ["0%", "-100%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: isMobile ? 10 : 20,
                    ease: "linear"
                }
            }
        });
    }, [controls]);

    // review card ui 
    const TestimonialCard = ({ testimonial, index }) => {
        const rating = 3 + (index % 3); // simulate varying rating between 3 and 5

        return (
            <motion.div
                className="min-w-[300px] md:min-w-[350px] p-5 bg-white rounded-xl mx-4 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.02 }}
            >
                {/* profile section */}
                <div className="flex items-center gap-3">
                    <img
                        src={testimonial.profilePicture}
                        alt={`Profile picture of ${testimonial.name}`}
                        className="w-[60px] h-[60px] rounded-full object-cover"
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/60";
                        }}
                        loading="lazy"
                    />

                    <div>
                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>

                        <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* testimonial text */}
                <p className="text-gray-600 leading-relaxed mt-5">
                    Appropriately administrate proactive value with niche markets. Dramatically target market position ideas after high quality best practices.
                </p>
            </motion.div>
        );
    };

    // main return
    return (
        <div className="w-full overflow-hidden py-1">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="flex"
                    animate={controls}
                    onHoverStart={() => controls.stop()}
                    onHoverEnd={() => {
                        const isMobile = window.innerWidth < 768;
                        controls.start({
                            x: ["0%", "-100%"],
                            transition: {
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: isMobile ? 10 : 20,
                                    ease: "linear"
                                }
                            }
                        });
                    }}
                >
                    {[...testimonialsToUse, ...testimonialsToUse].map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} index={index} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

