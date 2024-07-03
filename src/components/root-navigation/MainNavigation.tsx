import { Logo, Search, Profile } from "./subComponent/index";

export default function MainNavigation() {
  return (
    <header className="main-navigation">
      <div className="main-navigation__left">
        <Logo />
      </div>

      <div className="main-navigation__right">
        <Search />
        <Profile />
      </div>
    </header>
  );
}
