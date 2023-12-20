import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FaqSection = () => {
  const faq=[
    {
      q:"Bagaimana TaniLand Terbentuk",
      a:"TaniLand terbentuk dari...."
    },
    {
      q:"Apa yang membuat TaniLand berbeda dari startup IoT lainnya?",
      a:"Taniland membedakan diri dengan fokusnya yang khusus pada pertanian dan pengembangan solusi IoT untuk membantu petani. Dengan menyediakan alat monitoring lahan dan pengendalian hama, TaniLand mendukung pertanian modern dengan memberikan solusi yang inovatif dan terkini."
    },
    {
      q:"Bagaimana Taniland membantu petani dalam monitoring lahan mereka?",
      a:"Taniland menyediakan perangkat IoT yang terhubung secara langsung ke lahan pertanian. Perangkat ini mampu memberikan data real-time tentang kondisi tanah, suhu, kelembaban udara, dan lainnya. Petani dapat mengakses informasi ini melalui platform online, memungkinkan mereka untuk membuat keputusan yang lebih baik terkait pertanian mereka."
    },
    {
      q:"Apa keunggulan Taniland dalam pengendalian hama menggunakan teknologi IoT?",
      a:"Taniland menggunakan teknologi IoT untuk mendeteksi dan mengendalikan hama secara efektif. Dengan sensor dan perangkat cerdas, Taniland dapat memberikan pemberitahuan dini tentang kemungkinan serangan hama dan bahkan memberikan opsi pengendalian otomatis untuk melindungi tanaman."
    },

  ]
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
        <AccordionTrigger>Apa yang membuat TaniLand berbeda dari startup IoT lainnya?</AccordionTrigger>
        <AccordionContent>
        Taniland membedakan diri dengan fokusnya yang khusus pada pertanian dan pengembangan solusi IoT untuk membantu petani. Dengan menyediakan alat monitoring lahan dan pengendalian hama, TaniLand mendukung pertanian modern dengan memberikan solusi yang inovatif dan terkini.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Bagaimana Taniland membantu petani dalam monitoring lahan mereka?</AccordionTrigger>
        <AccordionContent>
        Taniland menyediakan perangkat IoT yang terhubung secara langsung ke lahan pertanian. Perangkat ini mampu memberikan data real-time tentang kondisi tanah, suhu, kelembaban udara, dan lainnya. Petani dapat mengakses informasi ini melalui platform online, memungkinkan mereka untuk membuat keputusan yang lebih baik terkait pertanian mereka.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Apa keunggulan Taniland ?</AccordionTrigger>
        <AccordionContent>
        Taniland menggunakan teknologi IoT untuk mendeteksi dan mengendalikan hama secara efektif. Dengan sensor dan perangkat cerdas, Taniland dapat memberikan pemberitahuan dini tentang kemungkinan serangan hama dan bahkan memberikan opsi pengendalian otomatis untuk melindungi tanaman.
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