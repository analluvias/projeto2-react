import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }> </Route>
            </Routes>
        </BrowserRouter>


    );
}

export default AppRoutes;

/*
Estamos criando um navegador entre rotas acima, o que nos vai permitir ter mais de uma página
na nossa aplicação react

<Route path="/" element={ <Home/> }> </Route>
-> Na raíz eu vou mostrar o meu código HOME


<Route path="/watch" element={ <Watch/> }> </Route>
-> no meu código /watch eu vou mostrar o meu codigo WATCH

ambos os códigos estão criados dentro da pasta >>>pages<<<

*/