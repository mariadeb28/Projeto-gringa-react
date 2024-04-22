import { useEffect, useRef, useState } from 'react'
import ConvIcon from '../../assets/logo.svg'
import { TopHeader, Container } from './styles'


function Header({ movies, setFilterdMovies }) {

    const [aveValue, setAveValue] = useState({
        runtime: 0,
        budget: 0
    })

    
    const input = useRef()

    function aveMovies(movies) {
        const runtime = movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) / movies.length

        const budget = movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0) / movies.length

        setAveValue({
            runtime,
            budget,

        })


    }

    useEffect(() =>{
        if(movies && movies.length > 0) {
            aveMovies(movies)

        }
        
    }, [movies])



    function inputChange() {
        const newMovies = movies.filter(movie => movie.name.toLowerCase().includes(input.current.value.toLowerCase()))

        aveMovies(newMovies)
        setFilterdMovies(newMovies)

    }

    return (
        <>
            <TopHeader>
                <img src={ConvIcon} alt='conv icon' />
                <p>Senior Front End test</p>
            </TopHeader>
            <Container>
                <h1>Lord of the Rings Movies</h1>
                <div className='box-ave'>
                    <div>
                        <p>Ave. movie runtime: {aveValue.runtime} min</p>
                        <p>Ave. movie budget: ${aveValue.budget}M</p>

                    </div>
                    <input placeholder='Filter movies by name' ref={input} onChange={inputChange} />
                </div>
            </Container>
        </>
    )
}

export default Header