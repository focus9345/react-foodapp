import Scroll from "@/components/layout/scrolltrigger";
const AboutPage: React.FC = () => {
    return (
        <section className="mt-6">
            <h1>About Page</h1>
            <p>This website is an example of a meal sharing appliation. A actor can upload new recipies to a sqlite DB. </p>
        
            <div className="my-10">
                <Scroll>
                    <div>
                        <h3>Specifications</h3>
                        <p>The build is an exampl of using some libraries together.</p>
                        <ul>
                            <li>React</li>
                            <li>React Router</li>
                            <li>Typescript</li>
                            <li>Sqlite</li>
                            <li>NextJS</li>
                            <li>Tailwind</li>
                            <li>Webpack</li>
                            <li>Framer Motion</li>
                            <li>NextUI</li>
                            <li>React Icons</li>
                            <li>Slugify</li>
                            <li>XSS</li>
                        </ul>
                    </div>
                    </Scroll>
            </div>
        </section>
    )
}

export default AboutPage;