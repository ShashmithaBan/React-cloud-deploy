import React from 'react';
import Dog1 from '../../assets/images/Dog/image 3.png';
import Dog2 from '../../assets/images/Dog/image 2.png';
import Dog3 from '../../assets/images/Dog/image 1.png';
import KnowledgeCards from '../Custom Cards/KnowledgeCards';

const details = [
    {
        knowledgeType: 'Pet Knowledge',
        title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
        description: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.',
        src: Dog1,
    },
    {
        knowledgeType: 'Pet Knowledge',
        title: 'Dog Diet You Need To Know',
        description: `Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.`,
        src: Dog2,
    },
    {
        knowledgeType: 'Pet Knowledge',
        title: 'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
        description: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
        src: Dog3,
    },
];

const Knowledge = () => {
    return (
        <>
            <div className='md:mx-44 my-16 mx-5'>
                <div className='flex justify-between'>
                    <div>
                        <h3>You already know?</h3>
                        <h1 className='text-2xl font-semibold text-secondary'>Useful Pet Knowledge</h1>
                    </div>
                    <div>
                        <button className='hidden md:flex border border-secondary px-8 py-2 rounded-full flex items-center space-x-2'>
                            <span>View more</span>
                            <span>&gt;</span>
                        </button>
                    </div>
                </div>

                <div className='pet-cards grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8'>
                    {details.map((item, index) => (
                        <KnowledgeCards
                            key={index} // Use index as key (or better, use a unique ID if available)
                            knowledgeType={item.knowledgeType}
                            title={item.title}
                            description={item.description}
                            image={item.src} // Pass the image source as a prop
                        />
                    ))}
                </div>

                <button className='md:hidden border border-secondary w-full py-3 justify-center rounded-full flex items-center space-x-2'>
                    <span>View more</span>
                    <span>&gt;</span>
                </button>
            </div>
        </>
    );
};

export default Knowledge;