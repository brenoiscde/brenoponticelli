import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "./SliderContainer.css";
import { useState } from "react";
import { useEffect } from "react";


const SliderContainer = () => {

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch("src/mock/mockData.json")
        .then((response)=> response.json())
        .then((data) => setCards(data))
        .catch((error)=> console.error("ERRO ao carregar os dados", error));
    },[]);


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        arrows:true,   
    };
    
    return(
        <div className="container__slider">
            <Slider {...settings}>
            {cards.map((item) => (
                    <div key={item.id} className="card">
                        <a href=""><img className="image__card" src={item.urlimage} alt={item.title} /></a>
                        <h3 className="name__type">{item.type}</h3>
                        <h2 className="name__card">{item.title}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default SliderContainer;