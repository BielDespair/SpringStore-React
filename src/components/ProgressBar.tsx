import { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router";



function ProgressBar() {
    const [visible, setVisible] = useState<Boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const navigation = useNavigation();


    useEffect(() => {
        console.log(navigation.state)
        let interval: number;
        let finalTimeout: number;

        if (navigation.state === "loading") {
            setVisible(true);
            setProgress(50);
            interval = window.setInterval(() => {
                setProgress((p) => {
                    if (p < 90) {
                        return p + 10;
                    }
                    clearInterval(interval);
                    setProgress(100);

                    finalTimeout = window.setTimeout(() => {
                        setVisible(false);
                        setProgress(0);
                    }, 300); // 300ms de visualização final

                    return 90; // Mantém em 90% enquanto espera o timeout
                });
            }, 10); // 🚀 **Acelerado para 100ms** para ser mais rápido
        }

        setVisible(false);
        setProgress(0);
        return () => {
            clearInterval(interval);
            clearTimeout(finalTimeout); // Limpa o timeout final
        };


    }, [navigation.state])

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: `${progress}%`,
                height: "3px",
                backgroundColor: "#007bff",
                transition: "width 0.2s ease-out",
                zIndex: 9999,
            }}
        />
    );
}


export default ProgressBar;