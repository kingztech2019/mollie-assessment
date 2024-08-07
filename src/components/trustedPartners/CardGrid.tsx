import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, subtitle }) => {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white group">
        <div className="relative">
          <img className="w-full h-full object-cover" src={imageSrc} alt={title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-black text-xl mb-1">{title}</h3>
              {subtitle && <p className="text-sm">{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  };

const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <Card
        imageSrc="https://placehold.co/400x400/D6C190/FFFFFF/png"
        title="Crisp"
        subtitle="What a good product, it helps me"
      />
      <Card
        imageSrc="https://placehold.co/400x400/0000FF/FFFFFF/png"
        title="Dr. Blend"
        subtitle="What a good product, it helps me"
      />
       <Card
        imageSrc="https://placehold.co/400x400/EC4899/FFFFFF/png"
        title="Dr. Blend"
        subtitle="I love the solution"
      />
    </div>
  );
};

export default CardGrid;