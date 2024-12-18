import React from "react";

const cardData = {
  description: "Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas pulvinar.",
  backgroundImage: "https://source.unsplash.com/600x900/?nature",
  category: "Thought Leadership",
  heading: "Web Development Lorem Ipsum Sit Amet Consectetur Dipisi?",
  date: "October 15, 2020",
  author: {
    name: "Oz Coruhlu",
    role: "Director of UI/UX",
    image: "https://assets.codepen.io/460692/internal/avatars/users/default.png"
  }
};

const Card = () => {
  return (
    <div className="relative container mx-auto mt-12">
    <div className="w-1/4 relative py-10">
      <div className="wrapper mx-auto max-w-6xl">
       
      
        <div className="w-1/4 bg-gradient-to-t from-yellow-500 via-yellow-500/50 to-transparent group relative rounded-[20px] overflow-hidden shadow-lg transition-all duration-[500ms] ease-[cubic-bezier(0.19,1,0.22,1)] min-h-[450px] md:min-h-[350px] sm:min-h-[300px]">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[500ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
            style={{ backgroundImage: `url(${cardData.backgroundImage})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></div>

          {/* Content */}
          <div className="relative z-10 p-6">
            <small className="block uppercase text-gray-800/70 tracking-widest font-semibold mb-2">
              {cardData.category}
            </small>
            <h2 className="text-2xl font-extrabold text-gray-900 group-hover:mt-6 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]">
              {cardData.heading}
            </h2>
            <small className="block text-gray-600 mt-4">
              <i className="far fa-clock"></i> {cardData.date}
            </small>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 w-full bg-none border-t-0 z-10 p-6 flex items-center gap-4">
            <img
              className="w-12 h-12 border-[3px] border-white/30 rounded-full"
              src={cardData.author.image}
              alt={cardData.author.name}
            />
            <div>
              <h6 className="text-lg font-bold text-gray-800">{cardData.author.name}</h6>
              <small className="text-gray-600">{cardData.author.role}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
