import Typewriter from "typewriter-effect";

export default function TypeWriterComponent(props) {
	const builtComponent = (
		<Typewriter
			options={{
				strings: ["I am 17 years old.", "I live in Vancouver.", "Tryhard and Tech Enthusiast", "I like video games.", "Ur mom"],
				autoStart: true,
				loop: true,
				delay: props.delay || 150,
				pauseFor: props.pauseFor || 700,
			}}
		/>
	);
	return builtComponent;
}
