import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
import Header from "../../Components/Header";
import { Error, ErrorMessage } from "./styles";

function NotFoundPage() {
    const context = useContext(GlobalContext)
    const { erro } = context

    return (
        <>
            <Header />
            <Error>
                <ErrorMessage>{erro}</ErrorMessage>
            </Error>
        </>
    );
}

export default NotFoundPage;