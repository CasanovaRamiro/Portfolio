import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

import Home from './Components/Home/Home';

function App() {
	return (
		<LazyMotion features={domAnimation} strict>
			<MotionConfig reducedMotion="user">
				<BrowserRouter>
					<Routes>
						<Route path={"/"} element={<Home />} />
						<Route path={"/home"} element={<Home />} />
					</Routes>
				</BrowserRouter>
			</MotionConfig>
		</LazyMotion>
	);
}

export default App
