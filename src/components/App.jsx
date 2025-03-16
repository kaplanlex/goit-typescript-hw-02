import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBth/LoadMoreBth";
import ImageModal from "./ImageModal/ImageModal";

const API_KEY = "wT7MmsmXs6oCwUc89bkFXJdoWxWAI_gpc8rpjM2yBHs";

const App = () => {
    const [images, setImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);

    const onSubmit = (values) => {
        setPage(1);
        setImages([]);
        setSearchTerm(values.search);
    };

    useEffect(() => {
        if (!searchTerm) return;

        const fetchImages = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await axios.get(
                    `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&client_id=${API_KEY}`
                );
                setImages((prevImages) => [
                    ...prevImages,
                    ...response.data.results,
                ]);
            } catch (error) {
                setError("Error fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [searchTerm, page]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <SearchBar onSubmit={onSubmit} />
            {error && <ErrorMessage errormessage={error} />}
            <ImageGallery items={images} onImageClick={openModal} />
            {loading && <Loader isLoading={loading} />}
            {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
            {selectedImage && (
                <ImageModal selectedImage={selectedImage} closeModal={closeModal} />
            )}
        </>
    );
};

export default App;
