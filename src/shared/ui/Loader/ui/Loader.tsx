import style from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={style.Loader}>
      <h1 className={style.title}>Loading</h1>
      <div className={style.rainbow_marker_loader}></div>
    </div>
  );
};

export default Loader;
