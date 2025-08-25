import Administration from "@/components/custom/Administration";
import GridPicture from "@/components/custom/GridPicture";
import SliderCarousel from "@/components/custom/SliderCarousel";
import The100DaysProgram from "@/components/custom/The100DaysProgram";


export default function Home() {
	return <div className="">
		<SliderCarousel />
		<Administration />
		<The100DaysProgram />
		<GridPicture/>
		
	</div>;
}
