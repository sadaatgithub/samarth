import PageBanner from "@/components/banners/PageBanner";
import { useRouter } from "next/router";
import Link from "next/link";

const eachService = [
  {
    id: 1,
    slug: "orthopedic-physiotherapy",
    desc: `Orthopedic physiotherapy is a type of physical therapy that focuses on the treatment of musculoskeletal injuries and conditions. The goal of orthopedic physiotherapy is to help patients recover from injury, reduce pain and swelling, improve mobility, and prevent further injury.`
  },
  {
    id: 2,
    slug: "hydrotherapy",
    desc: `Hydrotherapy is a type of physical therapy that involves the use of water to help heal and rehabilitate the body. It is a non-invasive and low-impact form of therapy that can be used to treat a wide range of conditions, including musculoskeletal injuries, joint pain, arthritis, and back pain.

  /n Hydrotherapy uses the properties of water, such as buoyancy, resistance, and temperature, to help reduce pain and swelling, improve mobility, and promote healing. For example, buoyancy in water can help reduce stress on the joints, making it easier for patients to perform exercises and movements. Resistance in water can be used to help strengthen muscles and improve joint stability. And, changes in water temperature can be used to help manage pain and promote healing.
  
  /n Hydrotherapy can be performed in a variety of settings, including swimming pools, hydrotherapy pools, and hot tubs. It is typically performed under the supervision of a physical therapist, who will design an individualized treatment plan based on the patient's specific needs and goals. This may involve a combination of exercises, stretches, and movements performed in the water.
  
  /n In addition to helping patients recover from injury, hydrotherapy can also help improve overall physical function and prevent future injuries. For example, it can help improve flexibility, strength, and balance, and promote healthy posture and movement patterns. It can also be used to help manage chronic conditions, such as arthritis, by reducing pain and improving joint mobility.
  
  /n Hydrotherapy is a safe and effective form of therapy that can be used to help heal and rehabilitate the body. If you are experiencing pain or injury, consider seeking the help of a physical therapist to see if hydrotherapy is right for you.`,
  },
  {
    id: 3,
    slug: "neuro-physiotherapy",
    desc: `Neuro physiotherapy is a type of physical therapy that specializes in the treatment of neurological conditions and injuries. The goal of neuro physiotherapy is to help patients improve their physical function, reduce pain and discomfort, and improve quality of life.

    /n Neuro physiotherapy can be used to treat a wide range of conditions, including spinal cord injuries, traumatic brain injuries, stroke, multiple sclerosis, and Parkinson's disease. Physiotherapists use a variety of techniques, such as exercise, manual therapy, and modalities, to help patients recover from injury and improve their overall physical function.
    
    /n One of the main benefits of neuro physiotherapy is that it is non-invasive and does not involve the use of drugs or surgery. This makes it a safe and effective alternative to more invasive treatments and can help patients avoid the risks and side effects associated with these treatments.
    
    /n Neuro physiotherapy can be performed in a variety of settings, including hospitals, clinics, and rehabilitation centers. Physiotherapists work closely with patients to develop individualized treatment plans based on their specific needs and goals. This may involve a combination of exercises, manual therapy, and modalities, such as electrical stimulation, heat therapy, and ultrasound.
    
    /n In addition to helping patients recover from injury, neuro physiotherapy can also help improve overall physical function and prevent future injuries. For example, it can help improve balance, coordination, and mobility, and promote healthy posture and movement patterns. It can also be used to help manage chronic conditions, such as Parkinson's disease, by reducing symptoms and improving physical function.
    
    /n In conclusion, neuro physiotherapy is an effective and non-invasive form of treatment for neurological conditions and injuries. It can help patients improve their physical function, reduce pain and discomfort, and improve quality of life. If you are experiencing symptoms of a neurological condition or injury, consider seeking the help of a neuro physiotherapist.`,
  },
  {
    id: 4,
    slug: "sports-physiotherapy-&-fitness",
    desc: `Sport physiotherapy and fitness is a specialized field of physical therapy that focuses on the treatment and rehabilitation of athletic injuries. The goal of sport physiotherapy is to help athletes recover from injury, improve their physical function, and prevent future injuries.

    /n Sport physiotherapy can be used to treat a wide range of athletic injuries, including sprains, strains, fractures, and overuse injuries. Physiotherapists use a variety of techniques, such as exercise, manual therapy, and modalities, to help athletes recover from injury and improve their overall physical function.
    
    /n One of the main benefits of sport physiotherapy is that it is designed specifically for athletes. Physiotherapists understand the unique demands of athletic performance and use this knowledge to design individualized treatment plans that meet the specific needs of each athlete.
    
    /n Sport physiotherapy can be performed in a variety of settings, including sports clinics, rehabilitation centers, and fitness facilities. Physiotherapists work closely with athletes to develop individualized treatment plans based on their specific needs and goals. This may involve a combination of exercises, manual therapy, and modalities, such as electrical stimulation, heat therapy, and ultrasound.
    
    /n In addition to helping athletes recover from injury, sport physiotherapy can also help improve overall physical function and prevent future injuries. For example, it can help improve strength, flexibility, and endurance, and promote healthy posture and movement patterns. It can also be used to help athletes optimize their performance and reach their full potential.
    
    /n In conclusion, sport physiotherapy and fitness is an effective and specialized form of physical therapy that is designed specifically for athletes. It can help athletes recover from injury, improve their physical function, and prevent future injuries. If you are an athlete and experiencing symptoms of an injury, consider seeking the help of a sport physiotherapist.`,
  },
];

