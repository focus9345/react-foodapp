import Scroll from "@/components/layout/scrolltrigger";
const AboutPage: React.FC = () => {
    return (
        <section className="mt-6">
            <h1>About Page</h1>
            <p>This website is an example of a React and Next.js food menu application. It uses MongoDB for the database, showcasing experience in connecting a database and building a shopping application. The UI/UX is designed using Tailwind CSS and Next UI, providing a simple interface for users to place meal orders.</p>
        
            <div className="mt-6">
                <Scroll>
                    <div>
                        <h3>Something Here</h3>
                        <p>with a bit of this and that.</p>
                    </div>
                    </Scroll>
            </div>
        </section>
    )
}

export default AboutPage;