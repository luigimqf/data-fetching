import React from "react";

export function useOnScreen(ref, offset = '0px') {
	const [isVisible, setIsVisible] = React.useState(false)

	React.useEffect(() => {
		if (ref.current == null) return;

		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ rootMargin: offset }
		)
		
		observer.observe(ref.current)

		return () => {
			if (ref.current == null) return
			observer.unobserve(ref.current)
		}
	}, [ref.current, offset])

	return isVisible
}