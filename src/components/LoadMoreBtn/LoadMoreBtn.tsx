import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;