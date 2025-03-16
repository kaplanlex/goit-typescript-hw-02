import React, { useEffect, useState } from "react";

import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBth/LoadMoreBth";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";

const API_KEY = "wT7MmsmXs6oCwUc89bkFXJdoWxWAI_gpc8rpjM2yBHs";

interface Image {
  id: string;
  urls: { small: string; regular: string };
  alt_description?: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const onSubmit = (values: { search: string }) => {
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
        const response = await axios.get<{ results: Image[] }>(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${page}&client_id=${API_KEY}`
        );
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (error) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchTerm, page]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage errorMessage={error} />}
      <ImageGallery items={images} onImageClick={setSelectedImage} />
      {loading && <Loader isLoading={loading} />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          closeModal={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default App;
