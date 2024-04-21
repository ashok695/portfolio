import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import "./Scroll.css";

const Scroll = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <div>
                <h1><code>useScroll</code> with spring smoothing</h1>
                <div className='mt-[1200px]'>
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Facilis natus magnam quas ipsum sunt molestiae voluptas,
                        porro, non quaerat quam atque consectetur ut iure laborum,
                        inventore ad laudantium vel impedit repudiandae provident dicta
                        deleniti architecto doloribus adipisci. Aut excepturi ipsum quos
                        ipsa a eveniet non beatae culpa ratione, maxime voluptatibus
                        rerum voluptas error sit. Quae nulla porro tenetur, tempora reiciendis,
                        soluta quos obcaecati aut ut fugiat neque nesciunt suscipit minima cupiditate.
                        Debitis ut velit voluptatum repellat a dolorem sunt, eligendi reiciendis aut
                        laudantium nulla quam nemo itaque nostrum eaque dolorum perspiciatis libero?
                        Reprehenderit earum odit iure et magnam, deleniti voluptatem.</p>
                </div>
            </div>
        </>
    )
}

export default Scroll