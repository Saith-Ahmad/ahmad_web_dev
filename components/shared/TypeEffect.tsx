'use client'
import { roles } from '@/constants';
import React, { useEffect, useState } from 'react'

function TypeEffect() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const targetText = roles[roleIndex];

    useEffect(() => {
        let currentText = "";
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < targetText.length) {
                currentText += targetText[currentIndex];
                setTypedText(currentText);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setTypedText("");
                    setRoleIndex((roleIndex + 1) % roles.length);
                }, 1000); // Delay before clearing and changing text (in milliseconds)
            }
        }, 180); // Adjust typing speed here (in milliseconds)

        return () => {
            clearInterval(typingInterval);
        };
    }, [roleIndex]);
    return (
        <>
            <h2 className="text-3xl lg:text-6xl text-center min-h-[50px]  lg:min-h-[70px] font-semibold bg-gradient-to-r from-accent_purple via-purple-800 to-accent_purple bg-clip-text text-transparent dark:from-d_text_purple dark:via-purple-300 dark:to-bg_purple_light">
                {typedText}
            </h2>
        </>
    )
}

export default TypeEffect