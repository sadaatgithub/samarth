import PageBanner from "@/components/banners/PageBanner";
import { useRouter } from "next/router";
import Link from "next/link";
import BookAppointement from "@/components/buttons/BookAppointement";
import Container from "@/components/container/Container";

const eachService = [
  {
    id: 1,
    slug: "orthopedic-physiotherapy",
    desc: `Orthopedic physiotherapy is a type of physical therapy that is focused on treating injuries and conditions related to the muscles and bones. Its primary goal is to aid patients in recovering from injuries, reducing pain and swelling, improving their mobility, and preventing further injuries.

    /n Orthopedic physiotherapy can be used to treat a broad range of conditions such as arthritis, joint pain, sports injuries, and back pain. Various techniques such as exercise, manual therapy, and modalities, such as ultrasound, heat therapy, and electrical stimulation are used by physiotherapists to help patients recover from injuries and improve their physical function.
    
    /n One of the significant advantages of orthopedic physiotherapy is that it is a non-invasive and drug-free form of treatment, making it a safe and effective alternative to more invasive procedures. Patients can avoid the risks and side effects associated with these treatments.
    
    /n Orthopedic physiotherapy can be provided in hospitals, clinics, and rehabilitation centers. The physiotherapists work with patients closely to develop personalized treatment plans based on their specific needs and goals. Treatment plans may include a combination of exercises, manual therapy, and modalities, depending on the patient's condition.
    
    /n Apart from helping patients recover from injuries, orthopedic physiotherapy can also help prevent future injuries by promoting healthy posture, flexibility, and strength. This makes it especially beneficial for athletes and individuals who are at risk of injury due to physical activity.
    
    /n Overall, orthopedic physiotherapy is a highly effective and safe form of treatment for musculoskeletal injuries and conditions. If you are experiencing any pain or injury, you may want to consider seeking the help of an orthopedic physiotherapist.`
  },
  {
    id: 2,
    slug: "hydrotherapy",
    desc: `Hydrotherapy is a form of physical therapy that uses water to help people heal and recover from injuries. It is a gentle and non-invasive therapy that can be used to treat a variety of conditions such as joint pain, arthritis, back pain, and musculoskeletal injuries.

    /n The unique properties of water, such as buoyancy, resistance, and temperature, are used in hydrotherapy to help reduce pain, swelling, and improve mobility. For example, the buoyancy of water helps reduce the strain on joints, making it easier for people to move and perform exercises. Resistance in water can help strengthen muscles and promote joint stability. And changes in water temperature can help manage pain and promote healing.
    
    /n Hydrotherapy can be performed in swimming pools, hot tubs, or hydrotherapy pools under the guidance of a physical therapist. The therapist will develop a personalized treatment plan based on the individual's needs and goals, which may include a range of exercises, stretches, and movements performed in the water.
    
    /n Hydrotherapy is not just useful for people recovering from an injury, but can also help improve overall physical function and prevent future injuries. It can help increase flexibility, strength, balance, and promote healthy posture and movement patterns. For people with chronic conditions like arthritis, hydrotherapy can help reduce pain and improve joint mobility.
    
    /n Hydrotherapy is a safe and effective form of physical therapy that can help people recover from injuries and improve their overall physical function. If you are experiencing pain or an injury, it may be worth considering hydrotherapy as a potential treatment option. A physical therapist can help determine if it is the right therapy for you.
    
    
    
    
    `,
  },
  {
    id: 3,
    slug: "neuro-physiotherapy",
    desc: `Neuro physiotherapy is a type of physical therapy that specializes in the treatment of neurological conditions and injuries. This therapy aims to help patients recover from injury, reduce pain, and improve their overall physical function, ultimately improving their quality of life. Neuro physiotherapy can be used to treat a range of conditions including spinal cord injuries, traumatic brain injuries, stroke, multiple sclerosis, and Parkinson's disease.

    /n The techniques used in neuro physiotherapy include exercises, manual therapy, and modalities like electrical stimulation, heat therapy, and ultrasound. The physiotherapist works closely with the patient to develop an individualized treatment plan based on their specific needs and goals. Neuro physiotherapy is non-invasive, which means that it does not involve the use of drugs or surgery. This makes it a safe and effective alternative to other more invasive treatments.
    
    /n Neuro physiotherapy can be performed in various settings such as hospitals, clinics, and rehabilitation centers. Patients can benefit from this therapy by improving their overall physical function and reducing the risk of future injuries. It can help to improve balance, coordination, mobility, and promote healthy posture and movement patterns. Furthermore, it can be used to manage chronic conditions such as Parkinson's disease by reducing symptoms and improving physical function.
    
    /n In conclusion, neuro physiotherapy is an effective way to treat neurological conditions and injuries. If you are experiencing any symptoms of a neurological condition or injury, you should consider seeking the help of a neuro physiotherapist.`,
  },
  {
    id: 4,
    slug: "sports-physiotherapy-&-fitness",
    desc: `Sport physiotherapy and fitness is a type of physical therapy that focuses on treating athletic injuries. The aim is to help athletes recover from injury, improve their physical function, and prevent future injuries. This specialized field can help with a range of athletic injuries like sprains, strains, fractures, and overuse injuries. The physiotherapists in this field use various techniques like exercise, manual therapy, and modalities such as electrical stimulation, heat therapy, and ultrasound to design personalized treatment plans for each athlete. 

    /n The main benefit of sport physiotherapy is that it is tailored to meet the unique demands of athletic performance. Physiotherapists are knowledgeable in the demands of athletic activities and can use this knowledge to design treatment plans that meet the specific needs of each athlete. They work in various settings like sports clinics, rehabilitation centers, and fitness facilities. 
    
    /n Apart from treating injuries, sport physiotherapy can also help to improve overall physical function and prevent future injuries. It can help athletes improve their strength, flexibility, and endurance, as well as promote healthy posture and movement patterns. Additionally, it can be used to help athletes optimize their performance and reach their full potential. 
    
    /n In conclusion, sport physiotherapy and fitness is a specialized form of physical therapy that is designed specifically for athletes. It is effective in treating athletic injuries, improving physical function, and preventing future injuries. If you are an athlete and experiencing symptoms of an injury, consider seeking the help of a sport physiotherapist.`,
  },
  {
    id:5,
    slug:"physiotherapy-in-hemophilia",
    desc:`
    Hemophilia is a genetic disorder that makes it difficult for the blood to clot, which can lead to excessive bleeding and bruising. Hemophilia patients often require physiotherapy as part of their treatment plan.

/n Physiotherapy is crucial in managing joint health and preventing joint damage in hemophilia patients. Hemophilia patients are at a higher risk of developing joint problems due to bleeding into the joints. Physiotherapy can help reduce pain, swelling, and stiffness in the joints, as well as improve joint mobility and strength.

/n Physiotherapy for hemophilia patients usually involves exercises and stretches that focus on enhancing joint range of motion, strength, and flexibility. The physiotherapist creates an individualized exercise program based on the patient's specific needs and goals.

/n In addition to exercises, hemophilia patients may also benefit from manual therapies such as massage, joint mobilization, and soft tissue techniques. These therapies can help improve blood flow to the affected area, reduce pain and inflammation, and promote healing.

/n Overall, physiotherapy plays a vital role in the treatment of hemophilia, enabling patients to manage their symptoms and improve their quality of life. By working with a physiotherapist, hemophilia patients can enhance their joint health, reduce the risk of complications, and lead a more active and fulfilling life.
`
  }
];

