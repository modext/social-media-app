import React from 'react';
import './style.css';
import { SignInBtn } from '../../components'

function CreatePost() {
    return (
        <div className='createPost'>

            <SignInBtn />
            <p className='pst'>  to Post and comment</p>
            
        </div>
    )
}

export default CreatePost;

