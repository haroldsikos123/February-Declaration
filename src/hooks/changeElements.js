import { useState } from "react";
import confetti from "canvas-confetti";

export const useChangeElements = () => {
    const [index, setIndex] = useState(0);
    const [textP, setTextP] = useState("Vamos, respondeme! ");
    const [image, setImage] = useState("https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif");
    const [countdown, setCountdown] = useState(null);

    const options = [
        "Segura Ari?", "Segurisima noniii?", "Estas completamente segura Ari de mi vida?",
        "No te arrepentiras mi noni?", "Pero si estas segura nonita?", "No hay vuelta atras ehh!! (jiji)",
        "No hay devoluciones ehh", "Miauuuuuuu", "No hay reembolsos", "No hay cambios",
        "No hay nada", "No hay", "Que no hay miau >:3"
    ];

    const handleButtonNo = () => {
        setIndex((prevIndex) => (prevIndex + 1) % options.length);
        setImage("https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif");
        setTextP(options[index]);
    };

    const handleButtonYes = () => {
        setImage("https://i.pinimg.com/originals/e4/9d/7b/e49d7b7e965f09e31b498314b02e3662.gif");
        setTextP("Gracias por aceptar, te quelo muchisiimooo <3");
        confetti();

        let counter = 5;
        setCountdown(counter);

        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    window.location.href = "https://www.ejemplo.com"; // Cambia por tu enlace real
                }
                return prev - 1;
            });
        }, 1000);
    };

    return { handleButtonNo, handleButtonYes, textP, image, countdown };
};
