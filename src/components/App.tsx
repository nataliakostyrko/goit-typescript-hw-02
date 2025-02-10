import { useEffect, useState } from "react";
import css from "./App.module.css";
import SearchBar from "./SearchBar/SearchBar";
import fetchImages from "../services/api";
import ErrorMessage  from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";

type ImageData = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type ModalState = {
  isOpen: boolean;
  modalData: string | null;
};

type DataResponse = {
  results: ImageData[];
  total_pages: number;
};

export default function App() {
    const [query, setQuery] = useState<string>("");
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [modal, setModal] = useState<ModalState>({
        isOpen: false,
        modalData: null,
    });
    


    useEffect(() => {
        if (!query) return;

        const getArticles = async () => {
            try {
                setLoading(true);
                setError(false);
                
                const response:DataResponse = await fetchImages(query, page);
                setImages((prev) =>
                    page === 1 ? response.results : [...prev, ...response.results]
                );
                setTotal(response.total_pages);
            

            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        getArticles();
       
    }, [query, page]);
    
    const handleSubmit = (query: string): void => {
        setQuery(query);
        setImages([]);
        setPage(1);
  };

    const OpenModal = (url:string): void => {
    setModal({ isOpen: true, modalData: url });
  }

   const CloseModal = (): void => {
    setModal({ isOpen: false, modalData: null });
  }




    return (
           <div className={css.container}>
            <SearchBar setQuery={handleSubmit} />
            {loading && <Loader />}
            {error && <ErrorMessage />}
             <ImageGallery images={images} OpenModal={OpenModal} />
            {total > page && (
                <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
            )}
              <ImageModal
                CloseModal={CloseModal}
                modalData={modal.modalData}
                isOpen={modal.isOpen}
      />
     </div>
    );
};


