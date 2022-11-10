import SliderCards from "../sliderCards/Index";
import TextAnimated from "../textAnimated/Index";

import video from '../../assets/video/video.mp4';
import Packets from "./Packets";
import Published from "./Published";
import Insta from "./Insta";

function Intro () {
    const arr = [ {"id" : 1}, {"id" : 2}, {"id" : 3}, {"id" : 4}, {"id" : 5}, {"id" : 6} ];
    
    return (
        <>
            <section className="Intro">
                <div className="Intro-wrapper Wrapper">
                    <div className="Intro-frame">
                        <video autoPlay muted loop className="Intro-video">
                            <source src={video} type="video/mp4" />
                            Tu navagador no soporta el elemento <code>video</code>.
                        </video>
                    </div>
                </div>
            </section>

            <TextAnimated text="¡Vamos en camino!"/>
            <SliderCards arr={arr} name="Mas vendidos"/>
            <Packets />
            <Published />
            <Insta />
        </>
    )
}

export default Intro;