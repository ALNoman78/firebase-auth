import PropTypes from 'prop-types'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}

Main.propTypes = {}

export default Main