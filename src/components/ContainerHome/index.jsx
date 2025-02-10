import "./ContainerHome.css";

const ContainerHome = () =>{
    return(
        <section className="container__home">
            <div className="container__home_text">
                <h3>Hi I am</h3>
                <h2 className="profession">Frontend Developer</h2>
                <h1>Breno Souza<br/>Ponticelli</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
                lectus netus in.
                Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                <a href="#">Hire Me</a>
            </div>
            <div className="container__home_photo">
                <img className="photo" src="src/assets/avatar-test.png" alt="my-photo" />
                <div className="social-media">
                    <a href="https://instagram.com/breno_sp7"><img src="src/assets/vector-instagram.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/breno-souza-114732243/"><img src="src/assets/vector-linkedin.png" alt="" /></a>
                    <a href="https://github.com/brenoiscde"><img className="icon-github" src="src/assets/github.svg" alt="" /></a>
                </div>
            </div>
        </section>
    );
};
export default ContainerHome;