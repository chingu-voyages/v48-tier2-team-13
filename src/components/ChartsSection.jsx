import DietChart from "./PieChart";
import DinosaurTypeChart from "./DoughnutChart";


function ChartsSection() {
    return (
        <section className="container text-text-light py-14 bg-primary">
            <h2 className="text-text-light font-bold text-2xl pb-7">Charts</h2>
            <div className="flex flex-col lg:flex-row justify-center gap-10">
                <div className="lg:w-6/12">
                    <DietChart />   
                    <div className="text-center pt-10 block w-4/5 m-auto">
                        <h3 className="mb-2 font-semibold text-xl">Dinosaur Diet Distribution</h3>
                        <p className="text-sm">Some were plant-eaters, some were meat-eaters, while others were omnivores. Dive into the chart to learn about the distribution of dinosaurs based on their diet.</p>
                    </div>          
                </div>
                <div className="lg:w-6/12">
                    <DinosaurTypeChart />     
                    <div className="text-center pt-10 block w-4/5 m-auto">
                        <h3 className="mb-2 font-semibold text-xl">Dinosaur Type Distribution</h3>
                        <p className="text-sm">From the small ornithischian to the large theropod, the variety of dinosaur types never cease to amaze. Explore the chart to discover them and their distribution.</p>
                    </div>         
                </div>
            </div>
        </section>
    );
}


export default ChartsSection;