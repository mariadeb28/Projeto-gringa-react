import { useEffect, useState } from "react"
import api from '../../services/api'
import Header from "../../components/Header"
import { Content, ContainerItems } from './styles'
import Card from '../../components/Card'


function Home() {

    const [movies, setMovies] = useState()
    const [filteredMovies, setFilterdMovies] = useState()




    useEffect(() => {
        async function loadData() {
            const { data: { docs }, } = await api.get('movie')


            setMovies(docs)
            setFilterdMovies(docs)
            console.log(docs)
        }

        loadData()



    }, [])


    return (
        <Content>
            <Header movies={movies} setFilterdMovies={setFilterdMovies} />


            <ContainerItems>
                {filteredMovies && filteredMovies.map((movie) => (
                    <Card movieData={movie} key={movie._id} />

                ))}
            </ContainerItems>

        </Content>
    )
}

export default Home