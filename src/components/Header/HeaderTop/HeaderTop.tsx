import "./HeaderTop.scss";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <span className="header-top-lang text flex-1">UA</span>
      <p className="text flex-none">Цветочный магазин &quot;Clumba&quot;</p>
      <div className="header-top-buttons flex flex-1 justify-end gap-x-3 items-center">
        <span className="text" role="button">
          Создать аккаунт
        </span>
        <span className="header-top-divider"></span>
        <span className="text" role="button">
          Войти
        </span>
      </div>
    </div>
  );
};

export default HeaderTop;