const Services = () => {
  const router = useRouter();
  const { query } = router;

  //   const result = eachService.filter((service) => service.slug == query.slug);
  //   console.log(result);
  return (
    <div className="">
      <PageBanner />
      <div className="flex mt-10  md:flex-row flex-col xl:px-20  px-6 mb-10">
        {eachService
          .filter((service) => service.slug == query.slug)
          .map((service) => {
            return (
              <div className="flex gap-4 items-center flex-col lg:flex-row">
                <div className="w-full md:w-1/2 ">
                  <img
                    className="w-full md:max-w-lg mb-8"
                    src="https://via.placeholder.com/500x500"
                    alt="Orthopedic Physiotherapy Image"
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                    {service.slug.split("-").join(" ").toUpperCase()}
                  </h2>
                  <p className="text-gray-700 text-xl mb-6">
                    {service.desc}
                  </p>
                  <ul className="text-gray-700 text-lg mb-6">
                    <li className="mb-4">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Assessment and diagnosis of musculoskeletal conditions
                    </li>
                    <li className="mb-4">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Personalized treatment plans to optimize recovery and
                      improve mobility
                    </li>
                    <li className="mb-4">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Rehabilitation exercises and techniques to manage pain and
                      improve strength
                    </li>
                    <li className="mb-4">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      Education and guidance to help prevent future injuries and
                      promote overall wellness
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            );
          })}

        {/* {eachService
        .filter((service) => service.slug == query.slug)
        .map((service) => {
          return ( 
              <div className="  md:px-20 px-4 w-full" key={service.id}>
                <div className="capitalize text-2xl md:text-4xl font-bold text-slate-600">
                  {service.slug.split("-").join(" ").toUpperCase()}
                </div>
                <div className=" mt-8 flex flex-col gap-6 mb-10 text-slate-500 text-lg">
                  {service.desc.split("/n").map((desc, index) => {
                    return (
                    
                        <p className="text-justify" key={index}>{desc}</p>
                      
                    );
                  })}
                </div>
              </div> 
            
          );
        })}

        <div className=" flex-col p-6  md:w-1/3 sticky top-4 left-0 hidden">
          <h4 className="text-xl text-rose-400 font-bold mt-10">Other Services</h4>
          <ul className=" flex flex-col gap-2 text-slate-600 mt-4 list-disc list-inside">
            {eachService.filter(service => service.slug != query.slug).map(service =>{
              return(
              <li key={service.id} className="hover:underline hover:text-rose-300">
                <Link href={`/our-services/${service.slug.split(" ").join("-").toLowerCase()}`}>{service.slug.split("-").join(" ").toUpperCase()}</Link></li>
              )
            })}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
