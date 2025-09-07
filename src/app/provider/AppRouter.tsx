
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "./Routes.ts";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {ROUTES.map((el)=>{
                    return(
                        <Route path={el.path} Component={el.component}/>

                    )
                })}
            </Routes>
        </BrowserRouter>

    );
};

export default AppRouter;