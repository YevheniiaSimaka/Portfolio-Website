"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative text-black">
      <div className="flex flex-row items-center gap-3">
        <div
          className="p-4 md:py-3 md:px-3 transition flex flex-row  items-center gap-3 rounded-full cursor-pointer hover:bg-neutral-100"
          onClick={toggleOpen}
        >
          <AiOutlineMenu size={24} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute shadow-md rounded-xl border-[1px] border-neutral-200 w-[40vw] md:w-[20vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={loginModal.onOpen} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Signup" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
