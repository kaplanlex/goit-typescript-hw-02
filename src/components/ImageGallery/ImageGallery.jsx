import styles from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
    return (
        <ul className={styles.gallery}>
            {items.map((item) => (
                <li
                    key={item.id}
                    className={styles.galleryItem}
                    onClick={() => onImageClick(item)}
                >
                    <img
                        src={item.urls.small}
                        alt={item.alt_description || "Image"}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;
