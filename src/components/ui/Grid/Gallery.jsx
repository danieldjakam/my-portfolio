// Gallery.js
import React, { useState } from 'react';
import me from '../../../assets/images/me.png';
const Gallery = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            name: 'Tab 1',
            images: [
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
            ],
        },
        {
            name: 'Tab 2',
            images: [
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
            ],
        },
        {
            name: 'Tab 3',
            images: [
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
                {
                    src: "image1.jpg",
                    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste "
                },
            ],
        },
    ];

    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState([]);
  

    const openModal = (src, description) => {
      setSelectedImage([src, description]);
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
      setSelectedImage([]);
    };

    return (
        <div className="p-4">
            <div className='flex justify-center space-x-8 mb-6'>
                {tabs.map((tab, index) => (
                <span
                    key={index}
                    onClick={() => handleTabChange(index)}
                    className={` cursor-pointer ${activeTab === index ? 'text-primary' : ''}`}
                >
                    {tab.name}
                </span>
                ))}
            </div>

            <div className="overflow-x-hidden scrollbar-none relative h-64">
                <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${activeTab * 100}%)`,
                }}
                >
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className="min-w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4"
                    >
                        {tab.images.map((img, index) => (
                            <div key={index} className='relative w-full h-[200px] rounded bg-gray-400 dark:bg-gray-700'>
                                <img src={me} alt={img.src} className='w-full h-full rounded'/>
                                <div className='absolute top-0 left-0 w-full h-full rounded text-white
                                                bg-primary opacity-0 hover:opacity-40 cursor-pointer duration-300
                                                ' onClick={() => openModal(img.src, img.description)}>
                                    {img.description}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                </div>
            </div>


            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img src={me} alt="Enlarged" className="max-w-full max-h-screen rounded-lg shadow-lg" />
                        <h3>{selectedImage.description}</h3>
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-3xl font-bold"
                        >
                        &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery;
