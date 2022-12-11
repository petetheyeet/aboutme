import React from 'react';
import './AnimeCard.scss';
import peter from './peter.gif';

const AnimeCard = () => {



    return(
        <>
            <div className="acOuter">
                <div className="acRibbonContainer"></div>
                <div className="acGridContainer">
                    <div className="acGrid">
                        <div className="acCharNameContainer">
                            <span className="acCharNameSpan">
                                Peter
                            </span>
                        </div>
                        <div className="acDescriptionContainer">
                            Grayson Underground
                            <span> </span>   
                            <img className="emoji" 
                            src="https://cdn.discordapp.com/emojis/452470164529872899.webp?size=44&quality=lossless" 
                            />
                            <br/>
                            <em>Animanga roulette </em>
                            · 
                            <strong> 982</strong>
                            <img className="emoji" 
                            src="https://cdn.discordapp.com/emojis/469835869059153940.webp?size=44&quality=lossless" 
                            />
                            Claim Rank: #420
                            <br/>
                            Like Rank: #69
                            <br />
                            Never Trolled Once (+4)
                        </div>
                        <div className="acImageContainer">
                            <img
                            src={peter} 
                            />
                        </div>
                        <div className="acFooter">
                            <img
                                src="https://images-ext-2.discordapp.net/external/MAkDd2JQhErkpBKde3GrwypdoDD5X4u0wWeC2Ck3UP4/https/cdn.discordapp.com/avatars/147696080488759296/a_821969f04b51244372856d67b1b2d848.webp" 
                            />
                            <span className="acFooterText">
                                Belongs to ascii ~~ 70/72
                            </span>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    );

};

export default AnimeCard;