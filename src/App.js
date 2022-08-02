import Content from "./components/Content/Content";

import s from "./App.module.scss";

import "@fontsource/iosevka";
import Menu from "./components/Menu/Menu";
import Carousel from "./components/Carousel/Carousel";
import VignetteEffect from "./components/Carousel/components/VignetteEffect/VignetteEffect";

function App() {
  return (
    <div className={s.App}>
      <Menu />
      <Content />
      <Carousel />
    </div>
  );
}

export default App;
