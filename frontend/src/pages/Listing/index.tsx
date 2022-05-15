import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";
import './styles.css';

function Listing() {

    //forma não recomendada - apenas para teste de requisição 

    axios.get(`${BASE_URL}/movies?size=12&page=0`).then(
        response => {
            console.log(response.data)
        }
    );



    return (

        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        {/* essa classe indica que a partir de telas sm o componente vai ocupar 6 colunas*/}
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        {/* essa classe indica que a partir de telas sm o componente vai ocupar 6 colunas*/}
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        {/* essa classe indica que a partir de telas sm o componente vai ocupar 6 colunas*/}
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        {/* essa classe indica que a partir de telas sm o componente vai ocupar 6 colunas*/}
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        {/* essa classe indica que a partir de telas sm o componente vai ocupar 6 colunas*/}
                        <MovieCard />
                    </div>
                </div>
            </div>


        </>
    );
}
export default Listing;