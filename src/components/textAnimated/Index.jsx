function TextAnimated ( props ) {
    const { text } = props;
    return (
        <>
            <div className="Animated Section">
                <div className="Animated-wrapper Wrapper">
                    <div className="Animated-track">
                        <div className="Animated-item">
                            {text}
                        </div>
                        <div className="Animated-item">
                            {text}
                        </div>
                        <div className="Animated-item">
                            {text}
                        </div>
                        <div className="Animated-item">
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextAnimated;