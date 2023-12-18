import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FaqSection = () => {
    return ( 
        <>
        <div className="pb-10 container">

            <div className=" mx-auto py-10  flex sm:flex-row flex-col justify-between items-center overflow-hidden">
        <div className="md:w-1/2">
        <div className="text-4xl font-bold mb-5">
        Punya pertanyaan penting tentang Taniland?
                </div>
                <div>
                Jangan khawatir! Kami punya jawaban yang Anda butuhkan:
                </div>

               
        </div>
        <div className="md:w-1/2 w-full">
        <Accordion type="single" collapsible className="w-full text-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
      </div>

    </div>
        </>
     );
}
 
export default FaqSection;