import style from "./SmallLoader.module.scss";

const SmallLoader = () => {
  return (
    <div className={style.loader}>
      <h3>Загрузка...</h3>
    </div>
  );
};

export default SmallLoader;
