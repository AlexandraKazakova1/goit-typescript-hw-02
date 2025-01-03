import React from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button className={s.btn} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;
