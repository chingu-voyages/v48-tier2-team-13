//Import video
import video from "../assets/video/DinosaursNG.mp4";

function AboutDinosaurs() {
  return (
    <div className="bg-bg-secondary">
      <div className="container grid gap-2 lg:grid lg:grid-cols-2 bg-bg-secondary py-[55px] 3xl:py-[0px] items-center text-text-light ">
        <div id="textContainer" className="w-[90%]">
          <h1 className="text-[25px] font-bold pb-[30px]">
            The Fascination with Dinosaurs
          </h1>

          <p className="pb-4">
            Ever since the first discovery of dinosaur fossils in the early 19th
            century, humanity has been captivated by these ancient creatures
            that once roamed the Earth. Our fascination with dinosaurs
            transcends age, culture, and borders, uniting enthusiasts in a
            shared wonderment of these colossal beings that dominated the planet
            millions of years ago.{" "}
          </p>

          <p className="pb-4">
            At the heart of our fascination lies the sheer magnitude of
            dinosaurs existence. These magnificent creatures evoke a sense of
            awe and curiosity unparalleled in the natural world. Their immense
            size, fearsome appearances, and mysterious extinction have fueled
            countless scientific inquiries and inspired generations of
            paleontologists to uncover their secrets buried deep within the
            Earths layers.
          </p>

          <p className="pb-4">
            Dinosaurs capture our imagination through their diverse forms and
            functions. Each species offers a glimpse into the remarkable
            diversity of prehistoric life. Their adaptations for survival, from
            armored plates to swift limbs, ignite our imagination and spark
            questions about their behavior, ecology, and evolutionary history.
          </p>

          <p className="pb-8">
            In essence, our fascination with dinosaurs symbolizes our innate
            desire to explore the unknown, unravel the mysteries of the past,
            and connect with the vast tapestry of life that has shaped our
            world.
          </p>
        </div>

        <div
          id="videoContainer"
          className="relative lg:mt-[10%] w-full xl:mb-[60px]"
        >
          <div className="w-full h-full 3xl:p-[50px] rounded-md">
            <video controls controlsList="nodownload" className="rounded-md">
              <source src={video} type="video/mp4" />
            </video>
            <div className="ml-0 mt-0 font-extralight text-xs">
              Source: www.youtube.com/@NatGeo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDinosaurs;
