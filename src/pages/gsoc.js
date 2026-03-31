import React from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
import clsx from "clsx";

function gsoc() {
    return (
        <Layout title="Google Summer of Code (GSoC)">
            <div className={styles.aboutContainer}>
                <h1>
                    <a name="background" className="anchor" href="#background">
                        <span className="octicon octicon-link"></span>
                    </a>
                    <a href="https://summerofcode.withgoogle.com/">
                        Google Summer of Code (GSoC)
                    </a>
                </h1>
                <div className={clsx(styles.cardContainer)}>
                    {" "}
                    <div className="card">
                        <div className="card__header" style={{ textAlign: "center" }}>
                        </div>
                        <div className="card__body">
                            <h2>What is GSoC?</h2>
                            <p>
                                Google Summer of Code is a global program that pairs contributors
                                with open source software projects. Over the summer, contributors
                                gain real-world experience contributing to software development and
                                working with mentors, while participating organizations grow their
                                communities and codebases.
                            </p>

                            <p>&nbsp;</p>

                            <h2>
                                <a href="/gsoc_ideas/">Project Ideas</a>
                            </h2>

                            <p>
                                Ecosystem science has many components, so does PEcAn. Some project
                                ideas can be found on our{" "}
                                <a href="/gsoc_ideas/">project ideas list</a>.
                                Contributors are also welcome to develop new ideas with feedback from 
                                the community. 
                            </p>

                            <p>&nbsp;</p>

                            <h2>Getting Started</h2>

                            <p>
                                If you are interested in contributing to PEcAn through GSoC, the
                                best place to start is our{" "}
                                <a href="https://github.com/PecanProject/pecan/discussions/3469">
                                    getting started discussion
                                </a>.
                                {" "}Please read that page first and follow the instructions there.
                            </p>

                            <p>&nbsp;</p>

                            <h3>A few good places to start</h3>

                            <ul>
                                <li>
                                    Read the{" "}
                                    <a href="https://github.com/PecanProject/pecan/discussions/3469">
                                        getting started discussion
                                    </a>
                                    , along with our{" "}
                                    <a href="https://github.com/PecanProject/pecan/blob/develop/CONTRIBUTING.md">
                                        contributing guide
                                    </a>{" "}
                                    and{" "}
                                    <a href="https://github.com/PecanProject/pecan/blob/develop/CODE_OF_CONDUCT.md">
                                        code of conduct
                                    </a>.
                                </li>
                                <li>
                                    Review our <a href="/gsoc_ideas/">project ideas list</a> and
                                    identify one or two ideas that interest you.
                                </li>
                                <li>
                                    Join the{" "}
                                    <a
                                        href="https://pecanproject.slack.com/archives/C0853U6GF71"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        #gsoc
                                    </a>{" "}
                                    channel in Slack and introduce yourself.
                                </li>
                                <li>
                                    Improve documentation, work on tests, or help triage open pull
                                    requests and issues.
                                </li>
                                <li>
                                    Look for a{" "}
                                    <a href="https://github.com/search?q=org%3APecanProject+label%3A%22good+first+issue%22+&type=issues">
                                        good first issue
                                    </a>{" "}
                                    when you are ready to start contributing code.
                                </li>
                            </ul>

                            <p>&nbsp;</p>

                            <h2>Applying to GSoC</h2>

                            <p>
                                After reviewing the project ideas and getting started guidance, reach out
                                in Slack. Contact the project mentor(s) if you have questions about a
                                specific project idea.

                                If multiple mentors are listed, create a thread with all mentors. This
                                helps us give more efficient and consistent feedback.

                                Becoming part of the community before submitting a proposal is important.
                                Proposals submitted at the last minute, without prior engagement with the
                                project or mentors, are much less likely to be competitive.

                                Once you have gotten acquainted with the project and discussed your
                                interests with potential mentors, you can begin drafting your proposal.
                                A strong proposal should include a realistic timeline, clear milestones,
                                and concrete deliverables.
                            </p>

                            <p>&nbsp;</p>

                            <p>
                                See also{" "}
                                <a href="https://google.github.io/gsocguides/student/writing-a-proposal.html">
                                    Google&apos;s proposal guidelines
                                </a>.
                            </p>

                            <p>&nbsp;</p>

                            <p>Good luck</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default gsoc;
