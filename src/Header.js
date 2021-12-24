import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
import {Link , useHistory} from 'react-router-dom'
import ArrowBackIosIcons from '@material-ui/icons/ArrowBackIos'
import "./Header.css"
const Header = ({backButton}) => {
    const history = useHistory() ;
    return (
        <div className='header'>
            {backButton ?(<IconButton onClick = {()=>history.replace(backButton)}><ArrowBackIosIcons fontSize='large' className='header__icon'/></IconButton>):(<IconButton><PersonIcon fontSize='large' className='header__icon'/></IconButton>) }
            
            <Link to ='/'>
            <img className='header__logo' src = "https://cdn.w600.comps.canstockphoto.com/heart-of-couple-figure-logo-vector-illustration_csp17337520.jpg" alt = "minglee logo"/>
            </Link>
           <Link to ='/chat'>
            <IconButton>
            <ForumIcon fontSize='large' className = "header__icon"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
