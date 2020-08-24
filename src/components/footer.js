import React from 'react'
import {css} from '@emotion/core'
import Navigation from './nav'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

const EnlaceHome = styled(Link)`
    color : #fff;
    text-align : center;
    text-decoration : none;
    font-weight : bold;
    font-size : 2rem;
`

const Footer = ({title}) => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer
                css={css`
                    background-color : rgba(44,62,80);
                    padding: 1rem;
                `}
            >
                <div
                    css={css`
                        max-width : 1200px;
                        margin : 0 auto;

                        @media(min-width : 768px){
                            display : flex;
                            align-items : center;
                            justify-content : space-between;
                        }
                    `}
                >

                <Navigation />

                <EnlaceHome
                        to='/'
                    >
                        Hotel Gatsby
                </EnlaceHome>

                </div>
            </footer>

            <p
                css={css`
                    text-align : center;
                    color : #fff;
                    background-color: rgb(33,44,55);
                    margin : 0;
                    padding : 1rem;
                `}
            >
                {title}, todos los derechos reservados {year} &copy;
            </p>
        </>
    )
}

export default Footer