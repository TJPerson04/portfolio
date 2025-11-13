interface PopUpProps {
    children: any;
    isOpen: boolean;
    setIsOpen: (e: boolean) => void;
}

const PopUp: React.FC<PopUpProps> = ({
    children,
    isOpen,
    setIsOpen,
}) => {
    const closePopUp = () => {
        setIsOpen(false);
    }

    return (
        <div className="popup">
            {isOpen && (
                <div style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    display: "grid",
                }}>
                    <div className="background"
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            backgroundColor: "#38343b",
                            opacity: "0.5",
                            zIndex: "10",
                        }}
                        onClick={closePopUp}>
                    </div>
                    <div style={{
                        position: "absolute",
                        justifySelf: "center",
                        alignSelf: "center",
                        height: "75%",
                        width: "75%",
                        border: "3px solid #8b76d6",
                        opacity: "1",
                        borderRadius: "20px",
                        zIndex: "11",
                    }}
                        className="flex justify-center"
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopUp;