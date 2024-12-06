import "../styles.css";

export function AboutHzSoftwarePage() {
	return (
		<div class="container">
			<div class="profile">
				<img src="/images/hz-softwares.png" alt="hz-softwares" class="profile-image" />
			</div>
			<div class="about">
				<h1>About hz-software</h1>
				This web app is designed to show my learnings in a practical way, so here you will find
				<ul class="list-disc">
					<li>Advances algorithms like (top-sort) implemented for its common use case</li>
					<li>Cloud services implemented from scratch like distributes queue service similar to aws sqs</li>
					<li>Minimal tools for my personal usage like brightness control in my arch linux machine</li>
				</ul>
				<p>I will try to add tags for uses tools in each software</p>
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
