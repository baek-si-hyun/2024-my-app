import { useEffect } from "react";
import Landing from "../components/Landing/Landing";
import Projects from "../components/Projects/Projects";
import SlidingImages from "../components/SlidingImages/slidingImages";

export default function Main() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    return (
        <main>
            <Landing />
            <Projects />
            <SlidingImages />
        </main>
    );
}
