import React, { useEffect, useState } from 'react';

interface TypewriterEffectProps {
    text: string;
    speed?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, speed = 150 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timer = setInterval(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearInterval(timer);
        } else {
            const resetTimer = setTimeout(() => {
                setDisplayedText('');
                setIndex(0);
            }, speed + 20 * text.length); // Delay before restarting
            return () => clearTimeout(resetTimer);
        }
    }, [index, text, speed]);

    return (
        <div className="text-3xl text-white tracking-wide leading-loose font-mono">
            {displayedText}
            {displayedText.length < text.length && <span className="animate-blink">|</span>}
        </div>
    );
};

export default TypewriterEffect;
