import * as S from "./Navbar.styles";
import { LuLightbulbOff, LuLightbulb } from "react-icons/lu";
import { useThemeContext } from "../../hooks/useThemeContext";
import { darkTheme, lightTheme } from "../../styles/themes";

const Navbar = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <S.Navbar>
      <S.BrandNavLink to="/home">
        Mini<span>Blog</span>
      </S.BrandNavLink>

      <S.NavList>
        {theme === lightTheme ? (
          <LuLightbulbOff
            size="1.5em"
            color="black"
            onClick={() => setTheme(darkTheme)}
          />
        ) : (
          <LuLightbulb
            size="1.5em"
            color="white"
            onClick={() => setTheme(lightTheme)}
          />
        )}

        <S.StyledNavLink to="/home">Home</S.StyledNavLink>
        <S.StyledNavLink to="/about">About</S.StyledNavLink>
        <S.StyledNavLink to="/login">Login</S.StyledNavLink>
        <S.StyledNavLink to="/register">Register</S.StyledNavLink>
      </S.NavList>
    </S.Navbar>
  );
};

export default Navbar;
