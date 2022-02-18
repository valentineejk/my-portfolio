import React from 'react'
import prof from '../img/PROF.PNG';

const Hero=() => {
    return (
        <div class="flex flex-row">
            <div class="basis-1/2">
            </div>
            <div class="basis-1/4">
                <img src={prof} alt="profile" />
            </div>
        </div>
    )
}

export default Hero