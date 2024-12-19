import React from "react";

const CardComponent = () => {
  return (
    <main className="bg-[#141819] min-h-screen grid place-content-center p-6">
      <div className="container grid justify-center gap-x-10 gap-y-6 md:grid-cols-1 lg:grid-cols-3">
        <a className="card group relative overflow-hidden max-w-[240px] p-5 text-white rounded-2xl grid place-items-center aspect-square">
          <img alt="Owl" height="40" src="https://assets.codepen.io/221808/owl.svg" width="40" />
          <h2 className="font-comfortaa font-bold text-xl">Owl</h2>
          <p className="text-xs">
            A nocturnal bird that flies silently. Known for its large eyes, sharp claws, and as a symbol of wisdom.
          </p>
          <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-tl from-[#584827] via-[#c7a03c] to-[#f9de90] animate-gradient"></div>
        </a>
        <a className="card group relative overflow-hidden max-w-[240px] p-5 text-white rounded-2xl grid place-items-center aspect-square">
          <img alt="Rabbit" height="40" src="https://assets.codepen.io/221808/rabbit.svg" width="40" />
          <h2 className="font-comfortaa font-bold text-xl">Rabbit</h2>
          <p className="text-xs">
            A herbivorous animal with long ears and a hopping motion. Loved for its cute appearance.
          </p>
          <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-tl from-[#584827] via-[#c7a03c] to-[#f9de90] animate-gradient"></div>
        </a>
        <a className="card group relative overflow-hidden max-w-[240px] p-5 text-white rounded-2xl grid place-items-center aspect-square">
          <img alt="Raven" height="40" src="https://assets.codepen.io/221808/raven.svg" width="40" />
          <h2 className="font-comfortaa font-bold text-xl">Raven</h2>
          <p className="text-xs">
            A smart bird with black feathers. Often depicted in myths and stories as a symbol of mystery.
          </p>
          <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-tl from-[#584827] via-[#c7a03c] to-[#f9de90] animate-gradient"></div>
        </a>
      </div>
    </main>
  );
};

export default CardComponent;
