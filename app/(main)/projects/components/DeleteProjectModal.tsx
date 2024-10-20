import LoadingThinkingWomen from '@/components/Common/Loaders/LoadingThinkingWomen';
import Modal from '@/components/Common/Modal/Modal';
import { useModal } from '@/lib/context/modal-context';
import { useDELETE } from '@/lib/hooks/useDelete.hook';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import toast from 'react-hot-toast';

type Props = {
  projectId: string;
};

const DeleteProjectModal = ({ projectId }: Props) => {
  const { hideModal } = useModal();

  const { mutate: deleteProject, isPending: deletingProject } = useDELETE(true);

  const handleDeleteProject = (event: any) => {
    event.preventDefault();
    deleteProject(`projects/${projectId}`, {
      onSuccess: () => {
        hideModal();
        window.location.href = '/organization/manage/projects';
      },
      onError: (error: any) => {
        toast.error('could not delete');
      },
    });
  };

  return (
    <Modal onClose={hideModal} isOpen={true}>
      {deletingProject ? (
        <LoadingThinkingWomen />
      ) : (
        <AnimatePresence initial={false} mode="wait">
          <div className="text-white-100 mx-auto w-[95%] rounded-md bg-[#F0EBD6] px-5 py-10 lg:w-1/3">
            <div className="flex flex-col items-center gap-5">
              <div>
                <svg
                  width="96"
                  height="90"
                  viewBox="0 0 96 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M46.8116 15.695C60.1407 12.8953 74.2427 18.8067 83.3129 28.8873C92.9885 39.6406 99.1404 54.9044 94.3254 68.5012C89.8657 81.0947 74.9885 85.4958 62.0107 89.0416C52.2854 91.6988 43.0754 88.3206 33.5199 85.1145C21.0971 80.9464 2.47959 81.103 0.190217 68.2993C-2.10469 55.4646 16.9545 50.794 25.6325 41.0025C33.3104 32.3392 35.4325 18.085 46.8116 15.695Z"
                    fill="#C4C4C4"
                  />
                  <path
                    d="M59.6335 6.14344L64.1643 6.10814L64.129 2.24815C64.129 1.64797 63.8818 1.07133 63.4582 0.647674C63.0345 0.224018 62.4461 -0.0113471 61.8577 0.000421092L39.5216 0.176945C38.9332 0.176945 38.3448 0.424077 37.9211 0.847734C37.4975 1.27139 37.2621 1.8598 37.2739 2.45998L37.3092 6.31996L41.8282 6.28466L41.8164 4.68418L59.6217 4.54296L59.6335 6.14344Z"
                    fill="#0F452C"
                  />
                  <path
                    d="M20.9991 20.8535C20.2813 20.8653 19.6105 21.1831 19.1633 21.7362C18.7161 22.2893 18.5278 23.0189 18.6573 23.7132L28.6838 76.0466C28.9074 77.1881 29.9077 78.0119 31.061 78.0001L71.579 77.6824C72.7323 77.6706 73.7208 76.8468 73.9327 75.7053L83.5002 23.219C83.6297 22.5129 83.4296 21.7832 82.9707 21.2419C82.5117 20.7006 81.8292 20.3828 81.1113 20.3828L20.9991 20.8535ZM38.2749 74.4461C36.9686 74.6579 35.7447 73.7635 35.5447 72.469L28.6603 29.3267C28.4484 28.0204 29.3428 26.7965 30.6373 26.5964C31.9436 26.3846 33.1675 27.279 33.3676 28.5735L40.252 71.7159C40.4638 73.0104 39.5812 74.2343 38.2749 74.4461ZM51.4789 74.6108C50.1608 74.6226 49.0781 73.5635 49.0781 72.2454L48.7369 28.5617C48.7251 27.2437 49.7842 26.161 51.1023 26.161C52.4203 26.1492 53.503 27.2084 53.5148 28.5264L53.8561 72.2101C53.8561 73.5282 52.7969 74.6108 51.4789 74.6108ZM73.5796 28.9736L67.366 72.2101C67.1777 73.5164 65.9656 74.4226 64.6593 74.2343C63.353 74.046 62.4469 72.8338 62.6352 71.5276L68.8488 28.2911C69.0371 26.9848 70.2492 26.0786 71.5555 26.2669C72.8618 26.467 73.7679 27.6674 73.5796 28.9736Z"
                    fill="#0F452C"
                  />
                  <path
                    d="M15.6429 18.6176L86.4288 18.0644L86.37 10.8505L79.8033 10.8976L79.7798 7.10822C79.7798 6.81401 79.6503 6.5198 79.4385 6.31974C79.2267 6.10792 78.9325 5.99023 78.6382 5.99023L64.1516 6.10792L59.6208 6.14322L41.8272 6.28444L37.2964 6.31974L23.7983 6.42566C23.5041 6.42566 23.2099 6.55511 23.0098 6.76694C22.798 6.97877 22.6803 7.27297 22.6803 7.56718L22.7038 11.3566L15.5723 11.4154L15.6429 18.6176Z"
                    fill="#AAD4C8"
                  />
                  <path
                    d="M51.0901 26.1603C49.7721 26.172 48.7129 27.2429 48.7247 28.561L49.066 72.2447C49.0778 73.5627 50.1487 74.6218 51.4667 74.6101C52.7848 74.5983 53.8439 73.5274 53.8321 72.2094L53.5026 28.5257C53.4908 27.2076 52.4199 26.1485 51.0901 26.1603Z"
                    fill="#AAD4C8"
                  />
                  <path
                    d="M68.8458 28.2922L62.6322 71.5287C62.4439 72.835 63.35 74.0471 64.6563 74.2354C65.9626 74.4237 67.1747 73.5175 67.363 72.2113L73.5766 28.9748C73.7649 27.6685 72.8588 26.4564 71.5525 26.2681C70.2462 26.0915 69.0341 26.9977 68.8458 28.2922Z"
                    fill="#AAD4C8"
                  />
                  <path
                    d="M30.6374 26.5978C29.3311 26.8096 28.4485 28.0217 28.6603 29.328L35.5447 72.4704C35.7448 73.7649 36.9804 74.6593 38.2749 74.4474C39.5812 74.2356 40.4638 73.0117 40.252 71.7172L33.3676 28.5749C33.1675 27.2686 31.9436 26.386 30.6374 26.5978Z"
                    fill="#AAD4C8"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-primary font-sora text-3xl font-bold">
                  Delete Project
                </h1>
                <h2 className="text-black-100 font-quickSand text-lg">
                  Are sure you want to delete this project?
                </h2>
              </div>
              <div className="flex gap-10">
                <button
                  onClick={handleDeleteProject}
                  className="bg-btnWarning text-white-100 font-quickSand rounded-md px-8 py-3 text-base font-semibold"
                >
                  Delete
                </button>

                <button
                  onClick={hideModal}
                  className="border-btnWarning text-btnWarning font-quickSand rounded-md border px-8 py-3 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </Modal>
  );
};

export default DeleteProjectModal;