const Services = () => {
  const router = useRouter();
  const { query } = router;
  return (
    <div className="">
      <PageBanner />
      <Container>
      <div className="flex mt-10 md:divide-x-2 divide-slate-200 divide-y gap-8 md:divide-y-0 md:flex-row flex-col bg-[url('../public/knee.svg')] bg-no-repeat bg-contain bg-center bg-fixed">
      {eachService
        .filter((service) => service.slug === query.slug)
        .map((service) => {
          const title = service.slug.split("-").join(" ")
          const capitalTitle = title.charAt(0).toUpperCase() + title.slice(1)
          return ( 
              <div className=" md:w-3/4" key={service.id}>
                <div className="capitalize text-2xl md:text-4xl font-bold text-slate-600">
                {capitalTitle}
                </div>
                <div className=" mt-8 flex flex-col gap-6 mb-10 text-slate-600">
                  {service.desc.split("/n").map((desc, index) => {
                    return (
                    
                        <p className="text-justify" key={index}>{desc}</p>

                      
                    );
                  })}
                  <div className="max-w-xs mt-8 text-lg">
                  <BookAppointement title="Book An Appointment"/></div>
                </div>
              </div> 
            
          );
        })}


        
        <div className="flex flex-col p-6  md:w-1/4 left-0 relative grow">
          <div className="sticky top-14 ">
          <h4 className="text-xl text-gray-600 font-semibold mt-10">Other Services</h4>
          <ul className=" flex flex-col gap-2 text-slate-500 mt-4 list-disc list-inside">
            {eachService.filter(service => service.slug != query.slug).map(service =>{
              const title = service.slug.split("-").join(" ")
              const capitalTitle = title.charAt(0).toUpperCase() + title.slice(1)
              return(
              <li key={service.id} className="hover:underline hover:text-gray-900">
                <Link href={`/our-services/${service.slug.split(" ").join("-").toLowerCase()}`}>{capitalTitle}</Link></li>
              )
            })}
          </ul>
          </div>
        </div>  
      </div>
      </Container>
    </div>
  );
};

export default Services;



