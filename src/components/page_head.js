import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import axios from 'axios';

export default class page_head extends Component {
    render() {
        return (
            <div id="page-container">
                <div id="sidebar-alt">
                    <div id="sidebar-alt-scroll">
                        <div className="sidebar-content">
                            <a href="page_ready_chat.php" className="sidebar-title">
                                <i className="gi gi-comments pull-right"></i> <strong>Chat</strong>UI
                            </a>
                            <ul className="chat-users clearfix">
                                <li>
                                    <a href="javascript:void(0)" className="chat-user-online">
                                        <span></span>
                                        <img src="<?php echo($prefix); ?>img/placeholders/avatars/avatar12.jpg"
                                             alt="avatar" className="img-circle"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="chat-user-online">
                                        <span></span>
                                        <img src="<?php echo($prefix); ?>img/placeholders/avatars/avatar15.jpg"
                                             alt="avatar" className="img-circle"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="chat-user-online">
                                        <span></span>
                                        <img src="<?php echo($prefix); ?>img/placeholders/avatars/avatar10.jpg"
                                             alt="avatar" className="img-circle"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="chat-user-online">
                                        <span></span>
                                        <img src="<?php echo($prefix); ?>img/placeholders/avatars/avatar4.jpg"
                                             alt="avatar" className="img-circle"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="chat-user-away">
                                        <span></span>
                                        <img src="<?php echo($prefix); ?>img/placeholders/avatars/avatar7.jpg"
                                             alt="avatar" className="img-circle"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <span></span>
                                        <img src="<?php echo($prefix); ?>img/placeholders/avatars/avatar5.jpg" alt="avatar" class="img-circle"/>
                                    </a>
                                </li>
                            </ul>
                            <div className="chat-talk display-none">

                                <div className="chat-talk-info sidebar-section">
                                    <button id="chat-talk-close-btn" className="btn btn-xs btn-default pull-right">
                                        <i className="fa fa-times"></i>
                                    </button>
                                    <img src="<?php echo($prefix); ?>img/placeholders/avatars/avatar5.jpg" alt="avatar"
                                         className="img-circle pull-left"/>
                                        <strong>John</strong> Doe
                                </div>
                                <ul className="chat-talk-messages">
                                    <li className="text-center">
                                        <small>Yesterday, 18:35</small>
                                    </li>
                                    <li className="chat-talk-msg animation-slideRight">Hey admin?</li>
                                    <li className="chat-talk-msg animation-slideRight">How are you?</li>
                                    <li className="text-center">
                                        <small>Today, 7:10</small>
                                    </li>
                                    <li className="chat-talk-msg chat-talk-msg-highlight themed-border animation-slideLeft">I'm
                                        fine, thanks!
                                    </li>
                                </ul>
                                <form action="<?php echo($prefix); ?>index.php" method="post" id="sidebar-chat-form"
                                      className="chat-form">
                                    <input type="text" id="sidebar-chat-message" name="sidebar-chat-message"
                                           className="form-control form-control-borderless"
                                           placeholder="Type a message.." />
                                </form>
                            </div>
                            <a href="javascript:void(0)" className="sidebar-title">
                                <i className="fa fa-globe pull-right"></i>
                                <strong>Activity</strong>UI
                            </a>
                            <div className="sidebar-section">
                                <div className="alert alert-danger alert-alt">
                                    <small>just now</small>
                                    <br>
                                        <i className="fa fa-thumbs-up fa-fw"></i>
                                        Upgraded to Pro plan</br>
                                </div>
                                <div className="alert alert-info alert-alt">
                                    <small>2 hours ago</small>
                                    <br>
                                        <i className="gi gi-coins fa-fw"></i>
                                        You had a new sale!</br>
                                </div>
                                <div className="alert alert-success alert-alt">
                                    <small>3 hours ago</small>
                                    <br>
                                        <i className="fa fa-plus fa-fw"></i>
                                        <a href="page_ready_user_profile.php">
                                            <strong>John Doe</strong>
                                    </a> would like to
                                        become friends!</br>
                                        <a href="javascript:void(0)" className="btn btn-xs btn-primary">
                                            <i className="fa fa-check"></i>
                                            Accept
                                        </a>
                                        <a href="javascript:void(0)" className="btn btn-xs btn-default">
                                            <i className="fa fa-times">
                                            </i>
                                            Ignore
                                        </a>
                                </div>
                                <div className="alert alert-warning alert-alt">
                                    <small>2 days ago</small>
                                    <br>
                                        Running low on space<br><strong>18GB in use</strong> 2GB left</br>
                                        <a href="<?php echo($prefix); ?>page_ready_pricing_tables.php"
                                           className="btn btn-xs btn-primary">
                                            <i className="fa fa-arrow-up"></i>
                                            Upgrade Plan
                                        </a></br>
                                </div>
                            </div>
                            <a href="page_ready_inbox.php" className="sidebar-title">
                                <i className="fa fa-envelope pull-right"></i> <strong>Messages</strong>UI (5)
                            </a>
                            <div className="sidebar-section">
                                <div className="alert alert-alt">
                                    Debra Stanley
                                    <small className="pull-right">just now</small>
                                    <br>
                                        <a href="<?php echo($prefix); ?>page_ready_inbox_message.php">
                                            <strong>New Follower</strong>
                                        </a></br>
                                </div>
                                <div className="alert alert-alt">
                                    Sarah Cole
                                    <small className="pull-right">2 min ago</small>
                                    <br>
                                        <a href="<?php echo($prefix); ?>page_ready_inbox_message.php">
                                            <strong>Your subscription was updated
                                            </strong>
                                        </a></br>
                                </div>
                                <div className="alert alert-alt">
                                    Bryan Porter
                                    <small className="pull-right">10 min ago</small>
                                    <br>
                                        <a href="<?php echo($prefix); ?>page_ready_inbox_message.php">
                                            <strong>A great opportunity
                                            </strong>
                                        </a></br>
                                </div>
                                <div class="alert alert-alt">
                                    Jose Duncan<small class="pull-right">30 min ago</small><br>
                                    <a href="<?php echo($prefix); ?>page_ready_inbox_message.php">
                                        <strong>Account Activation</strong>
                                    </a></br>
                                </div>
                                <div class="alert alert-alt">
                                    Henry Ellis<small class="pull-right">40 min ago</small><br>
                                    <a href="<?php echo($prefix); ?>page_ready_inbox_message.php">
                                        <strong>You reached 10.000 Followers!</strong>
                                    </a></br>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div id="sidebar">

                    <div id="sidebar-scroll">

                        <div className="sidebar-content">

                            <a href="#" className="sidebar-brand">

                            </a>

                            <div className="sidebar-section sidebar-user clearfix sidebar-nav-mini-hide">
                                <div className="sidebar-user-avatar">
                                    <a href="<?php echo($prefix); ?>page_ready_user_profile.php">
                                    </a>
                                </div>
                                <div class="sidebar-user-name">
                                </div>
                                <div class="sidebar-user-links">
                                    <a href="<?php echo($prefix); ?>page_ready_user_profile.php" data-toggle="tooltip" data-placement="bottom" title="Profile"><i class="gi gi-user"></i></a>
                                    <a href="<?php echo($prefix); ?>page_ready_inbox.php" data-toggle="tooltip" data-placement="bottom" title="Messages"><i class="gi gi-envelope"></i></a>

                                    <a href="javascript:void(0)" class="enable-tooltip" data-placement="bottom" title="Settings" onclick="$('#modal-user-settings').modal('show');"><i class="gi gi-cogwheel"></i></a>
                                    <a href="<?php echo($prefix); ?>logout.php" data-toggle="tooltip" data-placement="bottom" title="Logout"><i class="gi gi-exit"></i></a>
                                </div>
                            </div>
                            <ul className="sidebar-section sidebar-themes clearfix sidebar-nav-mini-hide">
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-night themed-border-night" data-theme="<?php echo($prefix); ?>css/themes/night.css" data-toggle="tooltip" title="Night"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-amethyst themed-border-amethyst" data-theme="<?php echo($prefix); ?>css/themes/amethyst.css" data-toggle="tooltip" title="Amethyst"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-modern themed-border-modern" data-theme="<?php echo($prefix); ?>css/themes/modern.css" data-toggle="tooltip" title="Modern"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-autumn themed-border-autumn" data-theme="<?php echo($prefix); ?>css/themes/autumn.css" data-toggle="tooltip" title="Autumn"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-flatie themed-border-flatie" data-theme="<?php echo($prefix); ?>css/themes/flatie.css" data-toggle="tooltip" title="Flatie"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-spring themed-border-spring" data-theme="<?php echo($prefix); ?>css/themes/spring.css" data-toggle="tooltip" title="Spring"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-fancy themed-border-fancy" data-theme="<?php echo($prefix); ?>css/themes/fancy.css" data-toggle="tooltip" title="Fancy"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-fire themed-border-fire" data-theme="<?php echo($prefix); ?>css/themes/fire.css" data-toggle="tooltip" title="Fire"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-coral themed-border-coral" data-theme="<?php echo($prefix); ?>css/themes/coral.css" data-toggle="tooltip" title="Coral"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-lake themed-border-lake" data-theme="<?php echo($prefix); ?>css/themes/lake.css" data-toggle="tooltip" title="Lake"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-forest themed-border-forest" data-theme="<?php echo($prefix); ?>css/themes/forest.css" data-toggle="tooltip" title="Forest"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-waterlily themed-border-waterlily" data-theme="<?php echo($prefix); ?>css/themes/waterlily.css" data-toggle="tooltip" title="Waterlily"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-emerald themed-border-emerald" data-theme="<?php echo($prefix); ?>css/themes/emerald.css" data-toggle="tooltip" title="Emerald"></a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="themed-background-dark-blackberry themed-border-blackberry" data-theme="<?php echo($prefix); ?>css/themes/blackberry.css" data-toggle="tooltip" title="Blackberry"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

        )
    }
}