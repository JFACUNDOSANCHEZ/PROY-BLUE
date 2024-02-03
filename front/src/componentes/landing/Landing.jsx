import { useEffect, useState } from 'react';
import styles from './Landing.module.css';
import Login from '../login/Login';
import { Link } from 'react-router-dom';

import { handleClose, handleLogout, handleNewReview } from './functions/functions';
import { useDispatch, useSelector } from 'react-redux';
// import { getReviews, nextPageCommentAction, prevPageCommentaction } from '../../redux/actions';


const Landing = () => {
    const [inputValue, setInputValue] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [debounceTimeout, setDebounceTimeout] = useState(null);



    const dispatch = useDispatch();
    // const comments = useSelector( (state) => state.comment.reviews );
    // const paginate = useSelector( (state) => state.comment.paginado );


    // useEffect(()=>{
    //     dispatch( getReviews( paginate.pageActual ) );
    // }, [ paginate.pageActual ]);

    // const handleChangePage = ( event ) => {
    //     if (debounceTimeout) {
    //         // Si hay un timeout activo, cancelarlo
    //         clearTimeout(debounceTimeout);
    //     }

    //     if( event.target.name === 'next' && paginate.pageActual < paginate.totalPages ){
    //         // dispatch( nextPageCommentAction );
    //         const timeout = setTimeout(() => {
    //             dispatch(nextPageCommentAction);
    //         }, 300);

    //         setDebounceTimeout(timeout);
    //     }
    //     if( event.target.name === 'back' && paginate.pageActual > 1 ){
    //         // dispatch( prevPageCommentaction );
    //         const timeout = setTimeout(() => {
    //             dispatch(prevPageCommentaction);
    //         }, 300);

    //         setDebounceTimeout(timeout);
    //     }
    // }

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        // document.getElementById('searchInput').style.color = value ? 'white' : '';
    };

    const handleInputFocus = () => {
        setIsSearchFocused(true);
    };

    const handleInputBlur = () => {
        setIsSearchFocused(false);
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
    
            <div className={styles.landingContainer} >
           
                <div className={styles.contentContainer}>
                    <div className={styles.searchBar}>

                        <div className={styles.searchHeader}>
                           
                        <Login></Login>
                        
                        </div>
                 
                          
                            <div>
                               
                            </div>
                           
   
                           
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
