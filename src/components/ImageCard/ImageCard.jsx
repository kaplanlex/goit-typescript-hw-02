const ImageCard = ({ src, alt, onClick }) => {
    return (
        <li>
            <img src={src} alt={alt} onClick={onClick} style={{ cursor: "pointer" }} />
        </li>
    );
};

export default ImageCard;
