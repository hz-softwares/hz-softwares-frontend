import "../styles.css";

export function AboutMePage() {
	return (
		<div class="container">
			<div class="profile">
				<img src="/images/me.png" alt="HadyElzayady" class="profile-image" />
			</div>
			<div class="about">
				<h1>About Me</h1>
				<p>
					Hello! My name is Hady Elzayady, and I am a passionate software engineer with a strong background in
					full-stack development, systems engineering, and cutting-edge technologies. With expertise in React, Node.js,
					Rust, and Kubernetes, I enjoy creating scalable, high-performance applications and tackling challenging
					architectural problems. I'm particularly interested in distributed systems, cloud computing, and
					micro-services, and I'm always exploring innovative tools like Bun.js, Biome.js, and Drizzle to enhance my
					workflows. When I'm not coding, I love diving into open-source contributions, building tools to boost
					productivity, and continuously learning to advance my career. Let’s connect and create something impactful!
				</p>
				<p>Feel free to reach out or connect with me!</p>
			</div>
			<div class="contact">
				<h2>Contact Me</h2>
				<p>
					Email: <a href="mailto:hadyelzayady1996@gmail.com">hadyelzayady1996@gmail.com</a>
				</p>
			</div>
		</div>
	);
}
