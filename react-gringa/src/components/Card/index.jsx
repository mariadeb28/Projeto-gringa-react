
import {Content} from './styles'
import MovieIcon from '../../assets/moviefita.svg'
import AwardIcon from '../../assets/oscar.svg'



function Card({movieData}) { 


    return (
        <Content>

            <div className='iconlogo'>
                <img src={MovieIcon} alt='moviefit'/>
            </div>


            <div className='big-box'>

            <div className='wrapper-items'>
                <h3>{movieData.name}</h3>
                <p>{movieData.runtimeInMinutes} min</p>
            </div>

            <div className='awards'>
                <img src={AwardIcon} alt='oscar' />
                <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>

            </div>

            <div className='wrapper-budget'>
                
                <div>
                    <h4>Budget</h4>
                    <p>${movieData.budgetInMillions}</p>

                </div>

                <div>
                    <h4>Revenue</h4>
                    <p>${movieData.boxOfficeRevenueInMillions}</p>

                    </div>

                </div>

            </div>



        
        </Content>
    )
}

export default Card