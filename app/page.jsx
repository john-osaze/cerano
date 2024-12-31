import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Vision from "./sections/Vision"
import Contact from "./sections/Contact"
import Newsletter from "./sections/Newsletter";
import Partners from "./sections/Partners";
import Team from "./sections/Team"

import "./css/custom.css"

export default function Index() {
	return (
		<>
			<Nav />
			<Hero />
			<Vision/>
			<About/>
			<Partners />
			<Team />
			<Newsletter />
			<Contact/>
			<Footer />
		</>
	);
}
