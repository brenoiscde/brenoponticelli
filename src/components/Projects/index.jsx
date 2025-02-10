import SliderContainer from "../SliderContainer";
import "./Projects.css";


const Projects = () => {
    return(
        <section className="container__projects">
            <h2 className="title-container" >My Projects</h2>
            <p className="description-projects">Lorem ipsum dolor sit amet consectetur.
            Mollis erat duis aliquam mauris est risus lectus.
            Phasellus consequat urna tellus</p>
        <SliderContainer/>
        </section>
    );
};

export default Projects;