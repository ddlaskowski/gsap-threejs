import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    
    
    useGSAP(() => {
        gsap.fromTo(sectionRef.current, 
            {
                opacity:0,
            },
            {
                opacity: 1, duration: 1.4
            })
            
        const projects =[project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((project, index) => {
            gsap.fromTo(
                project,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1, 
                    duration: 1,
                    delay: 1 * (index + 1),
                    scrollTrigger: {
                        trigger: project,
                        start: 'top bottom-=100'
                    }
                }
            )
        })

    }, [])

    return ( 
        <div id='work' ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src='/images/project1.png' alt="Ryde" />
                        </div>
                        <div className="text-content">
                            <h2>On-Demand Rides Made simple with a powerful, user-friendly app called ryde</h2>
                            <p className="text-white-50 md:text-xl">
                                An app build with React Native, Expo & TailwindCSS for fast, user-friendly experience.
                            </p>
                        </div>
                    </div>
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src='/images/project2.png' alt='Library Management Platform' />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src='/images/project3.png' alt='YC Directory' />
                            </div>
                            <h2>YC Directory - A startup Showcase App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ShowcaseSection;