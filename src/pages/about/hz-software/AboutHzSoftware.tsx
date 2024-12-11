import "../styles.css";

export function AboutHzSoftwarePage() {
	return (
		<div class="container">
			<div class="profile">
				<img src="/images/hz-softwares.png" alt="hz-softwares" class="profile-image" />
			</div>
			<div class="about">
				<h1>About hz-software</h1>
				<div role="alert" class="alert alert-warning">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 shrink-0 stroke-current"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							stroke-line-cap="round"
							stroke-line-join="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
					<span>Warning: I am still migrating some services from old infrastructure to a new one so some services may not be available yet</span>
				</div>
				This web app is designed to show my learnings in a practical way, so here you will find
				<ul class="list-disc">
					<li>Advances algorithms like (top-sort) implemented for its common use case</li>
					<li>Cloud services implemented from scratch like distributes queue service similar to aws sqs</li>
					<li>Minimal tools for my personal usage like brightness control in my arch linux machine</li>
				</ul>
				<p>I will try to add tags for used tools in each software</p>
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
