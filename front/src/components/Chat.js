import React, { Component } from 'react';
import Talk from 'talkjs';
//require("dotenv").config();
class Chat extends Component {

  
    constructor(props) {
        super(props);
        
        this.inbox = undefined;

        let currentUser=props.user;
       

        this.state = {
            currentUser
        }
    }       
    componentDidMount() {
            Talk.ready
                .then(() => {
                    const me = new Talk.User({
                        id: this.state.currentUser._id,
                        name: this.state.currentUser.username,
                        email: this.state.currentUser.email,
                        photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
                        welcomeMessage: "Hey there! Love to chat :-)"
                    });
                    
                    if (!window.talkSession) {
                        window.talkSession = new Talk.Session({
                            appId: "tknEJI1i",
                            me: me
                        });
                    }

            

                
                    this.inbox = window.talkSession.createInbox();
                    this.inbox.mount(this.container);
      
                })
                .catch(e => console.error(e));
        }

    render() {
        return (
            <div className="container">
                <section>
                    <h1>Messages</h1>
                </section>
            <React.Fragment>
            <div style={{height: '500px'}} className="inbox-container" ref={c => this.container = c}>Loading...</div>
        </React.Fragment>
        </div>
        );
    }
} 
export default Chat;