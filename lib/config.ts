import type { Portfolio } from "@/lib/types";

const PORTFOLIO_DATA: Portfolio = {
	name: "Uzair Hammad",
	headline: "Computer Science Student at UCLA",
	bio: "",

	// Your contact email
	email: "uhammad@ucla.edu",

	// Add your links here
	// Supported icons: 'GitHub', 'LinkedIn', 'Twitter', 'Blog'
	links: [
		//{ name: "GitHub", url: "https" },
		{ name: "LinkedIn", url: "https://linkedin.com/in/uzair-hammad" },
		//{ name: "Twitter", url: "https" },
		// { name: "Blog", url: "https://yourblog.com" },
	],

	// Add your skills here
	skills: [
		"C++", "Python", "COMSOL Multiphysics"
	],

	// Add your projects here
	projects: [
		{
			
			title: "X Web Scraper",
			description: "Building a scraper to parse tweets for research into preparedness and response to recent wildfires in California",
			stack: ["Python"],
			githubLink: "",
			liveLink: "",
		}
		
	],

	// Add your experience here
	experience: [
		{
			role: "Phillips Research Scholar",
			company: "Air Force Research Laboratory",
			date: "Summer 2025",
			location: "Albuquerque, NM",
			description: "Selected as one of 154 AFRL Scholars from a pool of over 1,800 applicants. Modeled nanoparticle growth on slurry flow battery surfaces using COMSOL Multiphysics to assess durability and performance vs. lithium-ion batteries. Awarded ”Viewers’ Choice - Best Poster” out of about 80 submissions."

		},
		{
			role: "Developer",
			company: "B. John Garrick Institute for the Risk Sciences",
			date: "June 2025 - Present",
			location: "University of California, Los Angeles",
			description: "Developed features and resolved bugs for WiSE, a wildfire evacuation planning tool modeling dynamic fire spread. Contributed to UI logic and simulation parameter controls in collaboration with research and software teams."
		}
	],

	// Add any education or awards
	education: [
		{
			degree: "B.S. in Computer Science",
			institution: "University of California, Los Angeles",
			date: "Expected May 2028",
			note: ""
		}
	]
};

export default PORTFOLIO_DATA;