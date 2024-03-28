import DietChart from "./PieChart";
import DinosaurTypeChart from "./DoughnutChart";


function ChartsSection() {
    return (
        <section className="container text-text-light py-14 bg-primary">
            <div className="flex flex-col lg:flex-row justify-center gap-10">
                <div>
                    <DietChart />   
                    <div className="text-center pt-10 block w-4/5 m-auto">
                        <h3 className="font-bold">Dinosaur Diet Distribution</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>          
                </div>
                <div>
                    <DinosaurTypeChart />     
                    <div className="text-center pt-10 block w-4/5 m-auto">
                        <h3 className="font-bold">Dinosaur Type Distribution</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>         
                </div>
            </div>
        </section>
    );
}


export default ChartsSection;