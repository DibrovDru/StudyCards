import React from "react";
import "./Start_classes/style_home.css";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <section>
                <p><img className="picture_home" src="../picture.jpeg" alt=""/></p>
            </section>

            <section>
                <p className="title_text">StudyCards</p>
                <li>
                    <Link to="/sign_up">
                        <button className="button_sign_up"><p className="text_sign_up">Sign up</p></button>
                    </Link>
                </li>

                <li>
                    <Link to="/log_in">
                        <button className="button_log_in"><p className="text_log_in">Log in</p></button>
                    </Link>
                </li>
            </section>

            <section className="description">
                Hello! <br />
                Here you can create your own cards with therms, theorems, rules and so on to learn them up
            </section>
        </div>
    )
}

export default Home;