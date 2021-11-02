import Footer from "./footer"
import Header from "./header"
import dark from "../themes/dark"
import light from "../themes/light"
import { ThemeContext } from "../context/themeProvider";
import { useContext } from "react";

const Layout = ({ children }) =>{

    const theme = useContext(ThemeContext);

  console.log(theme);

    return(

        <div style={theme.dark ? dark : light}>
            
            
            <Header/>
            {children}
            <button onClick={() =>theme.setDark((dark)=> !dark)}>SetTheme</button>
            <Footer/>
        </div>

    )


}

export default Layout;