import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const cardData = [
  {
    id: 1,
    icon: "https://imgpanda.com/upload/ib/1yIWjyG41o.png",
    title: "Web Development",
    description: "We specialize in building modern, responsive, and high-performance websites tailored to your business needs.",
    link: "/services/web-development"
  },
  {
    id: 2,
    icon: "https://imgpanda.com/upload/ib/Q4tSh2ctkH.png",
    title: "Mobile App Development",
    description: "From concept to deployment, we offer end-to-end mobile app development for both iOS and Android platforms.",
    link: "/services/app-development"
  },
  {
    id: 3,
    icon: "https://imgpanda.com/upload/ib/YQdOwN6IDJ.png",
    title: "UI/UX Design",
    description: "Our team designs intuitive and engaging user interfaces to enhance the overall user experience of your products.",
    link: "/services/ui-ux-design"
  }
];


const Card = () => {
  return (
    <div className='bg-gradient-to-r from-black to-[#05033D]'>
    <section className="creative-cards style-one z-50 ">
      <div className="container">
        <div className="row">
          {cardData.map(card => (
            <div key={card.id} className="card-column">
              <div className="card-details ">
                <div className="card-icons">
                  <img className="light-icon" src={card.icon} alt="icon" />
                </div>
                <h3 className='text-white'><a href={card.link}>{card.title}</a></h3>
                <p className='text-white'>{card.description}</p>
                <div className="read-more-btn">
                  <MdKeyboardDoubleArrowRight className='text-pink-800' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Card;
