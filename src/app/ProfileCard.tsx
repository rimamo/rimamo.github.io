'use client'

import {FaHeart} from 'react-icons/fa';
import {useEffect, useState} from "react";

export default function ProfileCard() {

    const phrases = [
        "I ❤️ coding",
        "I ❤️ learning new technologies",
        "I ❤️ solving problems",
        "I ❤️ building things",
        "I ❤️ sharing knowledge"
    ];

    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
        }, 3000); // Cambiar la frase cada 3 segundos

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="flex flex-col items-center justify-center p-6 rounded-lg max-w-sm mx-auto">
            <div className="mb-4">
                <img
                    src="/images/ricardo_martinez_montes_2024.jpg"
                    alt="Ricardo Martinez Montes"
                    className="w-64 h-64 rounded-full mx-auto"
                />
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-900 ">Ricardo Martinez Montes</h1>
                <p className="text-gray-700">
                    {phrases[currentPhrase].split('❤️')[0]}
                    <FaHeart className="inline text-red-500 mx-1"/>
                    {phrases[currentPhrase].split('❤️')[1]}
                </p>
            </div>
        </div>
    );
}
