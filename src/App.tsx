import { useEffect, useState } from "react";
import "./App.css";
import { fetchArticles } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import { Image } from "./types";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalData, setModalData] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;
    const loadImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { results, total_pages } = await fetchArticles(query, page);
        setImages((prevImages) => [...prevImages, ...results]);
        setTotalPages(total_pages);
      } catch {
        setError("Error fetching images.");
      } finally {
        setIsLoading(false);
      }
    };
    loadImages();
  }, [query, page]);

  const searchSubmit = (newQuery: string) => {
    if (query !== newQuery) {
      setQuery(newQuery);
      setPage(1);
      setImages([]);
    }
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (largeImageURL: string) => {
    setModalData(largeImageURL);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={searchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {page < totalPages && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalData && (
        <ImageModal
          imageUrl={modalData}
          onClose={closeModal}
          isOpen={!!modalData}
        />
      )}
    </div>
  );
};

export default App;
