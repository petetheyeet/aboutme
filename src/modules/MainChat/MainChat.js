import React from 'react';
import './MainChat.scss';
import eye from '../../../src/assets/eyeseeu.png';
import hassh from '../../../src/assets/hassh.PNG';
import myInbox from '../../../src/assets/myInbox.PNG';
import noTacoBell from '../../../src/assets/noTacoBell.PNG';
import putAPinInIt from '../../../src/assets/putAPinInIt.PNG';
import specialHash from '../../../src/assets/specialHash.PNG';
import uploadDeez from '../../../src/assets/uploadDeez.PNG';
import friends from '../../../src/assets/friends.PNG';
import rULost from '../../../src/assets/rULost.PNG';


const MainChat = () => {


    return(
        <>
            <div className="am-outer">
                <div className="am-titleBar">
                    <div className="am-logoBox">
                        Notcord
                    </div>
                    <div className="am-app">
                        <div className="am-app-inner">
                            <nav className="am-sidebar">
                                <ul role="tree" className="am-sidebarInner">
                                    <div className="am-scroller">
                                        <div className="am-iconBox">
                                            <div className="am-listItem">
                                                <div className="am-pill"></div>
                                                <div className="am-listItemWrapper">
                                                    <span className="am-dot">
                                                        P
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="am-listDividerWrapper">
                                            <div className="am-listDivider"></div>
                                        </div>
                                        <div className="am-servers">
                                            <div className="am-iconBox">
                                                <div className="am-listItem">
                                                    <div className="am-pill"></div>
                                                    <div className="am-listItemWrapper">
                                                        <img className="am-listItemImg" 
                                                        src={eye}
                                                        />
                                                        {/*TODO: need on hover*/}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="am-iconBox">
                                                <div className="am-listItem">
                                                    <div className="am-pill"></div>
                                                    <div className="am-listItemWrapper">
                                                        <span className="am-dot">
                                                            P
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="am-iconBox">
                                                <div className="am-listItem">
                                                    <div className="am-pill"></div>
                                                    <div className="am-listItemWrapper">
                                                        <span className="am-dot">
                                                            P
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </nav>
                            <div className="am-base">
                                <div className="am-notice"></div>
                                <div className="am-content">
                                    <div className="am-channelBar">
                                        <nav className="am-channelControl">
                                            <div className="am-channelHeaderOuter">
                                                <header className="am-channelHeader">
                                                    <div className="am-channelHeaderInner">
                                                        <div className="am-channelGuildIcon">
                                                            {/*TODO*/}
                                                        </div>
                                                        <div className="am-channelHeaderText">
                                                            About Me
                                                        </div>
                                                        <div className="am-channelHeaderButton"></div>
                                                    </div>
                                                </header>
                                            </div>
                                        </nav>
                                        <div className="am-boxDivider"/>
                                    </div>
                                    <div className="am-chat">
                                        <section className="am-upperChatSection">
                                            <div className="am-upperChatInner">
                                                <div className="am-upperChatIconWrapper">
                                                    <span className="am-upperChatHash">
                                                        #
                                                    </span>
                                                </div>
                                                <div className="am-upperChatTitleWrapper">
                                                    <div className="am-channelHeaderText">
                                                        <h1 className="am-channelHeaderH1">AyO</h1>
                                                    </div>
                                                </div>
                                                <div className="am-upperChatToolbar">
                                                    {/* TODO: FIND UR OWN ICONS LAZY */}
                                                    {/* <div className="am-upperChatIconWrapper">
                                                        <img src={specialHash} />
                                                    </div>
                                                    <div className="am-upperChatIconWrapper">
                                                        <img src={noTacoBell} />
                                                    </div>
                                                    <div className="am-upperChatIconWrapper">
                                                        <img src={putAPinInIt} />
                                                    </div>
                                                    <div className="am-upperChatIconWrapper">
                                                        <img src={friends} />
                                                    </div>
                                                    <div className="am-upperChatSearchOuter"></div>
                                                    <div className="am-upperChatIconWrapper">
                                                        <img src={uploadDeez} />
                                                    </div>
                                                    <div className="am-upperChatIconWrapper">
                                                        <img src={myInbox} />
                                                    </div>
                                                    <div className="am-upperChatIconWrapper">
                                                        <img src={rULost} />
                                                    </div> */}
                                                </div>
                                            </div>
                                        </section>
                                        <div className="am-boxDivider"/>
                                        <div className="am-lowerChatSection">
                                            <main className="am-chatContent">
                                                <div className="am-messagesWrapper">
                                                    <div className="am-messagesScroller">
                                                        <div className="am-messagesScrollerContent">
                                                            <ol className="am-messagesScrollerInner">
                                                                <div className="am-messagesChannelInfo">
                                                                    <div className="am-channelInfoIcon">
                                                                        #
                                                                    </div>
                                                                    <h3 className="am-channelInfoHeader">
                                                                        HELLO
                                                                    </h3>
                                                                    <div className="am-channelInfoP">
                                                                        HOW ARE YOU DOING I AM DOING FINE!
                                                                    </div>
                                                                </div>
                                                                <div className="am-messagesSpacer">

                                                                </div>
                                                                <div className="am-dateStamp">
                                                                    <span className="am-dateStampSpan">
                                                                        October 17, 2022
                                                                    </span>
                                                                </div>
                                                                <li className="am-message">

                                                                </li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>
                                            </main>
                                            <div className="am-chatRightSidebar">

                                            </div>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainChat;