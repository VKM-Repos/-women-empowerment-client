'use client'
import LoadingCircle from "@/components/Common/Loaders/LoadingCircle";
// import discussionsDetails from "@/components/UI/Cards/discussionsDetails";

import { useModal } from "@/lib/context/modal-context";
import Modal from "@/components/Common/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { discussionData } from "../sampledata";



const DiscussionsDetailsPage = ({ params }: { params: { id: string } }) => {
  const  {hideModal}  = useModal()

  const discussions = discussionData.find((discussions) => discussions.id === params.id) ;
  //   for server side fetching use react-query and useEffect

  console.log(discussions);

  if (!discussions) {
    return <LoadingCircle />;
  }

  

  return (
    // to properly use generate static params all hooks should not be here, including framer, and this modal, put inside the discussion details page
    // <discussionsDetails discussions={discussions} />
    <Modal onClose={hideModal} isOpen={true}>
         <AnimatePresence initial={false} mode="wait">
             <div className="w-1/2 mx-auto bg-primaryWhite flex items-center h-[60vh]">Discussion Details page {discussions.id}</div>
          </AnimatePresence>
    </Modal>
  );
};

export default DiscussionsDetailsPage;


// Generate static parameters for your dynamic routes
// export async function generateStaticParams() {
//     return discussionData.map((discussions) => ({
//         params: {
//             id: discussions.id,
//         },
//     }));
// }
