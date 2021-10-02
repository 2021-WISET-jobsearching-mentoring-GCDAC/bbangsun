import React from 'react';
import { styles } from 'styled-system';

export default function Button({onClick, title}){
    return(
        <button style={styles.button} onClick={onClick}>
            {title}
        </button>
    )
}

const styles={
    button:{
        backgroundColor:'#006bfc'

    }
}